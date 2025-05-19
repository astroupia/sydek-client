import type React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CtaCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonVariant?: "default" | "outline" | "secondary" | "ghost" | "link"; // Optional button style
  buttonLink?: string; // Optional link for routing
  onButtonClick?: () => void; // Optional click handler
  backgroundClass?: string; // Optional custom background class
}

const CtaCard: React.FC<CtaCardProps> = ({
  title,
  description,
  buttonText,
  buttonVariant = "outline",
  buttonLink,
  onButtonClick,
  backgroundClass = "bg-secondary",
}) => (
  <section className={`py-20 ${backgroundClass} text-white`}>
    <div className="container mx-auto px-4 md:px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
      <p className="text-xl mb-8">{description}</p>
      <Button
        size="lg"
        variant={buttonVariant}
        className={
          buttonVariant === "outline"
            ? "bg-secondary border-white text-white hover:bg-white hover:text-secondary"
            : ""
        }
        onClick={onButtonClick}
        asChild={!!buttonLink}
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
    </div>
  </section>
);

export default CtaCard;
