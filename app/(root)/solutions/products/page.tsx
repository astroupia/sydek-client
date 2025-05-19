import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import HeroSection from "@/components/shared/hero-section"
import React, { JSX } from "react"

interface Product {
  title: string
  description: string
  image: string
  category: "Crowdfunding" | "Finance" | "Education" | "Analytics"
  features: string[]
  link: string
}

interface Integration {
  name: string
  logo: string
}

const products: Product[] = [
  {
    title: "Wegenie",
    description:
      "A crowdfunding platform designed for genuine causes, empowering individuals and organizations to connect with supporters through a secure, transparent environment.",
    image: "../assets/images/products/wegenie.png",
    category: "Crowdfunding",
    features: [
      "Low transaction commissions for fair funding",
      "Transparency and trust for backer confidence",
      "Chapa, Telebirr & Stripe integrations",
      "Customizable campaign pages",
      "Real-time donation tracking",
    ],
    link: "https://wegenie-webapp.vercel.app/"
  },
  {
    title: "Fetan",
    description:
      "A fast and reliable fintech solution for seamless currency exchange and financial transactions, offering developers free APIs and businesses high-quality service delivery.",
    image: "../assets/images/products/fetan.png",
    category: "Finance",
    features: [
      "Real-time currency exchange rates",
      "Free developer APIs",
      "Efficiency & quality guaranteed",
      "Secure payment processing",
      "Comprehensive documentation",
    ],
    link: "https://fetan.co/"
  },
  {
    title: "Tibeb",
    description:
      "An educational platform providing accessible, high-quality courses across business, technology, and personal development, designed to unlock potential for all learners.",
    image: "../assets/images/products/tibeb.png",
    category: "Education",
    features: [
      "Wide range of interactive courses",
      "Student progress tracking",
      "Curriculum & gradebook management",
      "Community engagement tools",
      "Practical real-world skill focus",
    ],
    link: "https://tibeb.vercel.app/"
  },
  {
    title: "Echolens",
    description:
      "AI-powered TikTok analytics with personalized podcast insights, virality scoring, and advanced optimization filters for faster, smarter growth.",
    image: "../assets/images/products/serp.png",
    category: "Analytics",
    features: [
      "Personalized podcast analyzing TikTok performance",
      "AI-powered virality and sentiment scoring",
      "Precision filtering for high-impact content",
      "Comprehensive PDF reports and strategy breakdowns",
      "Secure dashboard with real-time tracking",
    ],
    link: "https://echolens.vercel.app/"
  },
]

const integrations: Integration[] = [
  { name: "Chapa", logo: "../assets/images/products/chapa.png" },
  { name: "Telebirr", logo: "../assets/images/products/telebirr.png" },
  { name: "Stripe", logo: "../assets/images/products/stripe.png" },
  { name: "Salesforce", logo: "../assets/images/products/salesforce.png" },
  { name: "Slack", logo: "../assets/images/products/slack.png" },
  { name: "Shopify", logo: "../assets/images/products/shopify.png" },
]

const ProductsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}


      <HeroSection
        title="Our"
        highlightedTitle="Products"
        description="Powerful digital solutions designed to help your business thrive."
      />


      {/* Featured Product */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Introducing <span className="text-gradient">{products[3].title}</span>
              </h2>
              <p className="text-lg mb-6">{products[3].description}</p>
              <div className="space-y-4 mb-8">
                {products[3].features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-secondary mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Button asChild className="bg-secondary hover:bg-secondary/90">
                <Link href={products[3].link}>
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-xl border shadow-xl">
                <Image
                  src={products[3].image}
                  alt={`${products[3].title} Dashboard`}
                  width={800}
                  height={600}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-secondary rounded-lg p-4 shadow-lg">
                <p className="text-white font-bold">Crowdfunding Innovation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Suite */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Product Suite</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive solutions for every aspect of your digital journey
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
              <TabsTrigger value="all">All Products</TabsTrigger>
              <TabsTrigger value="crowdfunding">Crowdfunding</TabsTrigger>
              <TabsTrigger value="finance">Finance</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {products.map((product, idx) => (
                  <ProductCard key={idx} product={product} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="crowdfunding">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {products
                  .filter((p) => p.category === "Crowdfunding")
                  .map((product, idx) => <ProductCard key={idx} product={product} />)}
              </div>
            </TabsContent>

            <TabsContent value="finance">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {products
                  .filter((p) => p.category === "Finance")
                  .map((product, idx) => <ProductCard key={idx} product={product} />)}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Custom Integration Solutions Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Visual */}
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="relative w-[320px] h-[320px]">
                {/* Pulsing Circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-secondary/20 rounded-full animate-pulse" />
                    <div
                      className="absolute inset-[15%] bg-secondary/30 rounded-full animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    />
                    <div
                      className="absolute inset-[30%] bg-secondary/40 rounded-full animate-pulse"
                      style={{ animationDelay: "1s" }}
                    />
                    <div className="absolute inset-[45%] bg-secondary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">Sydek</span>
                    </div>
                  </div>
                </div>

                {/* Integration Logos */}
                {integrations.map((integ, idx) => {
                  const radius = 110;
                  const angle = (2 * Math.PI * idx) / integrations.length;
                  const offsetX = radius * Math.cos(angle);
                  const offsetY = radius * Math.sin(angle);
                  return (
                    <div
                      key={idx}
                      className="absolute w-12 h-12 rounded-full bg-white border shadow-md flex items-center justify-center p-2"
                      style={{
                        top: `calc(50% + ${offsetY}px - 24px)`,
                        left: `calc(50% + ${offsetX}px - 24px)`,
                      }}
                    >
                      <Image
                        src={integ.logo}
                        alt={integ.name}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Text Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Build Your <span className="text-gradient">Integration Solution</span>
              </h2>
              <p className="text-lg mb-6">
                Let us help you create a custom integration solution that connects your business with the tools and services you need. Our team specializes in building robust integrations with various third-party applications.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Custom API Development and Integration",
                  "Payment Gateway Solutions (Chapa, Telebirr, Stripe)",
                  "E-commerce Platform Integration",
                  "CRM and Marketing Tool Connections",
                  "Legacy System Integration",
                ].map((feat, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-secondary mr-2 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                <Button asChild className="bg-secondary hover:bg-secondary/90">
                  <Link href="/solutions/integration-services">
                    Explore Integration Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="ml-4">
                  <Link href="/company/contact">
                    Discuss Your Integration Needs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
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
              Discover how Sydek products can empower your business and community.
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

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }): JSX.Element => (
  <Card className="border bg-background hover:shadow-md transition-all duration-300 overflow-hidden group">
    <div className="aspect-[16/9] overflow-hidden relative">
      <Image
        src={product.image}
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
        {product.features.map((feat, idx) => (
          <li key={idx} className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-secondary mr-2 flex-shrink-0" />
            <span className="text-sm">{feat}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter className="flex justify-end items-center border-t pt-4">
      <Button asChild variant="ghost" size="sm" className="hover:text-secondary">
        <Link href={product.link}>
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </CardFooter>
  </Card>
)

export default ProductsPage
