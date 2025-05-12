"use client";

import type React from "react";
import HeroSection from "@/components/shared/hero-section";
import KeyBenefitsSection from "@/components/platform/key-benefits";
import FeaturesSection from "@/components/platform/features";
import PlatformOverview from "@/components/platform/platfrom-overview";
import TestimonialsSection from "@/components/shared/testimonial";
import CTACard from "@/components/shared/cta-card";
import {
  CheckCircle,
  BarChart,
  Users,
  Shield,
  Zap,
  FileText,
} from "lucide-react";

export default function ClientDigitalPlatform() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Client Digital"
        highlightedTitle="Platform"
        description="Empower your business with our comprehensive client management solution. Streamline operations, enhance collaboration, and drive growth."
        buttonText="Get Started"
        buttonLink="/signup"
      />
      <KeyBenefitsSection
        mainTitle="Transform Your Operations"
        mainDescription="Our Client Digital Platform is designed to streamline your business processes, enhance collaboration, and drive growth through innovative digital solutions."
        mainButtonText="Learn More"
        benefitsTitle="Key Benefits"
        benefits={[
          { icon: CheckCircle, text: "Increased Efficiency" },
          { icon: BarChart, text: "Data-Driven Insights" },
          { icon: Users, text: "Enhanced Collaboration" },
          { icon: Shield, text: "Robust Security" },
          { icon: Zap, text: "Scalable Performance" },
        ]}
      />
      <FeaturesSection
        title="Key Features"
        features={[
          {
            icon: <BarChart className="h-6 w-6 text-secondary" />,
            title: "Performance Tracking",
            description:
              "Monitor project progress and team performance with intuitive dashboards and real-time analytics.",
          },
          {
            icon: <FileText className="h-6 w-6 text-secondary" />,
            title: "Document Management",
            description:
              "Centralize and organize all project-related documents for easy access and collaboration.",
          },
          {
            icon: <Users className="h-6 w-6 text-secondary" />,
            title: "Team Collaboration",
            description:
              "Foster seamless communication and collaboration among team members and stakeholders.",
          },
          {
            icon: <Zap className="h-6 w-6 text-secondary" />,
            title: "Automated Workflows",
            description:
              "Streamline processes with customizable, automated workflows to increase efficiency.",
          },
        ]}
      />
      <PlatformOverview
        title="Platform Overview"
        tabs={[
          {
            value: "dashboard",
            title: "Dashboard",
            description: "Get a bird's-eye view of your entire operation.",
            imageSrc: "/placeholder.svg?height=300&width=600",
            imageAlt: "Dashboard Preview",
          },
          {
            value: "projects",
            title: "Projects",
            description: "Manage and track all your projects in one place.",
            imageSrc: "/placeholder.svg?height=300&width=600",
            imageAlt: "Projects Preview",
          },
          {
            value: "team",
            title: "Team Management",
            description:
              "Efficiently manage your team and their responsibilities.",
            imageSrc: "/placeholder.svg?height=300&width=600",
            imageAlt: "Team Management Preview",
          },
          {
            value: "reports",
            title: "Reports",
            description:
              "Generate insightful reports to drive data-informed decisions.",
            imageSrc: "/placeholder.svg?height=300&width=600",
            imageAlt: "Reports Preview",
          },
        ]}
      />
      <TestimonialsSection
        title="What Our Clients Say"
        testimonials={[
          {
            name: "John Doe",
            company: "Tech Innovators Inc.",
            quote:
              "The Client Digital Platform has revolutionized how we manage our projects. It's intuitive, powerful, and has significantly improved our team's productivity.",
          },
          {
            name: "Jane Smith",
            company: "Global Solutions Ltd.",
            quote:
              "We've seen a 30% increase in project completion rates since implementing this platform. The real-time analytics have been a game-changer for our decision-making process.",
          },
          {
            name: "Alex Johnson",
            company: "Creative Minds Agency",
            quote:
              "The collaboration features are top-notch. Our team communication has never been better, and clients love the transparency it provides.",
          },
        ]}
      />
      <CTACard
        title="Ready to Transform Your Business?"
        description="Join thousands of satisfied clients and take your project management to the next level."
        buttonText="Start Your Free Trial"
        buttonLink="/trial"
      />
    </div>
  );
}
