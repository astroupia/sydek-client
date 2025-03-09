"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Mail, CheckCircle } from "lucide-react"
import InteractiveBackground from "@/components/interactive-background"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle password reset request
    console.log("Password reset requested for:", email)
    setIsSubmitted(true)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <InteractiveBackground className="absolute inset-0" particleCount={20} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-md mx-auto">
            <Link href="/login" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Login
            </Link>

            <h1 className="text-3xl font-bold tracking-tight mb-6">
              Reset Your <span className="text-gradient">Password</span>
            </h1>

            {!isSubmitted ? (
              <div className="bg-card rounded-xl border shadow-sm p-6">
                <p className="text-muted-foreground mb-6">
                  Enter your email address and we'll send you a link to reset your password.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="space-y-2 mb-6">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="pl-10"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90">
                    Send Reset Link
                  </Button>
                </form>
              </div>
            ) : (
              <div className="bg-card rounded-xl border shadow-sm p-6">
                <div className="text-center">
                  <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <h2 className="text-xl font-semibold mb-2">Check Your Email</h2>
                  <p className="text-muted-foreground mb-6">
                    We've sent a password reset link to <strong>{email}</strong>. Please check your inbox and follow the
                    instructions to reset your password.
                  </p>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full" onClick={() => setIsSubmitted(false)}>
                      Try a different email
                    </Button>
                    <Link href="/login" className="block text-center text-sm text-secondary hover:underline">
                      Return to login
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

