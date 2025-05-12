import HeroSection from "@/components/shared/hero-section";
import CtaCard from "@/components/shared/cta-card";
import FeaturedProject from "@/components/projects/featured-project";
import ProjectsGrid from "@/components/projects/projects-grid";
import type { Project } from "@/types/projects";

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform Redesign",
      description:
        "A complete overhaul of an e-commerce platform, focusing on user experience, performance, and conversion optimization.",
      category: "Web Development",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 2,
      title: "Mobile Banking Application",
      description:
        "A secure and intuitive mobile banking application with advanced features and biometric authentication.",
      category: "Mobile Development",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 3,
      title: "Healthcare Management System",
      description:
        "A comprehensive healthcare management system for hospitals and clinics, streamlining patient care and administrative tasks.",
      category: "Enterprise Solutions",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 4,
      title: "AI-Powered Content Platform",
      description:
        "A content management platform with AI-powered recommendations and analytics for publishers.",
      category: "AI & Machine Learning",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 5,
      title: "Smart Home Control System",
      description:
        "An integrated system for controlling smart home devices with voice commands and automated routines.",
      category: "IoT Solutions",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 6,
      title: "Corporate Brand Identity",
      description:
        "A complete brand identity redesign for a multinational corporation, including logo, guidelines, and marketing materials.",
      category: "Brand Identity",
      image: "/placeholder.svg?height=600&width=800",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Our"
        highlightedTitle="Projects"
        description="Explore our portfolio of innovative digital solutions across various industries."
        buttonText="Get Started"
        buttonLink="#contact"
      />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <FeaturedProject
            title="Fintech Dashboard Redesign"
            description="A complete overhaul of a financial technology platform's dashboard, focusing on data visualization, user experience, and performance optimization."
            image="/placeholder.svg?height=400&width=600"
            buttonText="View Case Study"
            buttonLink="#"
          />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <ProjectsGrid
          projects={projects}
          showLoadMore={true}
          onLoadMore={() => console.log("Load more projects")}
          projectLinkPrefix="/projects"
        />
      </section>

      <CtaCard
        title="Ready to Start Your Project?"
        description="Let's collaborate to create innovative solutions that drive your business forward."
        buttonText="Contact Us"
        buttonLink="#contact"
        backgroundClass="bg-muted/30"
      />
    </div>
  );
}
