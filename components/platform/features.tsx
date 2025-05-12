import type React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeaturesProps {
  title: string;
  features: Feature[];
  columns?: 1 | 2 | 3 | 4; // Number of columns for grid
}

const FeatureCard: React.FC<Feature> = ({ icon, title, description }) => (
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center">
        {icon}
        <span className="ml-2">{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p>{description}</p>
    </CardContent>
  </Card>
);

const Features: React.FC<FeaturesProps> = ({
  title,
  features,
  columns = 4,
}) => (
  <section className="py-20">
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        {title}
      </h2>
      <div
        className={`grid grid-cols-1 ${columns >= 2 ? "md:grid-cols-2" : ""} ${
          columns >= 3 ? "lg:grid-cols-3" : ""
        } ${columns === 4 ? "lg:grid-cols-4" : ""} gap-6`}
      >
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  </section>
);

export default Features;
