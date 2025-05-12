import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export interface FeaturedProjectProps {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink?: string;
  label?: string;
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  title,
  description,
  image,
  buttonText,
  buttonLink = "#",
  label = "Featured Project",
}) => {
  return (
    <div className="relative rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-secondary via-accent to-tertiary opacity-90"></div>
      <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-12 text-white">
        <div className="flex flex-col justify-center">
          <span className="text-sm font-medium mb-2 opacity-80">{label}</span>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
          <p className="mb-6 opacity-90">{description}</p>
          <Button
            className="bg-white text-secondary hover:bg-white/90 w-fit"
            asChild
          >
            <a href={buttonLink}>
              {buttonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
        <div className="relative rounded-xl overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
