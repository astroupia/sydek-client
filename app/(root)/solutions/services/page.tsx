import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Code, Smartphone, Palette, Database, Server, Lightbulb } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const services = [
  {
    icon: <Palette className="h-10 w-10 text-secondary" />,
    title: "Brand Identity",
    description:
      "Create a unique and memorable brand identity that resonates with your target audience and sets you apart from competitors.",
    features: [
      "Logo design and brand guidelines",
      "Visual identity systems",
      "Brand messaging and voice",
      "Brand strategy and positioning",
      "Marketing collateral design",
    ],
    image: "/placeholder.svg?height=500&width=800",
  },
  {
    icon: <Code className="h-10 w-10 text-secondary" />,
    title: "Web Development",
    description:
      "Build responsive, user-friendly websites and web applications that deliver exceptional user experiences and drive business results.",
    features: [
      "Custom website development",
      "E-commerce solutions",
      "Content management systems",
      "Web application development",
      "Website maintenance and support",
    ],
    image: "/placeholder.svg?height=500&width=800",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-secondary" />,
    title: "Mobile Applications",
    description:
      "Develop intuitive, high-performance mobile applications for iOS and Android that engage users and solve real business problems.",
    features: [
      "Native iOS and Android development",
      "Cross-platform solutions",
      "UI/UX design for mobile",
      "App store optimization",
      "Ongoing maintenance and updates",
    ],
    image: "/placeholder.svg?height=500&width=800",
  },
  {
    icon: <Database className="h-10 w-10 text-secondary" />,
    title: "Backend Systems",
    description:
      "Create robust, scalable backend systems that power your digital infrastructure and support your business operations.",
    features: [
      "API development and integration",
      "Database design and optimization",
      "Cloud infrastructure setup",
      "Microservices architecture",
      "Performance optimization",
    ],
    image: "/placeholder.svg?height=500&width=800",
  },
  {
    icon: <Server className="h-10 w-10 text-secondary" />,
    title: "DevOps & Cloud",
    description:
      "Implement efficient DevOps practices and cloud solutions to improve development workflows and optimize infrastructure costs.",
    features: [
      "CI/CD pipeline setup",
      "Cloud migration and management",
      "Infrastructure as code",
      "Monitoring and logging",
      "Security implementation",
    ],
    image: "/placeholder.svg?height=500&width=800",
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-secondary" />,
    title: "Digital Strategy",
    description:
      "Develop comprehensive digital strategies that align with your business goals and drive digital transformation initiatives.",
    features: [
      "Digital transformation roadmaps",
      "Technology stack recommendations",
      "User research and insights",
      "Competitive analysis",
      "ROI measurement frameworks",
    ],
    image: "/placeholder.svg?height=500&width=800",
  },
]

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start by understanding your business, goals, and challenges through in-depth discussions and research.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Based on our findings, we develop a tailored strategy that outlines the approach, timeline, and deliverables.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Our design team creates wireframes and visual designs that align with your brand and meet user needs.",
  },
  {
    number: "04",
    title: "Development",
    description: "Our developers bring the designs to life, building robust, scalable, and secure digital solutions.",
  },
  {
    number: "05",
    title: "Testing",
    description: "We rigorously test all aspects of the solution to ensure quality, performance, and security.",
  },
  {
    number: "06",
    title: "Launch",
    description: "After final approvals, we deploy the solution and provide training and documentation as needed.",
  },
  {
    number: "07",
    title: "Support",
    description: "We offer ongoing support and maintenance to ensure your solution continues to perform optimally.",
  },
]

const testimonials = [
  {
    quote:
      "Sydek transformed our digital presence with a beautiful website and intuitive mobile app. Their team was professional, responsive, and delivered beyond our expectations.",
    author: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechNova Inc.",
  },
  {
    quote:
      "The backend system Sydek built for us has significantly improved our operational efficiency. Their technical expertise and attention to detail are unmatched.",
    author: "Michael Chen",
    role: "CTO",
    company: "Global Solutions",
  },
  {
    quote:
      "Working with Sydek on our brand identity was a game-changer. They captured the essence of our company and created a visual language that resonates with our audience.",
    author: "Emily Rodriguez",
    role: "CEO",
    company: "Innovate Financial",
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(95,31,95,0.2),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(187,173,213,0.2),transparent_60%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive <span className="text-gradient">Digital Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              From concept to execution, we deliver end-to-end services tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border bg-background hover:shadow-md transition-all duration-300">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-secondary mr-2 flex-shrink-0" />
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
                    <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground">Explore our most popular digital solutions</p>
          </div>

          <Tabs defaultValue="web" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
            </TabsList>

            <TabsContent value="web" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Web Development Excellence</h3>
                  <p className="text-lg mb-6">
                    Our web development services combine cutting-edge technology with exceptional design to create
                    websites and web applications that stand out in today's competitive digital landscape.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Responsive designs that work across all devices",
                      "Performance-optimized for fast loading times",
                      "SEO-friendly architecture and implementation",
                      "Accessible interfaces that comply with WCAG guidelines",
                      "Secure development practices to protect your data",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-6 w-6 text-secondary mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="bg-secondary hover:bg-secondary/90">
                    <Link href="/contact">
                      Discuss Your Web Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="relative">
                  <div className="aspect-[4/3] overflow-hidden rounded-xl border shadow-xl">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Web Development"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-secondary rounded-lg p-4 shadow-lg">
                    <p className="text-white font-bold">Modern web solutions</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="mobile" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="aspect-[4/3] overflow-hidden rounded-xl border shadow-xl">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Mobile Development"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-secondary rounded-lg p-4 shadow-lg">
                    <p className="text-white font-bold">Seamless mobile experiences</p>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-2xl font-bold mb-4">Mobile App Development</h3>
                  <p className="text-lg mb-6">
                    We create intuitive, high-performance mobile applications that engage users and deliver tangible
                    business value across iOS and Android platforms.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Native and cross-platform development expertise",
                      "Intuitive user interfaces with smooth interactions",
                      "Offline functionality and data synchronization",
                      "Integration with device features and third-party services",
                      "Rigorous testing across multiple devices",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-6 w-6 text-secondary mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="bg-secondary hover:bg-secondary/90">
                    <Link href="/contact">
                      Discuss Your Mobile Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="backend" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Backend Systems & Infrastructure</h3>
                  <p className="text-lg mb-6">
                    Our backend development services focus on building robust, scalable systems that power your digital
                    products and support your business operations efficiently.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Scalable architecture design for growth",
                      "RESTful and GraphQL API development",
                      "Database design and optimization",
                      "Cloud infrastructure setup and management",
                      "Security implementation and compliance",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-6 w-6 text-secondary mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="bg-secondary hover:bg-secondary/90">
                    <Link href="/contact">
                      Discuss Your Backend Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="relative">
                  <div className="aspect-[4/3] overflow-hidden rounded-xl border shadow-xl">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Backend Development"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-secondary rounded-lg p-4 shadow-lg">
                    <p className="text-white font-bold">Powerful backend solutions</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              A structured approach to delivering exceptional digital solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.slice(0, 4).map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-background rounded-lg p-6 border shadow-sm h-full">
                  <div className="text-4xl font-bold text-secondary mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-secondary" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {processSteps.slice(4).map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-background rounded-lg p-6 border shadow-sm h-full">
                  <div className="text-4xl font-bold text-secondary mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-secondary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-xl text-primary-foreground/80">What our clients say about working with us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-primary-foreground/5 backdrop-blur-sm p-6 rounded-xl border border-primary-foreground/10"
              >
                <p className="italic mb-6 text-primary-foreground/80">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-primary-foreground/60">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl mb-8 text-muted-foreground">
              Let's collaborate to create innovative digital solutions that drive your business forward. Our team of
              experts is ready to bring your vision to life.
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

