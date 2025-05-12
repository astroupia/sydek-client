import React from "react";
import { Button } from "@/components/ui/button";
import ProjectCard, { ProjectCardProps } from "./project-card";

export interface ProjectsGridProps {
  projects: Omit<ProjectCardProps, 'link'>[];
  showLoadMore?: boolean;
  onLoadMore?: () => void;
  projectLinkPrefix?: string;
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({
  projects,
  showLoadMore = true,
  onLoadMore,
  projectLinkPrefix = "#",
}) => {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            {...project}
            link={`${projectLinkPrefix}/${project.id}`}
          />
        ))}
      </div>

      {showLoadMore && (
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" onClick={onLoadMore}>
            Load More Projects
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProjectsGrid;