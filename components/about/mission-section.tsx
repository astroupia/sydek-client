import Image from "next/image";

interface MissionSectionProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string[];
}

export function MissionSection({
  imageSrc,
  imageAlt,
  title,
  description,
}: MissionSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-secondary to-accent rounded-2xl blur opacity-20"></div>
            <div className="relative rounded-2xl overflow-hidden border shadow-xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">{title}</h2>
            {description.map((paragraph, index) => (
              <p
                key={`paragraph-${index}`}
                className="text-lg text-muted-foreground mb-6 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}