"use client";

import React from "react"; // Import React if not already
import HeroSection from "@/components/shared/hero-section";
import CtaCard from "@/components/shared/cta-card";
import ProjectsGrid from "@/components/projects/projects-grid"; // Assuming this component can handle the Product type or is adaptable
import FeaturedProject from "@/components/projects/featured-project";

// Define the Product interface directly in this file
export interface Product {
  id: string; // A unique slug-like identifier (e.g., "green-cheddar")
  title: string;
  description: string;
  category: string; // e.g., "Web Development", "Mobile App", "AI Tool"
  image: string; // Path to the product image/mockup
  url?: string; // Optional URL to the live product or more info
  tags?: string[]; // Optional tags like "Fintech", "Education", "E-commerce"
}

export default function ProductsPage() {
  const productsData: Product[] = [
    // {
    //   id: "greencheddar",
    //   title: "GreenCheddar",
    //   description:
    //     "A platform helping households address living costs by saving carbon as an asset class. Features a lively, analytically based user experience and a complementary app.",
    //   category: "Web Development & Mobile App",
    //   image: "../assets/images/products/greencheddar.png", // Replace with actual image path
    //   url: "https://greencheddar.org",
    //   tags: ["Sustainability", "Fintech", "Web App", "Mobile App"],
    // },
    // {
    //   id: "rehoboth-athletics",
    //   title: "Rehoboth International Athletics",
    //   description:
    //     "A website capturing the essence of championship for an international athletics organization, designed to meet high standards and showcase their tenacity.",
    //   category: "Web Development & Branding",
    //   image: "../assets/images/products/rehoboth-athletics.png", // Replace with actual image path
    //   url: "https://rehobothathletics.com",
    //   tags: ["Sports", "Branding", "Web Design"],
    // },
    {
      id: "nibertad",
      title: "NiberTad",
      description:
        "A pioneering real estate dealership platform in Ethiopia, offering property advertisements with a user-centric software design.",
      category: "Web Platform",
      image: "../assets/images/projects/nibertad.png", // Replace with actual image path
      url: "https://nibretad.com",
      tags: ["Real Estate", "Platform", "Ethiopia"],
    },
    // {
    //   id: "shegerai",
    //   title: "Shegerai",
    //   description:
    //     "A basic AI service website for the Ethiopian community, allowing customers to subscribe to AI-powered services.",
    //   category: "AI Service & Web Platform",
    //   image: "../assets/images/projects/shegerai.png", // Replace with actual image path
    //   url: "https://shegerai.com",
    //   tags: ["AI", "Subscription", "Ethiopia", "Web Service"],
    // },
    {
      id: "diplomat-corner",
      title: "Diplomat Corner",
      description:
        "A trusted service platform for the diplomatic community in Ethiopia, offering property management, car rentals, and liaison support since 2015.",
      category: "Service Platform",
      image: "../assets/images/projects/diplomat-corner.png", // Replace with actual image path
      tags: ["Diplomatic Services", "Platform", "Ethiopia"],
    },
    // {
    //   id: "beblocky",
    //   title: "BeBlocky",
    //   description:
    //     "A revolutionary app for kids making learning computer programming interactive and fun using graphical blocks, inspired by Scratch.",
    //   category: "Mobile App & Education",
    //   image: "../assets/images/projects/beblocky.png", // Replace with actual image path
    //   tags: ["Mobile App", "Education", "Kids", "Coding"],
    // },
    // {
    //   id: "teenmamos",
    //   title: "teenMAMOS",
    //   description:
    //     "An Ethiopian online magazine for teenagers, offering advice, entertainment, quizzes, fashion, and lifestyle content.",
    //   category: "Mobile App & Digital Magazine",
    //   image: "../assets/images/projects/teenmamos.png", // Replace with actual image path
    //   tags: ["Mobile App", "Magazine", "Teens", "Ethiopia"],
    // },
    {
      id: "9grocery",
      title: "9 Grocery",
      description:
        "A cutting-edge user app revolutionizing grocery shopping with an intuitive platform for convenient online ordering and home delivery.",
      category: "Mobile App & E-commerce",
      image: "../assets/images/projects/9grocery.png", // Replace with actual image path
      tags: ["Mobile App", "E-commerce", "Grocery", "Convenience"],
    },
    {
      id: "pandro",
      title: "Pandro",
      description:
        "An Instagram automation tool for businesses to streamline customer engagement, automating direct messaging with personalized responses and analytics.",
      category: "AI Tool & Social Media",
      image: "../assets/images/projects/pandro.png", // Replace with actual image path
      tags: ["AI", "Automation", "Instagram", "Social Media Marketing"],
    },
    {
      id: "cadolast",
      title: "Cadolast",
      description:
        "A web application converting online articles into audio playlists using text-to-speech, offering an immersive, hands-free reading experience.",
      category: "Web Application & Accessibility",
      image: "../assets/images/projects/cadolast.png", // Replace with actual image path
      tags: ["Text-to-Speech", "Web App", "Accessibility", "Productivity"],
    },
    {
      id: "wisetoq",
      title: "WiseToq",
      description:
        "An advanced AI social media tool for TikTok, automating high-quality, contextually relevant comments based on video transcripts to boost engagement.",
      category: "AI Tool & Social Media",
      image: "../assets/images/projects/wisetoq.png", // Replace with actual image path
      tags: ["AI", "TikTok", "Social Media Marketing", "Engagement"],
    },
  ];

  const initialDisplayCount = 6;
  const [visibleProducts, setVisibleProducts] = React.useState<Product[]>(
    productsData.slice(0, initialDisplayCount)
  );
  const [showLoadMore, setShowLoadMore] = React.useState<boolean>(
    productsData.length > initialDisplayCount
  );

  const handleLoadMore = () => {
    const currentLength = visibleProducts.length;
    const nextProducts = productsData.slice(
      currentLength,
      currentLength + initialDisplayCount
    );
    setVisibleProducts([...visibleProducts, ...nextProducts]);
    if (currentLength + nextProducts.length >= productsData.length) {
      setShowLoadMore(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <HeroSection
        title="Our"
        highlightedTitle="Products"
        description="Explore our portfolio of innovative digital products and solutions we've developed to address diverse client needs across various industries."
        buttonText="Discuss Your Idea"
        buttonLink="/company/contact"
      />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          {productsData.find((p) => p.id === "diplomat-corner") && (
            <FeaturedProject
              title={
                productsData.find((p) => p.id === "diplomat-corner")!.title
              }
              description={
                productsData.find((p) => p.id === "diplomat-corner")!
                  .description
              }
              image={
                productsData.find((p) => p.id === "diplomat-corner")!.image
              }
              buttonText="Visit Diplomat Corner"
              buttonLink={
                productsData.find((p) => p.id === "diplomat-corner")!.url
              }
            />
          )}
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <ProjectsGrid
            projects={visibleProducts}
            showLoadMore={showLoadMore}
            onLoadMore={handleLoadMore}
            projectLinkPrefix="/products"
          />
        </div>
      </section>

      <CtaCard
        title="Ready to Build Your Next Product?"
        description="Let's collaborate to transform your vision into a successful digital product. Our experts are here to guide you every step of the way."
        buttonText="Get in Touch"
        buttonLink="#contact"
      />
    </div>
  );
}
