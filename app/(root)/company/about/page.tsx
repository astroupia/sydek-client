import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedCarousel } from "@/components/animated-carousel";
import InteractiveBackground from "@/components/interactive-background";

const teamCarouselItems = [
  {
    id: 1,
    image: "/placeholder.svg?height=400&width=600",
    title: "Team Building",
    description: "Fostering collaboration and innovation",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=400&width=600",
    title: "Expert Consultation",
    description: "Providing tailored solutions for our clients",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=400&width=600",
    title: "Continuous Learning",
    description: "Staying ahead in the ever-evolving tech landscape",
  },
];

import HeroSection from "@/components/shared/hero-section";
import { MissionSection } from "@/components/about/mission-section";
import { ValuesSection } from "@/components/about/values-section";
import { TeamSection } from "@/components/about/team-section";
import { CTASection } from "@/components/about/cta-section";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="About"
        highlightedTitle="Sydek"
        description="A forward-thinking digital services company committed to helping businesses and individuals succeed in the digital world."
        buttonText="Learn More"
      />

      <MissionSection
        imageSrc="/placeholder.svg?height=600&width=800"
        imageAlt="Sydek Mission"
        title="Our Mission"
        description={[
          "At Sydek, we blend creativity, technical expertise, and strategic insight to bring ideas to life. We stay ahead of industry trends, ensuring our solutions are not only innovative but scalable for future growth.",
          "Our mission is to empower clients by delivering high-quality digital experiences that exceed expectations, enhance brand presence, and support business objectives in a competitive market.",
        ]}
      />

      <ValuesSection
        title="Our Core Values"
        subtitle="The principles that guide our work and relationships."
        values={[
          {
            title: "Innovation",
            description:
              "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.",
          },
          {
            title: "Excellence",
            description:
              "We are committed to delivering the highest quality in everything we do.",
          },
          {
            title: "Collaboration",
            description:
              "We believe in the power of teamwork and partnership with our clients.",
          },
          {
            title: "Integrity",
            description:
              "We operate with honesty, transparency, and ethical standards in all our dealings.",
          },
          {
            title: "User-Centric",
            description:
              "We place the end-user at the center of our design and development process.",
          },
          {
            title: "Adaptability",
            description:
              "We embrace change and continuously evolve to meet the demands of a dynamic digital landscape.",
          },
        ]}
      />

      <TeamSection
        title="Meet Our"
        subtitle="The talented individuals behind our success"
        carouselItems={teamCarouselItems}
        teamMembers={[
          {
            name: "Alex Johnson",
            role: "CEO & Founder",
            image:
              "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&auto=format",
          },
          {
            name: "Sarah Chen",
            role: "Creative Director",
            image:
              "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&auto=format",
          },
          {
            name: "Michael Rodriguez",
            role: "Lead Developer",
            image:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&auto=format",
          },
          {
            name: "Emily Wong",
            role: "UX Designer",
            image:
              "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&auto=format",
          },
          {
            name: "David Kim",
            role: "Backend Engineer",
            image:
              "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&h=400&fit=crop&auto=format",
          },
          {
            name: "Lisa Patel",
            role: "Project Manager",
            image:
              "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=400&h=400&fit=crop&auto=format",
          },
        ]}
      />

      <CTASection
        title="Join Our Journey"
        description="Interested in working with us or joining our team? We'd love to hear from you."
        primaryButtonText="Contact Us"
        secondaryButtonText="View Careers"
      />
    </div>
  );
}
