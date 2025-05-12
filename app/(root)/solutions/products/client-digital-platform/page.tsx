import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, BarChart2, FileText, Users, Calendar, MessageSquare } from "lucide-react"

export default function ClientDigitalPlatformPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(95,31,95,0.2),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(187,173,213,0.2),transparent_60%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Client Digital <span className="text-gradient">Platform</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Streamline your project management and client communication with our comprehensive digital solution.
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
              Everything you need to manage projects and collaborate effectively
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart2 className="h-10 w-10 text-secondary" />,
                title: "Project Performance Tracking",
                description: "Monitor key metrics and progress in real-time with intuitive dashboards and reports.",
              },
              {
                icon: <FileText className="h-10 w-10 text-secondary" />,
                title: "Document Management",
                description:
                  "Securely store, share, and collaborate on project-related documents in one central location.",
              },
              {
                icon: <Users className="h-10 w-10 text-secondary" />,
                title: "Team Management",
                description: "Easily manage and communicate with project team members and stakeholders.",
              },
              {
                icon: <Calendar className="h-10 w-10 text-secondary" />,
                title: "Meeting Reports",
                description: "Access and create detailed meeting reports, action items, and follow-ups.",
              },
              {
                icon: <CheckCircle2 className="h-10 w-10 text-secondary" />,
                title: "Deliverable Tracking",
                description: "Keep track of project deliverables, milestones, and deadlines with ease.",
              },
              {
                icon: <MessageSquare className="h-10 w-10 text-secondary" />,
                title: "Client Communication",
                description: "Streamline communication with built-in messaging and notification features.",
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

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It <span className="text-gradient">Works</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Get started with the Client Digital Platform in just a few simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Create Your Account",
                description: "Sign up and set up your organization profile with just a few clicks.",
              },
              {
                step: "02",
                title: "Invite Team Members",
                description: "Add your team members and clients to collaborate on projects.",
              },
              {
                step: "03",
                title: "Start Managing Projects",
                description: "Create projects, set milestones, and begin tracking progress right away.",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-background rounded-lg p-6 border shadow-sm h-full">
                  <div className="text-4xl font-bold text-secondary mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-secondary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section id="get-started" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Streamline Your Project Management?</h2>
            <p className="text-xl mb-8 text-muted-foreground">
              Sign up now and experience the power of the Client Digital Platform. Transform the way you manage projects
              and communicate with clients.
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
              <Link href="/signup">
                Create Your Account
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

