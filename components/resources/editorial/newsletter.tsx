"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export interface NewsletterProps {
  title?: string;
  description?: string;
  inputPlaceholder?: string;
  buttonText?: string;
  onSubscribe?: (email: string) => void;
}

const Newsletter: React.FC<NewsletterProps> = ({
  title = "Stay Updated",
  description = "Subscribe to our newsletter to receive the latest insights and updates.",
  inputPlaceholder = "Enter your email",
  buttonText = "Subscribe",
  onSubscribe,
}) => {
  const [email, setEmail] = useState<string>("");

  const handleSubscribe = () => {
    if (onSubscribe && email.trim()) {
      onSubscribe(email.trim());
      setEmail("");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubscribe();
    }
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground mb-8">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              inputMode="email"
              placeholder={inputPlaceholder}
              className="flex-1"
              value={email}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
            />
            <Button
              className="bg-secondary hover:bg-secondary/90 text-white"
              onClick={handleSubscribe}
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
