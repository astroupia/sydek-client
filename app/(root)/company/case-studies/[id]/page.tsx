import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Quote, BarChart2, ChevronRight, Clock, Award } from "lucide-react"
import InteractiveBackground from "@/components/interactive-background"

export default function EcommerceRedesignCaseStudyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <InteractiveBackground className="absolute inset-0" particleCount={20} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/company/case-studies"
              className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Link>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs font-medium bg-secondary/10 text-secondary px-2 py-1 rounded-full">
                Web Development
              </span>
              <span className="text-xs font-medium bg-muted px-2 py-1 rounded-full">Retail</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              E-Commerce Platform Redesign for FashionForward Inc.
            </h1>

            <p className="text-xl text-muted-foreground mb-8">
              How we transformed an outdated e-commerce platform into a high-converting digital shopping experience with
              a 45% increase in mobile sales.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="aspect-[21/9] rounded-xl overflow-hidden border shadow-lg">
              <Image
                src="/placeholder.svg?height=800&width=1600"
                alt="FashionForward E-Commerce Platform"
                width={1600}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
            {/* Sidebar */}
            <div className="lg:col-span-4 order-2 lg:order-1">
              <div className="lg:sticky lg:top-32">
                <div className="bg-card rounded-xl border p-6 mb-6">
                  <h3 className="text-lg font-semibold mb-4">Project Overview</h3>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Client</p>
                      <p className="font-medium">FashionForward Inc.</p>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground">Industry</p>
                      <p className="font-medium">Retail & E-commerce</p>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground">Project Duration</p>
                      <p className="font-medium">4 months</p>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground">Services Provided</p>
                      <ul className="space-y-1 mt-1">
                        <li className="flex items-center">
                          <ChevronRight className="h-4 w-4 text-secondary mr-1" />
                          <span>UX/UI Design</span>
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="h-4 w-4 text-secondary mr-1" />
                          <span>Frontend Development</span>
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="h-4 w-4 text-secondary mr-1" />
                          <span>Backend Integration</span>
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="h-4 w-4 text-secondary mr-1" />
                          <span>Performance Optimization</span>
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="h-4 w-4 text-secondary mr-1" />
                          <span>Analytics Implementation</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-muted rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4">Key Results</h3>

                  <div className="space-y-4">
                    <div className="bg-card rounded-lg p-4 border">
                      <div className="flex items-start">
                        <div className="bg-secondary/10 p-2 rounded mr-3">
                          <BarChart2 className="h-5 w-5 text-secondary" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-secondary">45%</p>
                          <p className="text-sm text-muted-foreground">Increase in mobile sales</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-card rounded-lg p-4 border">
                      <div className="flex items-start">
                        <div className="bg-secondary/10 p-2 rounded mr-3">
                          <Clock className="h-5 w-5 text-secondary" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-secondary">37%</p>
                          <p className="text-sm text-muted-foreground">Improvement in page load speed</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-card rounded-lg p-4 border">
                      <div className="flex items-start">
                        <div className="bg-secondary/10 p-2 rounded mr-3">
                          <Award className="h-5 w-5 text-secondary" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-secondary">28%</p>
                          <p className="text-sm text-muted-foreground">Higher conversion rate</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>The Challenge</h2>
                <p>
                  FashionForward Inc., a leading fashion retailer with both physical and online presence, was facing
                  significant challenges with their existing e-commerce platform. Their legacy system, built over 7
                  years ago, was struggling to keep up with modern shopping expectations and the increasing shift
                  towards mobile shopping.
                </p>

                <p>Key challenges included:</p>

                <ul>
                  <li>
                    <strong>Poor mobile experience</strong> with non-responsive design elements that frustrated users
                  </li>
                  <li>
                    <strong>Slow page load times</strong> averaging 6.5 seconds, significantly above industry standards
                  </li>
                  <li>
                    <strong>Outdated checkout process</strong> with high cart abandonment rates of 76%
                  </li>
                  <li>
                    <strong>Limited product discovery features</strong> making it difficult for customers to find
                    relevant items
                  </li>
                  <li>
                    <strong>Fragmented analytics</strong> that provided incomplete insights into customer behavior
                  </li>
                </ul>

                <p>
                  The client needed a complete overhaul of their digital shopping experience to stay competitive in the
                  rapidly evolving retail landscape, with a particular focus on improving mobile conversion rates and
                  overall user experience.
                </p>

                <div className="my-8 rounded-xl overflow-hidden border">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-6 flex items-center">
                      <blockquote className="border-l-4 border-secondary pl-4 italic text-muted-foreground">
                        "Our legacy e-commerce platform was holding us back. While our product offerings were
                        cutting-edge, our digital experience was anything but. We needed a partner who could understand
                        both fashion retail and technology."
                        <footer className="mt-2 font-medium text-foreground">
                          — Sarah Chen, Digital Director at FashionForward
                        </footer>
                      </blockquote>
                    </div>
                    <div className="bg-muted">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="FashionForward Office"
                        width={400}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <h2>Our Approach</h2>
                <p>
                  We began with a comprehensive audit of the existing platform, analyzing user journeys, technical
                  architecture, and performance metrics. Our team then developed a strategic roadmap focused on creating
                  a seamless, fast, and conversion-optimized shopping experience.
                </p>

                <h3>Discovery Phase</h3>
                <p>
                  Our process began with a deep dive into FashionForward's business goals, customer demographics, and
                  sales data. We conducted:
                </p>

                <ul>
                  <li>User interviews with 25 customers across different segments</li>
                  <li>Competitive analysis of 8 leading fashion e-commerce platforms</li>
                  <li>Technical audit of the existing platform infrastructure</li>
                  <li>Analytics review to identify conversion bottlenecks</li>
                </ul>

                <h3>Design & Planning</h3>
                <p>Based on our research findings, we created a comprehensive redesign strategy:</p>

                <ul>
                  <li>Mobile-first design approach to prioritize the growing segment of mobile shoppers</li>
                  <li>Simplified checkout process reducing steps from 5 to 3</li>
                  <li>Advanced product filtering and recommendation engine</li>
                  <li>Performance-optimized architecture using modern frontend technologies</li>
                  <li>Integrated analytics system for real-time business intelligence</li>
                </ul>

                <div className="my-8">
                  <Image
                    src="/placeholder.svg?height=400&width=800"
                    alt="Design Process Mockups"
                    width={800}
                    height={400}
                    className="rounded-xl border"
                  />
                  <p className="text-center text-sm text-muted-foreground mt-2">
                    Design evolution showing wireframes, mockups, and final UI for the product detail page
                  </p>
                </div>

                <h3>Development & Implementation</h3>
                <p>
                  Our development process was iterative and collaborative, with regular client check-ins and adjustments
                  based on feedback:
                </p>

                <ul>
                  <li>
                    <strong>Frontend Development:</strong> Built with React and Next.js for optimal performance and SEO
                  </li>
                  <li>
                    <strong>Backend Integration:</strong> Seamless connection with their existing inventory and CRM
                    systems
                  </li>
                  <li>
                    <strong>Performance Optimization:</strong> Implemented lazy loading, image optimization, and caching
                    strategies
                  </li>
                  <li>
                    <strong>Personalization Engine:</strong> Developed a custom recommendation system based on browsing
                    history and preferences
                  </li>
                  <li>
                    <strong>Analytics Suite:</strong> Comprehensive tracking to measure user behavior and conversion
                    metrics
                  </li>
                </ul>

                <h3>Testing & Refinement</h3>
                <p>Before launch, we conducted extensive testing to ensure everything worked flawlessly:</p>

                <ul>
                  <li>Usability testing with 18 participants across different devices</li>
                  <li>A/B testing of key conversion elements including CTAs and checkout steps</li>
                  <li>Performance testing across various network conditions</li>
                  <li>Accessibility compliance checking</li>
                  <li>Security and load testing</li>
                </ul>

                <h2>The Results</h2>
                <p>
                  The redesigned e-commerce platform launched after 4 months of development, with immediate positive
                  results:
                </p>

                <h3>Performance Improvements</h3>
                <ul>
                  <li>Page load time reduced from 6.5 seconds to 1.8 seconds</li>
                  <li>Mobile responsiveness score improved from 68/100 to 96/100</li>
                  <li>Server response time decreased by 62%</li>
                  <li>Google Lighthouse score improved from 64 to 92</li>
                </ul>

                <h3>Business Impact</h3>
                <ul>
                  <li>45% increase in mobile sales within the first 3 months</li>
                  <li>28% higher overall conversion rate</li>
                  <li>Cart abandonment rate decreased from 76% to 43%</li>
                  <li>Average order value increased by 18%</li>
                  <li>Customer satisfaction score improved from 3.4/5 to 4.7/5</li>
                </ul>

                <div className="my-8 bg-muted p-8 rounded-xl">
                  <div className="flex items-start">
                    <Quote className="h-8 w-8 text-secondary mr-4 flex-shrink-0" />
                    <blockquote className="text-xl italic">
                      "The Sydek team not only understood our technical challenges but also our brand ethos and customer
                      expectations. The redesigned platform has transformed our online business, with mobile revenue now
                      exceeding desktop for the first time in our company's history."
                      <footer className="mt-4 text-base font-medium">
                        — Michael Rodriguez, CEO of FashionForward Inc.
                      </footer>
                    </blockquote>
                  </div>
                </div>

                <h2>Key Learnings</h2>
                <p>
                  This project reinforced several important principles that can be applied to similar e-commerce
                  transformations:
                </p>

                <ul>
                  <li>
                    <strong>Mobile-first is no longer optional:</strong> With over 70% of traffic coming from mobile
                    devices, prioritizing mobile experience is essential for retail success
                  </li>
                  <li>
                    <strong>Performance directly impacts revenue:</strong> Every 100ms improvement in load time resulted
                    in approximately 1% increase in conversion rate
                  </li>
                  <li>
                    <strong>Simplicity drives conversions:</strong> Reducing checkout steps from 5 to 3 had a dramatic
                    effect on completion rates
                  </li>
                  <li>
                    <strong>Personalization is powerful:</strong> The recommendation engine increased average order
                    value by highlighting complementary products
                  </li>
                  <li>
                    <strong>Analytics provide ongoing value:</strong> The comprehensive tracking system continues to
                    reveal insights that drive further optimizations
                  </li>
                </ul>

                <h2>Looking Forward</h2>
                <p>
                  Following the success of the e-commerce redesign, we're continuing our partnership with FashionForward
                  Inc. on several initiatives:
                </p>

                <ul>
                  <li>Implementing an AI-powered virtual try-on feature</li>
                  <li>Developing an integrated loyalty program across online and in-store experiences</li>
                  <li>Creating a mobile app to complement the web experience</li>
                  <li>Expanding the platform to support international markets and currencies</li>
                </ul>

                <p>
                  This case study demonstrates how a strategic, user-centered approach to e-commerce redesign can
                  transform not just a website, but an entire business model, creating substantial revenue growth and
                  positioning a traditional retailer for success in the digital era.
                </p>

                <div className="flex items-center justify-between mt-12 pt-6 border-t">
                  <Button variant="outline" asChild>
                    <Link href="/company/case-studies">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to Case Studies
                    </Link>
                  </Button>
                  <Button asChild className="bg-secondary hover:bg-secondary/90">
                    <Link href="/company/contact">
                      Discuss Your Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Related Case Studies</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/company/case-studies/mobile-banking-app" className="group">
                <div className="bg-background rounded-xl border overflow-hidden hover:shadow-md transition-shadow h-full">
                  <div className="aspect-[3/2] overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=450"
                      alt="Mobile Banking App"
                      width={450}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-medium bg-secondary/10 text-secondary px-2 py-1 rounded-full">
                      Mobile Development
                    </span>
                    <h3 className="text-lg font-semibold mt-3 mb-2 group-hover:text-secondary transition-colors">
                      Mobile Banking Application
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      A secure and intuitive mobile banking application that transformed how customers interact with
                      their financial institution.
                    </p>
                  </div>
                </div>
              </Link>

              <Link href="/company/case-studies/ai-content-platform" className="group">
                <div className="bg-background rounded-xl border overflow-hidden hover:shadow-md transition-shadow h-full">
                  <div className="aspect-[3/2] overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=450"
                      alt="AI Content Platform"
                      width={450}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-medium bg-secondary/10 text-secondary px-2 py-1 rounded-full">
                      AI & Machine Learning
                    </span>
                    <h3 className="text-lg font-semibold mt-3 mb-2 group-hover:text-secondary transition-colors">
                      AI-Powered Content Platform
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Leveraging AI to help publishers create, optimize, and distribute content more effectively.
                    </p>
                  </div>
                </div>
              </Link>

              <Link href="/company/case-studies/supply-chain-optimization" className="group">
                <div className="bg-background rounded-xl border overflow-hidden hover:shadow-md transition-shadow h-full">
                  <div className="aspect-[3/2] overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=450"
                      alt="Supply Chain Platform"
                      width={450}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-medium bg-secondary/10 text-secondary px-2 py-1 rounded-full">
                      Enterprise Solutions
                    </span>
                    <h3 className="text-lg font-semibold mt-3 mb-2 group-hover:text-secondary transition-colors">
                      Supply Chain Optimization Platform
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      A digital transformation initiative that enhanced visibility and efficiency across the entire
                      supply chain ecosystem.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

