export interface Job {
  title: string
  department: string
  location: string
  type: string
  salary: string
  description: string
  responsibilities: string[]
  requirements: string[]
}

export interface JobApplicationFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  location: string
  linkedin: string
  portfolio: string
  experience: string
  coverLetter: string
  salary: string
  startDate: string
  workAuth: string[]
  terms: boolean
}

export interface Benefit {
  title: string
  description: string
}

export interface HeroSectionProps {
  title: string
  subtitle: string
  gradientClassName?: string
  highlightedWord?: string
}

export interface JobListingProps {
  jobs: Job[]
}

export interface JobCardProps {
  job: Job
}

export interface ApplicationFormProps {
  jobTitle: string
}

export interface BenefitCardProps {
  benefit: Benefit
}