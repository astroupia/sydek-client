import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import InteractiveBackground from "@/components/interactive-background"

// Sample case studies
const caseStudies = [
  {
    id: "ecommerce-platform-redesign",
    title: "E-Commerce Platform Redesign",
    client: "FashionForward Inc.",
    description:
      "How we transformed an outdated e-commerce platform into a high-converting digital shopping experience with a 45% increase in mobile sales.",
    category: "Web Development",
    industry: "Retail",
    results: ["45% increase in mobile sales", "37% improvement in page load speed", "28% higher conversion rate"],
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
  },
  {
    id: "fintech-dashboard",
    title: "FinTech Analytics Dashboard",
    client: "Global Investment Partners",
    description:
      "Creating an intuitive yet powerful analytics dashboard that helps financial advisors make data-driven investment decisions.",
    category: "UX Design",
    industry: "Finance",
    results: ["68% reduction in decision-making time", "92% user satisfaction rate", "3.5x ROI in the first year"],
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
  },
  {
    id: "healthcare-management-system",
    title: "Healthcare Management System",
    client: "MediCare Network",
    description:
      "A comprehensive healthcare management solution that streamlines patient care and administrative tasks across a network of 12 hospitals.",
    category: "Enterprise Solutions",
    industry: "Healthcare",
    results: [
      "34% reduction in administrative overhead",
      "22% improvement in patient satisfaction",
      "Seamless integration with 8 legacy systems",
    ],
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
  {
    id: "ai-content-platform",
    title: "AI-Powered Content Platform",
    client: "MediaVerse Publishing",
    description:
      "Leveraging AI to help publishers create, optimize, and distribute content more effectively while gaining valuable audience insights.",
    category: "AI & Machine Learning",
    industry: "Media",
    results: [
      "52% increase in content engagement",
      "3x faster content production workflow",
      "Predictive analytics with 89% accuracy",
    ],
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
  {
    id: "supply-chain-optimization",
    title: "Supply Chain Optimization Platform",
    client: "LogiTech Solutions",
    description:
      "A digital transformation initiative that enhanced visibility and efficiency across the entire supply chain ecosystem.",
    category: "Enterprise Solutions",
    industry: "Logistics",
    results: [
      "27% reduction in operational costs",
      "43% improvement in delivery time accuracy",
      "Real-time tracking across 24 countries",
    ],
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
  {
    id: "mobile-banking-app",
    title: "Mobile Banking Application",
    client: "FirstSecure Bank",
    description:
      "A secure and intuitive mobile banking application that transformed how customers interact with their financial institution.",
    category: "Mobile Development",
    industry: "Finance",
    results: [
      "2.4 million active users within 6 months",
      "98.7% uptime with zero security incidents",
      "4.8/5 average app store rating",
    ],
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <InteractiveBackground />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(95,31,95,0.2),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(187,173,213,0.2),transparent_60%)]"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-gradient">Success Stories</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Explore how we've helped businesses across various industries achieve their digital transformation goals.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Featured <span className="text-gradient">Case Studies</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies
              .filter((study) => study.featured)
              .map((study, index) => (
                <div
                  key={study.id}
                  className="bg-card rounded-2xl overflow-hidden border shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={study.image || "/placeholder.svg"}
                      alt={study.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs font-medium bg-secondary/10 text-secondary px-2 py-1 rounded-full">
                        {study.category}
                      </span>
                      <span className="text-xs font-medium bg-muted px-2 py-1 rounded-full">{study.industry}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                    <p className="text-muted-foreground mb-6">{study.description}</p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold uppercase text-muted-foreground mb-3">Key Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-center">
                            <ChevronRight className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button asChild className="bg-secondary hover:bg-secondary/90">
                      <Link href={`/company/case-studies/${study.id}`}>
                        Read Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">All Case Studies</h2>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-md mx-auto mb-12">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
              <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
            </TabsList>

            {["all", "web", "mobile", "enterprise"].map((tab) => (
              <TabsContent key={tab} value={tab} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {caseStudies
                    .filter(
                      (study) =>
                        tab === "all" ||
                        (tab === "web" && study.category === "Web Development") ||
                        (tab === "mobile" && study.category === "Mobile Development") ||
                        (tab === "enterprise" &&
                          ["Enterprise Solutions", "AI & Machine Learning"].includes(study.category)),
                    )
                    .map((study) => (
                      <Card key={study.id} className="overflow-hidden">
                        <div className="aspect-[3/2] overflow-hidden">
                          <Image
                            src={study.image || "/placeholder.svg"}
                            alt={study.title}
                            width={400}
                            height={267}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                        <CardHeader>
                          <div className="flex flex-wrap gap-2 mb-2">
                            <span className="text-xs font-medium bg-secondary/10 text-secondary px-2 py-1 rounded-full">
                              {study.category}
                            </span>
                          </div>
                          <CardTitle>{study.title}</CardTitle>
                          <CardDescription>{study.client}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground line-clamp-3">{study.description}</p>
                        </CardContent>
                        <CardFooter>
                          <Button asChild variant="ghost" className="hover:text-secondary">
                            <Link href={`/company/case-studies/${study.id}`}>
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

      {/* Industries */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Industries We <span className="text-gradient">Transform</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              We bring digital innovation to a wide range of industries, helping organizations stay ahead in the digital
              age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                industry: "Finance & Banking",
                description: "Innovative solutions for banks, investment firms, and financial service providers.",
                count: 24,
                icon: "💹",
              },
              {
                industry: "Healthcare",
                description: "Digital transformation for hospitals, clinics, and healthcare networks.",
                count: 18,
                icon: "🏥",
              },
              {
                industry: "Retail & E-commerce",
                description: "Creating seamless shopping experiences across digital and physical channels.",
                count: 32,
                icon: "🛍️",
              },
              {
                industry: "Manufacturing",
                description: "Smart factory solutions and supply chain optimization for manufacturers.",
                count: 15,
                icon: "🏭",
              },
              {
                industry: "Education",
                description: "Digital learning platforms and administrative systems for educational institutions.",
                count: 12,
                icon: "🎓",
              },
              {
                industry: "Media & Entertainment",
                description: "Content delivery platforms and audience engagement solutions.",
                count: 21,
                icon: "🎬",
              },
            ].map((item, index) => (
              <Link
                key={index}
                href={`/company/case-studies?industry=${item.industry.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="group"
              >
                <div className="bg-card rounded-xl border p-6 h-full hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">
                    {item.industry}
                  </h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <p className="text-sm font-medium text-secondary">{item.count} case studies</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden">
            <div className="relative bg-gradient-to-r from-secondary via-accent to-tertiary p-12 text-center">
              <div className="absolute inset-0 bg-opacity-90 bg-grid-white/5"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Write Your Success Story?</h2>
                <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                  Let's collaborate to create innovative digital solutions that drive your business forward and exceed
                  your goals.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button size="lg" className="bg-white text-secondary hover:bg-white/90">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Request a Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

