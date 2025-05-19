import React from "react";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { config } from "../lib/config";
import "@/styles/global.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Sydek",
  description:
    "A forward-thinking digital services company committed to helping businesses and individuals succeed in the digital world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} font-sans font-thin antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            {config.underMaintenance ? (
              <div className="flex-1">
                <MaintenancePage />
              </div>
            ) : (
              children
            )}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

// Import the Maintenance component dynamically to avoid loading it when not needed
const MaintenancePage = React.lazy(
  () => import("@/components/shared/maintenance")
);
