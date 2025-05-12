export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  link?: string;
}

export interface FeaturedProject {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink?: string;
  label?: string;
}