"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Target, Users, BookOpen, Lightbulb, LogOut } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import StudentForm from "@/components/student-form"
import ProjectRecommendations from "@/components/project-recommendations"
import { useAuth } from "@/lib/auth"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const [currentStep, setCurrentStep] = useState<"landing" | "form" | "results">("landing")
  const [studentData, setStudentData] = useState(null)
  const { user, logout, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login")
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 flex items-center justify-center">
        <div className="text-center">
          <Target className="w-12 h-12 text-purple-600 dark:text-purple-400 animate-spin mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-300">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  const handleFormSubmit = (data: any) => {
    setStudentData(data)
    setCurrentStep("results")
  }

  const handleStartOver = () => {
    setCurrentStep("landing")
    setStudentData(null)
  }

  const handleLogout = () => {
    logout()
    router.push("/login")
  }

  if (currentStep === "results" && studentData) {
    return <ProjectRecommendations studentData={studentData} onStartOver={handleStartOver} />
  }

  if (currentStep === "form") {
    return <StudentForm onSubmit={handleFormSubmit} onBack={() => setCurrentStep("landing")} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
      <header className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Target className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              ProjeX<span className="text-purple-600 dark:text-purple-400">plorer</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600 dark:text-gray-300">Welcome, {user.name}!</span>
            <ThemeToggle />
            <Button
              variant="outline"
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur border-gray-200/50 dark:border-gray-600/50 hover:bg-white/90 dark:hover:bg-gray-800/90"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            <Target className="w-4 h-4" />
            Personalized Project Recommendations
          </div>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            ProjeX<span className="text-purple-600 dark:text-purple-400">plorer</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover the perfect project ideas tailored to your course, interests, and skill level. From easy starter
            projects to insane research challenges.
          </p>
          <Button
            onClick={() => setCurrentStep("form")}
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Get My Project Ideas <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur">
            <CardHeader className="text-center pb-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <CardTitle className="text-lg dark:text-white">Smart Matching</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
                AI-powered recommendations based on your course, interests, and skill level
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur">
            <CardHeader className="text-center pb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-lg dark:text-white">Course Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
                Projects mapped to your specific courses and academic requirements
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur">
            <CardHeader className="text-center pb-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="text-lg dark:text-white">Difficulty Levels</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
                From easy starter projects to insane research-level challenges
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur">
            <CardHeader className="text-center pb-4">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <CardTitle className="text-lg dark:text-white">Team Ready</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
                Projects suitable for individual work, teams, or hackathons
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-8 dark:text-white">Difficulty Levels</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Badge className="bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-900/50 mb-3">
                Easy
              </Badge>
              <h3 className="font-semibold mb-2 dark:text-white">Quick Builds</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">HTML Calculator, To-Do App, Sensor Logger</p>
            </div>
            <div className="text-center">
              <Badge className="bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300 hover:bg-yellow-100 dark:hover:bg-yellow-900/50 mb-3">
                Moderate
              </Badge>
              <h3 className="font-semibold mb-2 dark:text-white">Real-World Ready</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Chat App with DB, Face Detection System</p>
            </div>
            <div className="text-center">
              <Badge className="bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300 hover:bg-orange-100 dark:hover:bg-orange-900/50 mb-3">
                Hard
              </Badge>
              <h3 className="font-semibold mb-2 dark:text-white">Deep Knowledge</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Smart AI Tutor, Blockchain Voting System</p>
            </div>
            <div className="text-center">
              <Badge className="bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 hover:bg-red-100 dark:hover:bg-red-900/50 mb-3">
                Insane
              </Badge>
              <h3 className="font-semibold mb-2 dark:text-white">Cutting-Edge</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Autonomous Drone Swarm, Real-time Deepfake Detector
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
