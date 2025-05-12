import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Users, Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const projects = [
  {
    title: "E-Commerce Platform Redesign",
    client: "FashionForward Inc.",
    description:
      "A complete overhaul of an e-commerce platform, focusing on user experience, performance, and conversion optimization.",
    category: "Web Development",
    duration: "3 months",
    team: "5 members",
    features: [
      "Responsive design",
      "Advanced search and filtering",
      "Personalized recommendations",
      "Streamlined checkout process",
      "Integration with inventory management",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "HealthTrack Mobile App",
    client: "WellnessTech Solutions",
    description: "A comprehensive health and fitness tracking mobile application for iOS and Android platforms.",
    category: "Mobile Development",
    duration: "4 months",
    team: "6 members",
    features: [
      "Activity and workout tracking",
      "Nutrition logging and analysis",
      "Integration with wearable devices",
      "Personalized health insights",
      "Social features for motivation",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "SmartCity IoT Dashboard",
    client: "MetropolisTech",
    description:
      "An IoT-powered dashboard for city administrators to monitor and manage various urban systems in real-time.",
    category: "IoT & Data Visualization",
    duration: "6 months",
    team: "8 members",
    features: [
      "Real-time data visualization",
      "Predictive maintenance alerts",
      "Energy consumption optimization",
      "Traffic flow management",
      "Environmental monitoring",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "AI-Driven Customer Service Platform",
    client: "GlobalSupport Corp.",
    description: "An AI-powered customer service platform that enhances support efficiency and customer satisfaction.",
    category: "AI & Machine Learning",
    duration: "5 months",
    team: "7 members",
    features: [
      "Natural language processing",
      "Sentiment analysis",
      "Automated ticket routing",
      "Knowledge base integration",
      "Performance analytics dashboard",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(95,31,95,0.2),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(187,173,213,0.2),transparent_60%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Our <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore our portfolio of innovative digital solutions across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-md mx-auto mb-12">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
              <TabsTrigger value="ai">AI & IoT</TabsTrigger>
            </TabsList>

            {["all", "web", "mobile", "ai"].map((tab) => (
              <TabsContent key={tab} value={tab} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {projects
                    .filter(
                      (project) =>
                        tab === "all" ||
                        (tab === "web" && project.category === "Web Development") ||
                        (tab === "mobile" && project.category === "Mobile Development") ||
                        (tab === "ai" &&
                          (project.category === "AI & Machine Learning" ||
                            project.category === "IoT & Data Visualization")),
                    )
                    .map((project, index) => (
                      <Card
                        key={index}
                        className="border bg-background hover:shadow-md transition-all duration-300 overflow-hidden"
                      >
                        <div className="aspect-[16/9] overflow-hidden">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={600}
                            height={400}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle>{project.title}</CardTitle>
                          <CardDescription>{project.client}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            <span className="text-xs font-medium bg-secondary/10 text-secondary px-2 py-1 rounded-full">
                              {project.category}
                            </span>
                            <span className="text-xs font-medium bg-muted px-2 py-1 rounded-full flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              {project.duration}
                            </span>
                            <span className="text-xs font-medium bg-muted px-2 py-1 rounded-full flex items-center">
                              <Users className="h-3 w-3 mr-1" />
                              {project.team}
                            </span>
                          </div>
                          <h4 className="font-semibold mb-2">Key Features:</h4>
                          <ul className="space-y-1">
                            {project.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start">
                                <CheckCircle2 className="h-4 w-4 text-secondary mr-2 flex-shrink-0 mt-1" />
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button
                            asChild
                            variant="ghost"
                            className="w-full justify-start p-0 hover:bg-transparent hover:text-secondary"
                          >
                            <Link href={`/projects/${project.title.toLowerCase().replace(/\s+/g, "-")}`}>
                              View Case Study
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 text-muted-foreground">
              Let's collaborate to create innovative solutions that drive your business forward.
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

