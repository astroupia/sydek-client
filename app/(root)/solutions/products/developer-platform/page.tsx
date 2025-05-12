import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, FileText, Users, MessageSquare, Shield, Settings } from "lucide-react"

export default function DeveloperPlatformPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(95,31,95,0.2),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(187,173,213,0.2),transparent_60%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Developer <span className="text-gradient">Platform</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Empower your development team with advanced project management and collaboration tools.
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
              <Link href="#get-started">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful <span className="text-gradient">Features</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Streamline your development process and enhance team collaboration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText className="h-10 w-10 text-secondary" />,
                title: "Deliverable Management",
                description: "Set and track deliverables, assign tasks, and monitor progress in real-time.",
              },
              {
                icon: <Users className="h-10 w-10 text-secondary" />,
                title: "Team Assignment",
                description: "Easily assign developers to specific tasks and manage team workload.",
              },
              {
                icon: <Shield className="h-10 w-10 text-secondary" />,
                title: "Access Control",
                description: "Set granular permissions for files and project components.",
              },
              {
                icon: <MessageSquare className="h-10 w-10 text-secondary" />,
                title: "Client Communication",
                description: "Seamlessly communicate with clients through integrated messaging tools.",
              },
              {
                icon: <Settings className="h-10 w-10 text-secondary" />,
                title: "Admin Controls",
                description: "Comprehensive admin tools to manage user roles and permissions.",
              },
              {
                icon: <CheckCircle2 className="h-10 w-10 text-secondary" />,
                title: "Quality Assurance",
                description: "Built-in tools for code review, testing, and quality control.",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-background rounded-lg p-6 border shadow-sm">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role-based Features */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Role-based <span className="text-gradient">Features</span>
            </h2>
            <p className="text-xl text-muted-foreground">Tailored tools for different roles in your development team</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">For Product Owners</h3>
              <ul className="space-y-4">
                {[
                  "Set and manage project deliverables",
                  "Assign developers to specific tasks",
                  "Control file visibility and access rights",
                  "Direct communication channel with clients",
                  "Overview of project progress and team performance",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-secondary mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">For Administrators</h3>
              <ul className="space-y-4">
                {[
                  "Manage access rights for employees and clients",
                  "Promote or demote user roles and permissions",
                  "Monitor system usage and generate reports",
                  "Configure system-wide settings and integrations",
                  "Oversee all projects and team activities",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-secondary mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section id="get-started" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Development Process?</h2>
            <p className="text-xl mb-8 text-muted-foreground">
              Sign up now and experience the power of our Developer Platform. Transform the way your team collaborates
              and delivers projects.
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
              <Link href="/signup">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

