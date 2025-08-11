"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, EyeOff, Github, Mail, Sparkles, Zap, Target, AlertCircle } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useAuth } from "@/lib/auth"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { user, login, signup } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.push("/")
    }
  }, [user, router])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const success = await login(loginData.email, loginData.password)
      if (success) {
        router.push("/")
      } else {
        setError("Invalid email or password. Password must be at least 6 characters.")
      }
    } catch (err) {
      setError("Login failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (signupData.password !== signupData.confirmPassword) {
      setError("Passwords don't match!")
      return
    }

    if (signupData.password.length < 6) {
      setError("Password must be at least 6 characters long!")
      return
    }

    setIsLoading(true)

    try {
      const success = await signup(signupData.name, signupData.email, signupData.password)
      if (success) {
        router.push("/")
      } else {
        setError("Signup failed. Please check your information.")
      }
    } catch (err) {
      setError("Signup failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-indigo-300 dark:bg-indigo-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="flex items-center justify-end mb-6">
          <ThemeToggle />
        </div>

        <Card className="backdrop-blur-lg bg-white/20 dark:bg-gray-800/20 border border-white/20 dark:border-gray-700/20 shadow-2xl">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg transform hover:scale-105 transition-transform">
              <Sparkles className="w-8 h-8 text-white animate-pulse" />
            </div>

            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Welcome to ProjeXplorer
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-300">
              Sign in to discover your perfect project ideas
            </CardDescription>

            <div className="flex justify-center space-x-6 pt-2">
              <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                <Target className="w-3 h-3 mr-1" />
                Personalized
              </div>
              <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                <Zap className="w-3 h-3 mr-1" />
                AI-Powered
              </div>
              <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                <Sparkles className="w-3 h-3 mr-1" />
                 100+ Projects
              </div>
            </div>
          </CardHeader>

          <CardContent>
            {error && (
              <div className="mb-4 p-3 bg-red-100/80 dark:bg-red-900/30 border border-red-200/50 dark:border-red-700/50 rounded-lg backdrop-blur-sm">
                <div className="flex items-center text-red-700 dark:text-red-300 text-sm">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  {error}
                </div>
              </div>
            )}

            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm">
                <TabsTrigger
                  value="login"
                  className="data-[state=active]:bg-white/80 dark:data-[state=active]:bg-gray-700/80"
                >
                  Sign In
                </TabsTrigger>
                <TabsTrigger
                  value="signup"
                  className="data-[state=active]:bg-white/80 dark:data-[state=active]:bg-gray-700/80"
                >
                  Sign Up
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="space-y-4 mt-6">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email" className="text-gray-700 dark:text-gray-200">
                      Email
                    </Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="Enter your email"
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                      className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200/50 dark:border-gray-600/50 focus:bg-white/80 dark:focus:bg-gray-800/80 transition-all"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password" className="text-gray-700 dark:text-gray-200">
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="login-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password (min 6 characters)"
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200/50 dark:border-gray-600/50 focus:bg-white/80 dark:focus:bg-gray-800/80 transition-all pr-10"
                        required
                        disabled={isLoading}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                        disabled={isLoading}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2.5 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing In..." : "Sign In to ProjeXplorer"}
                  </Button>
                </form>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-300/50 dark:border-gray-600/50" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-2 text-gray-500 dark:text-gray-400">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="w-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm border-gray-200/50 dark:border-gray-600/50 hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all"
                    disabled={isLoading}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm border-gray-200/50 dark:border-gray-600/50 hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all"
                    disabled={isLoading}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Google
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="signup" className="space-y-4 mt-6">
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name" className="text-gray-700 dark:text-gray-200">
                      Full Name
                    </Label>
                    <Input
                      id="signup-name"
                      type="text"
                      placeholder="Enter your full name"
                      value={signupData.name}
                      onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
                      className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200/50 dark:border-gray-600/50 focus:bg-white/80 dark:focus:bg-gray-800/80 transition-all"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email" className="text-gray-700 dark:text-gray-200">
                      Email
                    </Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="Enter your email"
                      value={signupData.email}
                      onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                      className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200/50 dark:border-gray-600/50 focus:bg-white/80 dark:focus:bg-gray-800/80 transition-all"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password" className="text-gray-700 dark:text-gray-200">
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="signup-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password (min 6 characters)"
                        value={signupData.password}
                        onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                        className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200/50 dark:border-gray-600/50 focus:bg-white/80 dark:focus:bg-gray-800/80 transition-all pr-10"
                        required
                        disabled={isLoading}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                        disabled={isLoading}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password" className="text-gray-700 dark:text-gray-200">
                      Confirm Password
                    </Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="Confirm your password"
                      value={signupData.confirmPassword}
                      onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                      className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200/50 dark:border-gray-600/50 focus:bg-white/80 dark:focus:bg-gray-800/80 transition-all"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2.5 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating Account..." : "Create Your Account"}
                  </Button>
                </form>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-300/50 dark:border-gray-600/50" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-2 text-gray-500 dark:text-gray-400">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="w-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm border-gray-200/50 dark:border-gray-600/50 hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all"
                    disabled={isLoading}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm border-gray-200/50 dark:border-gray-600/50 hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all"
                    disabled={isLoading}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Google
                  </Button>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100/50 dark:bg-blue-900/30 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50">
                <Sparkles className="w-3 h-3 mr-1 text-blue-600 dark:text-blue-400" />
                <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                  Demo Authentication - Any email with 6+ char password works
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}
