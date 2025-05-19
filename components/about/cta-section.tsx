import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CTASectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export function CTASection({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
}: CTASectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground mb-8">{description}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/company/contact">
              <Button className="bg-secondary hover:bg-secondary/90 text-white">
                {primaryButtonText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            {/* <Button variant="outline" onClick={onSecondaryClick}>
              {secondaryButtonText}
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
