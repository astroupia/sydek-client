import type React from "react";
import { Button } from "@/components/ui/button";
import InteractiveBackground from "@/components/interactive-background";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps { 
  title: string;
  highlightedTitle?: string; // Optional part of title with gradient
  description: string;
  buttonText?: string;
  buttonLink?: string; // Optional link for routing
  onButtonClick?: () => void; // Optional click handler
  backgroundParticles?: number; // Customize InteractiveBackground
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  highlightedTitle,
  description,
  buttonText,
  buttonLink,
  onButtonClick,
  backgroundParticles = 20,
}) => (
  <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
    <InteractiveBackground
      className="absolute inset-0"
      particleCount={backgroundParticles}
    />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(95,31,95,0.2),transparent_60%)]"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(187,173,213,0.2),transparent_60%)]"></div>
    <div className="container relative z-10 mx-auto px-4 md:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {title}{" "}
          {highlightedTitle && (
            <span className="text-gradient">{highlightedTitle}</span>
          )}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          {description}
        </p>
        {buttonText && (
          <Button
          size="lg"
          className="bg-secondary hover:bg-secondary/90 text-white"
          onClick={onButtonClick}
          asChild={!!buttonLink} // Use asChild for Link wrapping
        >
          {buttonLink ? (
            <a href={buttonLink}>
              {buttonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          ) : (
            <>
              {buttonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
        )}
        
      </div>
    </div>
  </section>
);

export default HeroSection;
