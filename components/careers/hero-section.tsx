import React from "react";
import type { HeroSectionProps } from "@/types/hero";

export function HeroSection({
  title,
  subtitle,
  gradientClassName = "text-gradient",
  highlightedWord,
}: HeroSectionProps) {
  const titleParts = highlightedWord
    ? title.split(highlightedWord).map((part, i) =>
        i === 0 ? (
          <span key={`part-${i}`}>{part}</span>
        ) : (
          <React.Fragment key={`fragment-${i}`}>
            <span key={`highlight-${i}`} className={gradientClassName}>
              {highlightedWord}
            </span>
            <span key={`part-${i}`}>{part}</span>
          </React.Fragment>
        )
      )
    : [<span key="title">{title}</span>];

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(95,31,95,0.2),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(187,173,213,0.2),transparent_60%)]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            {titleParts}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
