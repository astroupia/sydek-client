import type React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  name: string;
  company: string;
  quote: string;
}

interface TestimonialProps {
  title: string;
  testimonials: Testimonial[];
  columns?: 1 | 2 | 3 | 4; // Number of columns for grid
  backgroundClass?: string; // Optional background class
}

const TestimonialCard: React.FC<Testimonial> = ({ name, company, quote }) => (
  <Card>
    <CardContent className="pt-6">
      <p className="italic mb-4">"{quote}"</p>
      <p className="font-semibold">{name}</p>
      <p className="text-sm text-muted-foreground">{company}</p>
    </CardContent>
  </Card>
);

const Testimonial: React.FC<TestimonialProps> = ({
  title,
  testimonials,
  columns = 3,
  backgroundClass = "",
}) => (
  <section className={`py-20 ${backgroundClass}`}>
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        {title}
      </h2>
      <div
        className={`grid grid-cols-1 ${columns >= 2 ? "md:grid-cols-2" : ""} ${
          columns >= 3 ? "lg:grid-cols-3" : ""
        } ${columns === 4 ? "lg:grid-cols-4" : ""} gap-6`}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  </section>
);

export default Testimonial;
