import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  category,
  image,
  link = "#",
}) => {
  return (
    <div className="group relative bg-card rounded-2xl overflow-hidden border hover:shadow-lg transition-all duration-300">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary to-accent rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity"></div>
      <div className="relative">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={800}
            height={600}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 bg-secondary/90 text-white text-xs font-medium px-2 py-1 rounded-full">
            {category}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <Link
            href={link}
            className="inline-flex items-center text-secondary hover:underline"
          >
            View Project
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
