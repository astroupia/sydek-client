import Image from "next/image";
import { AnimatedCarousel } from "@/components/animated-carousel";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface CarouselItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface TeamSectionProps {
  title: string;
  subtitle: string;
  carouselItems: CarouselItem[];
  teamMembers: TeamMember[];
}

export function TeamSection({
  title,
  subtitle,
  carouselItems,
  teamMembers,
}: TeamSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title} <span className="text-gradient">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">{subtitle}</p>

          <AnimatedCarousel
            items={carouselItems}
            aspectRatio="video"
            className="max-w-4xl mx-auto shadow-xl border mb-12"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg border bg-background">
              <div className="aspect-square overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}