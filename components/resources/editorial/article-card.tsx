import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface ArticleCardProps {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  slug?: string; // Optional slug for linking to article detail page
}

export default function ArticleCard({ id, title, excerpt, date, category, image, slug }: ArticleCardProps) {
  return (
    <div
      className="group relative bg-card rounded-2xl overflow-hidden border hover:shadow-lg transition-all duration-300"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary to-accent rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity"></div>
      <div className="relative">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={600}
            height={400}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 bg-secondary/90 text-white text-xs font-medium px-2 py-1 rounded-full">
            {category}
          </div>
        </div>
        <div className="p-6">
          <p className="text-sm text-muted-foreground mb-2">{date}</p>
          <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground mb-4">{excerpt}</p>
          <Link href={slug ? `/resources/editorial/${slug}` : "#"} className="inline-flex items-center text-secondary hover:underline">
            Read more
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}