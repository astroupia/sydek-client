import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Zap, Shield, BarChart3, Layers, Users, Code } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const products = [
  {
    title: "Client Digital Platform",
    description:
      "A comprehensive digital platform for businesses to manage client relationships, projects, and communications.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Business",
    pricing: "From $149/mo",
    features: [
      "Client portal with customizable dashboards",
      "Project management and tracking",
      "Document sharing and collaboration",
      "Secure messaging and communication",
      "Automated reporting and analytics",
    ],
  },
  {
    title: "Fetan",
    description:
      "A powerful currency exchange provider and API for seamless international transactions and financial operations.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Finance",
    pricing: "From $199/mo",
    features: [
      "Real-time currency exchange rates",
      "Secure payment processing",
      "Multi-currency support",
      "Comprehensive API documentation",
      "Transaction monitoring and reporting",
    ],
  },
  {
    title: "Wegenie",
    description:
      "An innovative crowdfunding web application that connects creators with backers to bring projects to life.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Crowdfunding",
    pricing: "From $99/mo",
    features: [
      "Customizable campaign pages",
      "Multiple funding models",
      "Social media integration",
      "Backer management tools",
      "Analytics and reporting dashboard",
    ],
  },
  {
    title: "Tibeb",
    description: "A comprehensive educational system for exam preparation, quizzes, and school management.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Education",
    pricing: "From $129/mo",
    features: [
      "Interactive quiz and exam creation",
      "Student progress tracking",
      "Curriculum management",
      "Gradebook and assessment tools",
      "Parent-teacher communication portal",
    ],
  },
]

const integrations = [
  { name: "Slack", logo: "/placeholder.svg?height=128&width=128" },
  { name: "Google", logo: "/placeholder.svg?height=128&width=128" },
  { name: "Salesforce", logo: "/placeholder.svg?height=128&width=128" },
  { name: "Microsoft", logo: "/placeholder.svg?height=128&width=128" },
  { name: "Shopify", logo: "/placeholder.svg?height=128&width=128" },
  { name: "Stripe", logo: "/placeholder.svg?height=128&width=128" },
]

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(95,31,95,0.2),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(187,173,213,0.2),transparent_60%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Our <span className="text-gradient">Products</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Powerful digital solutions designed to help your business thrive in the modern world.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Introducing <span className="text-gradient">Client Digital Platform</span>
              </h2>
              <p className="text-lg mb-6">
                Our flagship client management platform provides powerful tools to streamline client relationships,
                project management, and communication in one unified interface.
              </p>
              <p className="text-lg mb-6">
                With customizable dashboards, secure document sharing, and integrated messaging, the Client Digital
                Platform transforms how businesses interact with their clients.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Centralized client information and project tracking",
                  "Secure document sharing and collaboration",
                  "Integrated messaging and communication tools",
                  "Customizable dashboards and reporting",
                  "Enterprise-grade security and compliance",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-secondary mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Button asChild className="bg-secondary hover:bg-secondary/90">
                <Link href="/solutions/products/client-digital-platform">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-xl border shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Client Digital Platform Dashboard"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-secondary rounded-lg p-4 shadow-lg">
                <p className="text-white font-bold">Streamline client management</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Product Suite</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive solutions for every aspect of your digital business
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
              <TabsTrigger value="all">All Products</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {products.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="business" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {products
                  .filter((product) => ["Business", "Finance", "Crowdfunding"].includes(product.category))
                  .map((product, index) => (
                    <ProductCard key={index} product={product} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="education" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {products
                  .filter((product) => ["Education"].includes(product.category))
                  .map((product, index) => (
                    <ProductCard key={index} product={product} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Flexible <span className="text-gradient">Pricing Plans</span>
            </h2>
            <p className="text-xl text-muted-foreground">Choose the plan that best fits your business needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$99",
                description: "Perfect for small businesses just getting started with digital transformation.",
                features: [
                  "Access to core product features",
                  "Up to 5 user accounts",
                  "Basic analytics and reporting",
                  "Standard support",
                  "1GB storage",
                ],
                cta: "Get Started",
                popular: false,
              },
              {
                name: "Professional",
                price: "$249",
                description: "Ideal for growing businesses with expanding digital needs.",
                features: [
                  "All Starter features",
                  "Up to 20 user accounts",
                  "Advanced analytics and reporting",
                  "Priority support",
                  "10GB storage",
                  "API access",
                ],
                cta: "Get Started",
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "Tailored solutions for large organizations with complex requirements.",
                features: [
                  "All Professional features",
                  "Unlimited user accounts",
                  "Custom integrations",
                  "Dedicated account manager",
                  "24/7 premium support",
                  "Unlimited storage",
                  "On-premise deployment options",
                ],
                cta: "Contact Sales",
                popular: false,
              },
            ].map((plan, index) => (
              <Card key={index} className={`border ${plan.popular ? "border-secondary shadow-lg" : ""} relative`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-secondary text-white px-4 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4 flex items-baseline text-5xl font-extrabold">
                    {plan.price}
                    {plan.price !== "Custom" && (
                      <span className="ml-1 text-xl font-medium text-muted-foreground">/month</span>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{plan.description}</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-secondary mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className={`w-full ${plan.popular ? "bg-secondary hover:bg-secondary/90" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    <Link href="/company/contact">{plan.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Sydek Products</h2>
            <p className="text-xl text-primary-foreground/80">Powerful solutions designed with your business in mind</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-10 w-10 text-accent" />,
                title: "Performance Optimized",
                description:
                  "Our products are built for speed and efficiency, ensuring smooth operation even under heavy loads.",
              },
              {
                icon: <Shield className="h-10 w-10 text-accent" />,
                title: "Enterprise Security",
                description:
                  "Advanced security features protect your data and ensure compliance with industry standards.",
              },
              {
                icon: <BarChart3 className="h-10 w-10 text-accent" />,
                title: "Data-Driven Insights",
                description:
                  "Powerful analytics capabilities help you make informed decisions based on real-time data.",
              },
              {
                icon: <Layers className="h-10 w-10 text-accent" />,
                title: "Scalable Architecture",
                description: "Our products grow with your business, scaling seamlessly to meet increasing demands.",
              },
              {
                icon: <Users className="h-10 w-10 text-accent" />,
                title: "User-Centric Design",
                description: "Intuitive interfaces and thoughtful UX make our products easy to adopt and use.",
              },
              {
                icon: <Code className="h-10 w-10 text-accent" />,
                title: "Extensive Customization",
                description: "Flexible configuration options allow you to tailor our products to your specific needs.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-primary-foreground/5 backdrop-blur-sm p-6 rounded-xl border border-primary-foreground/10"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-primary-foreground/80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-48 h-48">
                    <div className="absolute inset-0 bg-secondary/20 rounded-full animate-pulse"></div>
                    <div
                      className="absolute inset-[15%] bg-secondary/30 rounded-full animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                    <div
                      className="absolute inset-[30%] bg-secondary/40 rounded-full animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>
                    <div className="absolute inset-[45%] bg-secondary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">Sydek</span>
                    </div>
                  </div>

                  {integrations.map((integration, index) => (
                    <div
                      key={index}
                      className="absolute w-12 h-12 rounded-full bg-background border shadow-md overflow-hidden"
                      style={{
                        top: `${50 + 35 * Math.sin(index * ((Math.PI * 2) / integrations.length))}%`,
                        left: `${50 + 35 * Math.cos(index * ((Math.PI * 2) / integrations.length))}%`,
                      }}
                    >
                      <Image
                        src={integration.logo || "/placeholder.svg"}
                        alt={integration.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Seamless <span className="text-gradient">Integrations</span>
              </h2>
              <p className="text-lg mb-6">
                Our products integrate seamlessly with your existing tools and systems, ensuring a smooth workflow and
                maximizing productivity.
              </p>
              <p className="text-lg mb-6">
                From popular CRM systems and marketing platforms to custom enterprise solutions, Sydek products connect
                with the tools you already use.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "One-click integration with popular platforms",
                  "Robust API for custom integrations",
                  "Secure data exchange between systems",
                  "Automated synchronization and updates",
                  "Comprehensive documentation and support",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-secondary mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Button asChild className="bg-secondary hover:bg-secondary/90">
                <Link href="/resources/docs/integrations">
                  View Integration Documentation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Experience?</h2>
            <p className="text-xl mb-8 text-muted-foreground">
              Get started with Sydek products today and discover how our solutions can help your business thrive in the
              digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
                <Link href="/company/contact">
                  Schedule a Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/company/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ProductCard({ product }: { product: any }) {
  return (
    <Card className="border bg-background hover:shadow-md transition-all duration-300 overflow-hidden">
      <div className="aspect-[16/9] overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          width={800}
          height={500}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
          {product.category}
        </div>
      </div>
      <CardHeader>
        <CardTitle>{product.title}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {product.features.map((feature: string, featureIndex: number) => (
            <li key={featureIndex} className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-secondary mr-2 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex justify-between items-center border-t pt-4">
        <span className="font-medium">{product.pricing}</span>
        <Button asChild variant="ghost" size="sm" className="hover:text-secondary">
          <Link href={`/solutions/products/${product.title.toLowerCase().replace(/\s+/g, "-")}`}>
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

