"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Upload } from "lucide-react"
import type { ApplicationFormProps, JobApplicationFormData } from "./types"

export function ApplicationForm({ jobTitle }: ApplicationFormProps) {
  const [formData, setFormData] = useState<JobApplicationFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    portfolio: "",
    experience: "",
    coverLetter: "",
    salary: "",
    startDate: "",
    workAuth: [],
    terms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, value: string) => {
    setFormData((prev) => {
      const currentValues = prev[name as keyof typeof prev] as string[]
      if (Array.isArray(currentValues)) {
        if (currentValues.includes(value)) {
          return { ...prev, [name]: currentValues.filter((v) => v !== value) }
        } else {
          return { ...prev, [name]: [...currentValues, value] }
        }
      }
      return prev
    })
  }

  const handleTermsChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, terms: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    // Show success message
    alert("Application submitted successfully!")
  }

  return (
    <div className="bg-background rounded-xl border shadow-lg p-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Application Form</h2>
      <form className="space-y-8" onSubmit={handleSubmit}>
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Personal Information</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Current Location</Label>
            <Input
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="City, State/Province, Country"
              required
            />
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Professional Information</h3>

          <div className="space-y-2">
            <Label htmlFor="resume">Resume/CV</Label>
            <div className="border-2 border-dashed rounded-lg p-6 text-center">
              <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground mb-2">
                Drag and drop your resume here, or click to browse
              </p>
              <Button variant="outline" size="sm">
                Browse Files
              </Button>
              <p className="text-xs text-muted-foreground mt-2">Accepted formats: PDF, DOCX, RTF (Max 5MB)</p>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="linkedin">LinkedIn Profile (Optional)</Label>
            <Input
              id="linkedin"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="https://linkedin.com/in/username"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="portfolio">Portfolio/Website (Optional)</Label>
            <Input
              id="portfolio"
              name="portfolio"
              value={formData.portfolio}
              onChange={handleChange}
              placeholder="https://yourwebsite.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="experience">Years of Relevant Experience</Label>
            <Input
              id="experience"
              name="experience"
              type="number"
              min="0"
              value={formData.experience}
              onChange={handleChange}
              placeholder="5"
              required
            />
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Additional Information</h3>

          <div className="space-y-2">
            <Label htmlFor="coverLetter">Cover Letter</Label>
            <Textarea
              id="coverLetter"
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              placeholder="Tell us why you're interested in this position and what makes you a great fit..."
              className="min-h-[150px]"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="salary">Salary Expectations (Optional)</Label>
            <Input
              id="salary"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              placeholder="e.g., $80,000 - $100,000"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="startDate">Earliest Start Date</Label>
            <Input
              id="startDate"
              name="startDate"
              type="date"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Work Authorization</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {[
                "I am authorized to work in the country of the job location",
                "I require visa sponsorship",
                "I am open to relocation",
                "I prefer remote work",
              ].map((option, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <Checkbox
                    id={`option-${index}`}
                    checked={formData.workAuth.includes(option)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        handleCheckboxChange("workAuth", option)
                      }
                    }}
                  />
                  <label
                    htmlFor={`option-${index}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox
            id="terms"
            checked={formData.terms}
            onCheckedChange={(checked) => {
              if (typeof checked === "boolean") {
                handleTermsChange(checked)
              }
            }}
            required
          />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to the privacy policy and terms of application
            </label>
            <p className="text-sm text-muted-foreground">
              We'll handle your information according to our privacy policy.
            </p>
          </div>
        </div>

        <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90">
          Submit Application
        </Button>
      </form>
    </div>
  )
}