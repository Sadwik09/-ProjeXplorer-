"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface StudentFormProps {
  onSubmit: (data: any) => void
  onBack: () => void
}

export default function StudentForm({ onSubmit, onBack }: StudentFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    year: "",
    course: "",
    interests: [] as string[],
    skillLevel: "",
    difficulty: "",
    projectType: "",
  })

  const courses = [
    "Computer Science Engineering",
    "Information Technology",
    "Electronics & Communication",
    "Mechanical Engineering",
    "Electrical Engineering",
    "Data Science",
    "Artificial Intelligence & ML",
    "Cybersecurity",
    "Software Engineering",
  ]

  const interestOptions = [
    "Web Development",
    "Mobile App Development",
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Cybersecurity",
    "Internet of Things (IoT)",
    "Blockchain",
    "Game Development",
    "Cloud Computing",
    "DevOps",
    "UI/UX Design",
    "Database Management",
    "Network Security",
    "Computer Vision",
    "Natural Language Processing",
    "Robotics",
    "Augmented Reality",
    "Virtual Reality",
  ]

  const handleInterestChange = (interest: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        interests: [...prev.interests, interest],
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        interests: prev.interests.filter((i) => i !== interest),
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const isFormValid =
    formData.name &&
    formData.year &&
    formData.course &&
    formData.interests.length > 0 &&
    formData.skillLevel &&
    formData.difficulty &&
    formData.projectType

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <Button onClick={onBack} variant="ghost" className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <Card className="shadow-xl bg-white/90 backdrop-blur">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-900">Tell Us About Yourself</CardTitle>
            <CardDescription className="text-lg">Help us recommend the perfect projects for you</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="year">Academic Year</Label>
                  <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, year: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1st Year">1st Year</SelectItem>
                      <SelectItem value="2nd Year">2nd Year</SelectItem>
                      <SelectItem value="3rd Year">3rd Year</SelectItem>
                      <SelectItem value="4th Year">4th Year</SelectItem>
                      <SelectItem value="Graduate">Graduate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="course">Course/Branch</Label>
                <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, course: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your course" />
                  </SelectTrigger>
                  <SelectContent>
                    {courses.map((course) => (
                      <SelectItem key={course} value={course}>
                        {course}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Interests */}
              <div className="space-y-4">
                <Label className="text-base font-semibold">Areas of Interest (Select all that apply)</Label>
                <div className="grid md:grid-cols-3 gap-3">
                  {interestOptions.map((interest) => (
                    <div key={interest} className="flex items-center space-x-2">
                      <Checkbox
                        id={interest}
                        checked={formData.interests.includes(interest)}
                        onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                      />
                      <Label htmlFor={interest} className="text-sm font-normal">
                        {interest}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skill Level */}
              <div className="space-y-4">
                <Label className="text-base font-semibold">Current Skill Level</Label>
                <RadioGroup
                  value={formData.skillLevel}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, skillLevel: value }))}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Beginner" id="beginner" />
                    <Label htmlFor="beginner">Beginner - Just starting out</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Intermediate" id="intermediate" />
                    <Label htmlFor="intermediate">Intermediate - Some experience with projects</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Advanced" id="advanced" />
                    <Label htmlFor="advanced">Advanced - Comfortable with complex implementations</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Desired Difficulty */}
              <div className="space-y-4">
                <Label className="text-base font-semibold">Desired Project Difficulty</Label>
                <RadioGroup
                  value={formData.difficulty}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, difficulty: value }))}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Easy" id="easy" />
                    <Label htmlFor="easy">Easy - Quick builds, starter projects</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Moderate" id="moderate" />
                    <Label htmlFor="moderate">Moderate - Small team-ready, real-world applicability</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Hard" id="hard" />
                    <Label htmlFor="hard">Hard - Requires deep domain knowledge</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Insane" id="insane" />
                    <Label htmlFor="insane">Insane - Cutting-edge, research-based</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Project Type */}
              <div className="space-y-4">
                <Label className="text-base font-semibold">Project Type</Label>
                <RadioGroup
                  value={formData.projectType}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, projectType: value }))}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Mini" id="mini" />
                    <Label htmlFor="mini">Mini Project - Individual, short-term</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Major" id="major" />
                    <Label htmlFor="major">Major Project - Team-based, semester-long</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Research" id="research" />
                    <Label htmlFor="research">Research Project - Academic/publication focused</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Hackathon" id="hackathon" />
                    <Label htmlFor="hackathon">Hackathon Ready - Quick prototype, innovative</Label>
                  </div>
                </RadioGroup>
              </div>

              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg"
                disabled={!isFormValid}
              >
                Get My Project Recommendations <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
