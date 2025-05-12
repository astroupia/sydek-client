import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";

export interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
  price?: string;
  features?: string[];
  ctaLabel?: string;
  onCtaClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  imageUrl,
  price,
  features = [],
  ctaLabel = "Learn More",
  onCtaClick,
}) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        {price && <p className="text-xl font-semibold text-primary">{price}</p>}
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
        {features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
        <Button onClick={onCtaClick} className="w-full">
          {ctaLabel}
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
