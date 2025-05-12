import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Benefit {
  icon: React.ElementType;
  text: string;
}

interface KeyBenefitsSectionProps {
  mainTitle: string;
  mainDescription: string;
  mainButtonText: string;
  mainButtonVariant?: "secondary" | "outline" | "default"; // Optional variant
  benefitsTitle: string;
  benefits: Benefit[];
}

const KeyBenefitsSection: React.FC<KeyBenefitsSectionProps> = ({
  mainTitle,
  mainDescription,
  mainButtonText,
  mainButtonVariant = "secondary",
  benefitsTitle,
  benefits,
}) => (
  <div className="container mx-auto px-4 md:px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      <Card className="animated-gradient text-white">
        <CardHeader>
          <CardTitle className="text-2xl">{mainTitle}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{mainDescription}</p>
        </CardContent>
        <CardFooter>
          <Button variant={mainButtonVariant}>{mainButtonText}</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{benefitsTitle}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {benefits.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                {React.createElement(item.icon, {
                  className: "h-5 w-5 text-secondary",
                })}
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  </div>
);

export default KeyBenefitsSection;
