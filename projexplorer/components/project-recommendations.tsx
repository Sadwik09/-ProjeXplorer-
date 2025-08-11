"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ArrowLeft,
  Clock,
  Users,
  ExternalLink,
  BookOpen,
  Star,
  Download,
  Share2,
  Github,
  Video,
  FileText,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { projectDatabase } from "@/lib/project-database"

interface ProjectRecommendationsProps {
  studentData: any
  onStartOver: () => void
}

export default function ProjectRecommendations({ studentData, onStartOver }: ProjectRecommendationsProps) {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [difficultyFilter, setDifficultyFilter] = useState("all")
  const [savedProjects, setSavedProjects] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [compareProjects, setCompareProjects] = useState<string[]>([])
  const [showResourcesFor, setShowResourcesFor] = useState<string | null>(null)

  const recommendations = useMemo(() => {
    return projectDatabase.getRecommendations(studentData)
  }, [studentData])

  const filteredProjects = useMemo(() => {
    let filtered = recommendations

    if (selectedCategory !== "all") {
      filtered = filtered.filter((project) => project.domain === selectedCategory)
    }

    if (difficultyFilter !== "all") {
      filtered = filtered.filter((project) => project.difficulty === difficultyFilter)
    }

    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.techStack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase())) ||
          project.learningOutcomes.some((outcome) => outcome.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    }

    return filtered
  }, [recommendations, selectedCategory, difficultyFilter, searchQuery])

  const categories = ["all", ...Array.from(new Set(recommendations.map((p) => p.domain)))]

  const toggleSaveProject = (projectId: string) => {
    setSavedProjects((prev) =>
      prev.includes(projectId) ? prev.filter((id) => id !== projectId) : [...prev, projectId],
    )
  }

  const toggleCompareProject = (projectId: string) => {
    setCompareProjects((prev) => {
      if (prev.includes(projectId)) {
        return prev.filter((id) => id !== projectId)
      } else if (prev.length < 3) {
        return [...prev, projectId]
      }
      return prev
    })
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-700 hover:bg-green-100"
      case "Moderate":
        return "bg-yellow-100 text-yellow-700 hover:bg-yellow-100"
      case "Hard":
        return "bg-orange-100 text-orange-700 hover:bg-orange-100"
      case "Insane":
        return "bg-red-100 text-red-700 hover:bg-red-100"
      default:
        return "bg-gray-100 text-gray-700 hover:bg-gray-100"
    }
  }

  const exportRecommendations = () => {
    const content = `
ProjeXplorer Recommendations for ${studentData.name}

Course: ${studentData.course}
Skill Level: ${studentData.skillLevel}
Interests: ${studentData.interests.join(", ")}
Preferred Difficulty: ${studentData.difficulty}
Project Type: ${studentData.projectType}

Recommended Projects:
${filteredProjects
  .map(
    (project) => `
${project.title}
Domain: ${project.domain}
Difficulty: ${project.difficulty}
Tech Stack: ${project.techStack.join(", ")}
Time Estimate: ${project.timeEstimate}
Description: ${project.description}
Learning Outcomes: ${project.learningOutcomes.join(", ")}
---
`,
  )
  .join("")}
    `

    const blob = new Blob([content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `projexplorer-recommendations-${studentData.name.replace(/\s+/g, "-").toLowerCase()}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const ResourcesModal = ({ project }: { project: any }) => {
    if (!project.resources) return null

    return (
      <Card className="mt-4 border-purple-200 bg-purple-50">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-purple-600" />
            Resources for {project.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {project.resources.github && project.resources.github.length > 0 && (
            <div>
              <h4 className="font-semibold flex items-center gap-2 mb-2">
                <Github className="w-4 h-4" />
                GitHub Repositories
              </h4>
              <div className="space-y-2">
                {project.resources.github.map((link: string, index: number) => (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {link.split("/").slice(-2).join("/")}
                  </a>
                ))}
              </div>
            </div>
          )}

          {project.resources.tutorials && project.resources.tutorials.length > 0 && (
            <div>
              <h4 className="font-semibold flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4" />
                Tutorials & Guides
              </h4>
              <div className="space-y-2">
                {project.resources.tutorials.map((link: string, index: number) => (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {link.includes("youtube") ? "YouTube Tutorial" : link.split("/")[2]}
                  </a>
                ))}
              </div>
            </div>
          )}

          {project.resources.documentation && project.resources.documentation.length > 0 && (
            <div>
              <h4 className="font-semibold flex items-center gap-2 mb-2">
                <FileText className="w-4 h-4" />
                Documentation
              </h4>
              <div className="space-y-2">
                {project.resources.documentation.map((link: string, index: number) => (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {link.split("/")[2]}
                  </a>
                ))}
              </div>
            </div>
          )}

          {project.resources.videos && project.resources.videos.length > 0 && (
            <div>
              <h4 className="font-semibold flex items-center gap-2 mb-2">
                <Video className="w-4 h-4" />
                Video Resources
              </h4>
              <div className="space-y-2">
                {project.resources.videos.map((link: string, index: number) => (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    <Video className="w-3 h-3" />
                    Video Tutorial {index + 1}
                  </a>
                ))}
              </div>
            </div>
          )}

          <Button onClick={() => setShowResourcesFor(null)} variant="outline" size="sm" className="mt-4">
            Close Resources
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <Button onClick={onStartOver} variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Start Over
            </Button>
            <h1 className="text-3xl font-bold text-gray-900">Perfect Projects for {studentData.name}</h1>
            <p className="text-gray-600 mt-2">
              {filteredProjects.length} personalized recommendations based on your preferences
            </p>
          </div>
          <div className="flex gap-2">
            <Button onClick={exportRecommendations} variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button variant="outline">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>

        {/* Student Summary */}
        <Card className="mb-8 bg-white/90 backdrop-blur">
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-gray-600">Course</p>
                <p className="font-semibold">{studentData.course}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Skill Level</p>
                <p className="font-semibold">{studentData.skillLevel}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Preferred Difficulty</p>
                <Badge className={getDifficultyColor(studentData.difficulty)}>{studentData.difficulty}</Badge>
              </div>
              <div>
                <p className="text-sm text-gray-600">Project Type</p>
                <p className="font-semibold">{studentData.projectType}</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-2">Interests</p>
              <div className="flex flex-wrap gap-2">
                {studentData.interests.map((interest: string) => (
                  <Badge key={interest} variant="secondary">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-2">
            <Input
              placeholder="Search projects by title, description, or tech stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white"
            />
          </div>
          <div className="flex-1">
            <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Filter by difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Difficulties</SelectItem>
                <SelectItem value="Easy">Easy</SelectItem>
                <SelectItem value="Moderate">Moderate</SelectItem>
                <SelectItem value="Hard">Hard</SelectItem>
                <SelectItem value="Insane">Insane</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {compareProjects.length > 0 && (
          <Card className="mb-8 bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                Compare Projects ({compareProjects.length}/3)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 mb-4">
                {compareProjects.map((projectId) => {
                  const project = recommendations.find((p) => p.id === projectId)
                  return project ? (
                    <Badge key={projectId} variant="secondary" className="flex items-center gap-1">
                      {project.title}
                      <button
                        onClick={() => toggleCompareProject(projectId)}
                        className="ml-1 text-xs hover:text-red-500"
                      >
                        ×
                      </button>
                    </Badge>
                  ) : null
                })}
              </div>
              <Button size="sm" disabled={compareProjects.length < 2}>
                View Detailed Comparison
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Category Tabs */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-8 mb-8 bg-white/80">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="text-xs lg:text-sm">
                {category === "all" ? "All" : category.split(" ")[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedCategory} className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div key={project.id}>
                  <Card className="bg-white/90 backdrop-blur shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge className={getDifficultyColor(project.difficulty)}>{project.difficulty}</Badge>
                        <div className="flex gap-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleCompareProject(project.id)}
                            className={compareProjects.includes(project.id) ? "text-blue-500" : "text-gray-400"}
                            disabled={!compareProjects.includes(project.id) && compareProjects.length >= 3}
                          >
                            <div className="w-4 h-4 border border-current rounded" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleSaveProject(project.id)}
                            className={savedProjects.includes(project.id) ? "text-yellow-500" : "text-gray-400"}
                          >
                            <Star
                              className="w-4 h-4"
                              fill={savedProjects.includes(project.id) ? "currentColor" : "none"}
                            />
                          </Button>
                        </div>
                      </div>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {project.timeEstimate}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {project.teamSize}
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium mb-2">Tech Stack</p>
                        <div className="flex flex-wrap gap-1">
                          {project.techStack.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium mb-2">Learning Outcomes</p>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {project.learningOutcomes.slice(0, 3).map((outcome, index) => (
                            <li key={index} className="flex items-start gap-1">
                              <span className="text-purple-500 mt-1">•</span>
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-2 pt-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 bg-transparent"
                          onClick={() => setShowResourcesFor(showResourcesFor === project.id ? null : project.id)}
                        >
                          <BookOpen className="w-4 h-4 mr-1" />
                          {showResourcesFor === project.id ? "Hide Resources" : "Resources"}
                        </Button>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {showResourcesFor === project.id && <ResourcesModal project={project} />}
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No projects match your current filters.</p>
                <Button
                  onClick={() => {
                    setSelectedCategory("all")
                    setDifficultyFilter("all")
                    setSearchQuery("")
                  }}
                  variant="outline"
                  className="mt-4"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Saved Projects Summary */}
        {savedProjects.length > 0 && (
          <Card className="mt-8 bg-yellow-50 border-yellow-200">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" fill="currentColor" />
                Saved Projects ({savedProjects.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                You've saved {savedProjects.length} project{savedProjects.length !== 1 ? "s" : ""} for later reference.
              </p>
              <div className="flex gap-2">
                <Button size="sm" onClick={exportRecommendations}>
                  <Download className="w-4 h-4 mr-2" />
                  Export Saved Projects
                </Button>
                <Button size="sm" variant="outline">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share with Team
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
