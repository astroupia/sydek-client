"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Code, Layers, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCarousel } from "@/components/animated-carousel";

const clients = [
  { name: "Wegenie", logo: "/assets/images/logos/wegenie.png" },
  { name: "Liyu", logo: "/assets/images/logos/liyu.png" },
  { name: "Organic Millstone", logo: "/assets/images/logos/om.png" },
  { name: "Fetan", logo: "/assets/images/logos/fetan.png" },
  { name: "Diplomat Corner", logo: "/assets/images/logos/diplomat.png" },
  { name: "Post Gallery", logo: "/assets/images/logos/post.png" },
];

const carouselItems = [
  {
    id: 1,
    image: "/assets/images/home/innovative-solutions.png",
    title: "Innovative Solutions",
    description: "Transforming ideas into reality",
  },
  {
    id: 2,
    image: "/assets/images/home/cutting-edge-technology.png",
    title: "Cutting-edge Technology",
    description: "Staying ahead in the digital world",
  },
  {
    id: 3,
    image: "/assets/images/home/expert-team.png",
    title: "Expert Team",
    description: "Dedicated professionals at your service",
  },
];

const heroTexts = [
  "Digital Experiences",
  "Brand Identities",
  "Web Applications",
  "Mobile Solutions",
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(95,31,95,0.2),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(187,173,213,0.2),transparent_60%)]"></div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.2] py-2">
                Crafting Future-Ready{" "}
                <span className="relative inline-block py-1">
                  {heroTexts.map((text, index) => (
                    <span
                      key={index}
                      className={`absolute inset-0 text-gradient transition-opacity ${
                        index === currentIndex ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {text}
                    </span>
                  ))}
                  <span className="invisible">{heroTexts[0]}</span>
                </span>
              </h1>
              <p className="mt-8 text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Empowering businesses with innovative digital solutions that
                drive growth, enhance user experience, and deliver measurable
                results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/company/contact">
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-white"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/solutions/services">
                <Button size="lg" variant="outline">
                  Our Services
                </Button>
              </Link>
            </motion.div>
          </div>

          <div className="mt-16 md:mt-24 relative max-w-5xl mx-auto">
            <AnimatedCarousel
              items={carouselItems}
              aspectRatio="wide"
              className="shadow-xl border border-foreground/20 dark:border-foreground/20"
            />
            <div className="mt-4 relative bg-background border border-foreground/20 dark:border-foreground/20 shadow-lg rounded-lg py-3 px-6 w-full max-w-3xl mx-auto">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-green-500 dark:bg-green-400"></div>
                  <p className="text-sm font-medium text-foreground">
                    Trusted by 15+ companies worldwide
                  </p>
                </div>
                <div className="hidden md:flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[
                      "/assets/images/about/daniel.jpg",
                      "/assets/images/about/michael.jpg",
                      "/assets/images/about/nahom.jpg",
                    ].map((image, i) => (
                      <div
                        key={i}
                        className="relative h-6 w-6 rounded-full border-2 border-background dark:border-background overflow-hidden"
                      >
                        <Image
                          src={image}
                          alt={`Team member ${i + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-sm font-medium text-foreground">
                    Join our growing community
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logo Carousel */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-xl font-medium text-muted-foreground">
              Trusted by industry leaders worldwide
            </h2>
          </div>

          <div className="relative overflow-hidden">
            <div className="client-carousel flex space-x-12">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-none w-[150px] md:w-[200px] flex items-center justify-center"
                >
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    width={120}
                    height={60}
                    className="grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300 "
                  />
                </div>
              ))}
            </div>
            <div className="absolute left-0 top-0 bg-gradient-to-r from-background to-transparent w-24 h-full z-10"></div>
            <div className="absolute right-0 top-0 bg-gradient-to-l from-background to-transparent w-24 h-full z-10"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              We blend creativity, technical expertise, and strategic insight to
              bring ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Layers className="h-10 w-10 text-secondary" />,
                title: "Brand Identity",
                description:
                  "Create a unique brand identity that captures the essence of your vision and resonates with your audience.",
              },
              {
                icon: <Code className="h-10 w-10 text-secondary" />,
                title: "Web Development",
                description:
                  "Build responsive, user-centric websites and web applications that deliver exceptional user experiences.",
              },
              {
                icon: <Zap className="h-10 w-10 text-secondary" />,
                title: "Mobile Solutions",
                description:
                  "Develop seamless mobile apps that drive engagement and deliver value across all platforms.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary to-accent rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative flex flex-col items-center text-center">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                  <Link
                    href="/solutions/projects"
                    className="mt-4 inline-flex items-center text-secondary hover:underline"
                  >
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Forward-Thinking Digital Services
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Sydek is a forward-thinking digital services company committed
                to helping businesses and individuals succeed in the digital
                world. We offer a comprehensive suite of solutions, from
                designing unique brand identities that capture the essence of
                our clients' visions to developing advanced web and mobile
                applications.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our team of experts specializes in creating visually engaging
                and user-centric websites, robust back-end systems, and seamless
                mobile apps that drive engagement and deliver value.
              </p>
              <Link href="/company/about">
                <Button className="bg-secondary hover:bg-secondary/90 text-white">
                  About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary to-accent rounded-2xl blur opacity-20"></div>
              <div className="relative rounded-2xl overflow-hidden border shadow-xl">
                <Image
                  src="/assets/images/home/future-thinking.jpg"
                  alt="Sydek Team"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-accent to-tertiary opacity-90"></div>
            <div className="relative z-10 py-16 px-6 md:px-12 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to transform your digital presence?
              </h2>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Let's collaborate to create innovative solutions that drive your
                business forward.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/company/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white/10"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
