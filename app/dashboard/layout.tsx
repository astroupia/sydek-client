"use client";

import { useState } from "react";
import type React from "react";
import { Manrope } from "next/font/google";
import "@/styles/global.css";
import { ThemeProvider } from "@/components/theme-provider";
import { DashboardSidebar } from "@/components/ui/dashboard-sidebar";
import { DashboardHeader } from "@/components/ui/dashboard-header";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} font-sans font-light antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex h-screen overflow-hidden">
            <div className="hidden md:block">
              <DashboardSidebar collapsed={sidebarCollapsed} />
            </div>
            <div className="flex-1 flex flex-col overflow-hidden">
              <DashboardHeader onToggleSidebar={toggleSidebar} />
              <main className="flex-1 overflow-auto">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
