import type React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface PlatformTab {
  value: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
}

interface PlatformOverviewProps {
  title: string;
  tabs: PlatformTab[];
  defaultTab?: string; // Optional default tab value
  columns?: 1 | 2 | 3 | 4; // Number of columns for TabsList
}

const PlatformOverview: React.FC<PlatformOverviewProps> = ({
  title,
  tabs,
  defaultTab = tabs[0]?.value,
  columns = 4,
}) => (
  <section className="py-20 bg-muted/30">
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        {title}
      </h2>
      <Tabs defaultValue={defaultTab} className="w-full">
        <TabsList
          className={`grid w-full grid-cols-1 ${
            columns >= 2 ? "md:grid-cols-2" : ""
          } ${columns >= 3 ? "md:grid-cols-3" : ""} ${
            columns === 4 ? "md:grid-cols-4" : ""
          }`}
        >
          {tabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            <Card>
              <CardHeader>
                <CardTitle>{tab.title}</CardTitle>
                <CardDescription>{tab.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={tab.imageSrc}
                  width={tab.imageWidth || 600}
                  height={tab.imageHeight || 100}
                  alt={tab.imageAlt}
                  className="rounded-lg w-full h-auto"
                />
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  </section>
);

export default PlatformOverview;
