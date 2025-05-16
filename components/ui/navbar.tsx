"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Moon, Sun, ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  // {
  //   title: "Platform",
  //   submenu: {
  //     featured: [
  //       {
  //         title: "Client Platform",
  //         description: "Complete digital solution for managing your business",
  //         image: "/placeholder.svg?height=200&width=300",
  //         href: "/solutions/platform/client-digital-platform",
  //         color: "from-blue-500/20 to-purple-500/20",
  //       },
  //       {
  //         title: "Developer Platform",
  //         description: "Powerful tools and APIs for developers",
  //         image: "/placeholder.svg?height=200&width=300",
  //         href: "/solutions/platform/developer-platform",
  //         color: "from-emerald-500/20 to-cyan-500/20",
  //       },
  //     ],
  //     categories: [
  //       {
  //         title: "Core Features",
  //         items: [
  //           { title: "Project Management", href: "#" },
  //           { title: "Team Collaboration", href: "#" },
  //           { title: "Analytics Dashboard", href: "#" },
  //         ],
  //       },
  //       {
  //         title: "Integrations",
  //         items: [
  //           { title: "API Access", href: "#" },
  //           { title: "Webhooks", href: "#" },
  //           { title: "Custom Development", href: "#" },
  //         ],
  //       },
  //     ],
  //   },
  // },
  {
    title: "Solutions",
    submenu: {
      featured: [
        {
          title: "Custom Projects",
          description: "Scalable solutions for large organizations",
          image: "/placeholder.svg?height=200&width=300",
          href: "/solutions/products",
          color: "from-orange-500/20 to-red-500/20",
        },
        {
          title: "Our Products",
          description: "Tailored solutions for your unique needs",
          image: "/placeholder.svg?height=200&width=300",
          href: "/solutions/projects",
          color: "from-pink-500/20 to-rose-500/20",
        },
      ],
      categories: [
        // {
        //   title: "By Industry",
        //   items: [
        //     { title: "Healthcare", href: "#" },
        //     { title: "Finance", href: "#" },
        //     { title: "E-commerce", href: "#" },
        //   ],
        // },
        // {
        //   title: "Services",
        //   items: [
        //     { title: "Consulting", href: "/solutions/services" },
        //     { title: "Implementation", href: "#" },
        //     { title: "Support", href: "#" },
        //   ],
        // },
      ],
    },
  },
  // {
  //   title: "Resources",
  //   submenu: {
  //     featured: [
  //       {
  //         title: "Editorial Hub",
  //         description: "Insights and updates from our experts",
  //         image: "/placeholder.svg?height=200&width=300",
  //         href: "/resources/editorial",
  //         color: "from-violet-500/20 to-indigo-500/20",
  //       },
  //       {
  //         title: "Documentation",
  //         description: "Comprehensive guides and references",
  //         image: "/placeholder.svg?height=200&width=300",
  //         href: "/resources/docs",
  //         color: "from-teal-500/20 to-emerald-500/20",
  //       },
  //     ],
  //     categories: [
  //       {
  //         title: "Learn",
  //         items: [
  //           { title: "Getting Started", href: "#" },
  //           { title: "Tutorials", href: "#" },
  //           { title: "Case Studies", href: "#" },
  //         ],
  //       },
  //       {
  //         title: "Support",
  //         items: [
  //           { title: "Help Center", href: "#" },
  //           { title: "Community", href: "#" },
  //           { title: "Status", href: "#" },
  //         ],
  //       },
  //     ],
  //   },
  // },
  {
    title: "Company",
    submenu: {
      featured: [
        {
          title: "About Us",
          description: "Our story, mission, and values",
          image: "/placeholder.svg?height=200&width=300",
          href: "/company/about",
          color: "from-blue-500/20 to-sky-500/20",
        },
        {
          title: "Contact Us",
          description: "Start Growing with Us!",
          image: "/placeholder.svg?height=200&width=300",
          href: "/company/contact",
          color: "from-green-500/20 to-emerald-500/20",
        },
      ],
      categories: [
        {
          title: "Connect",
          items: [{ title: "Partners", href: "/company/partners" }],
        },
        {
          title: "Legal",
          items: [
            { title: "Privacy", href: "/privacy" },
            { title: "Terms", href: "/terms" },
          ],
        },
      ],
    },
  },
  {
    title: "Out Sourcing",
    submenu: {
      featured: [
        {
          title: "Out Sourcing",
          description: "Out Sourcing",
          image: "/placeholder.svg?height=200&width=300",
          href: "/out-sourcing",
          color: "from-blue-500/20 to-sky-500/20",
        },
      ],
      categories: [
        {
          title: "Out Sourcing",
          items: [{ title: "Out Sourcing", href: "/out-sourcing" }],
        },
      ],
    },
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close submenu when pathname changes (navigation occurs)
  useEffect(() => {
    setIsOpen(false);
    setOpenSubmenu(null);
  }, [pathname]);

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b"
          : "bg-transparent"
      )}
    >
      <div
        className="container mx-auto px-4 md:px-6 py-4"
        style={{ "--navbar-height": "4rem" } as React.CSSProperties}
      >
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2"
            onClick={closeMenu}
          >
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary via-accent to-tertiary text-gradient tracking-tight">
              Sydek
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.title} className="group">
                <button
                  className="flex items-center space-x-1 text-sm font-medium hover:text-secondary transition-colors"
                  onClick={() => toggleSubmenu(item.title)}
                >
                  <span>{item.title}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>

                <div
                  className={cn(
                    "fixed left-1/2 -translate-x-1/2 mt-2 w-[clamp(300px,90vw,800px)] rounded-xl shadow-lg bg-card border opacity-0 invisible transition-all duration-200 z-50",
                    openSubmenu === item.title ? "opacity-100 visible" : "",
                    "group-hover:opacity-100 group-hover:visible"
                  )}
                  style={{ top: "var(--navbar-height, 4rem)" }}
                >
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-6 mb-6">
                      {item.submenu.featured.map((feature, index) => (
                        <Link
                          key={index}
                          href={feature.href}
                          className="group/item relative overflow-hidden rounded-lg border p-3 hover:border-secondary/50 transition-colors"
                          onClick={closeMenu}
                        >
                          <div className="relative aspect-[2/1] overflow-hidden rounded-lg mb-3">
                            <div
                              className={cn(
                                "absolute inset-0 bg-gradient-to-br opacity-20 transition-opacity group-hover/item:opacity-30",
                                feature.color
                              )}
                            />
                            <Image
                              src={feature.image || "/placeholder.svg"}
                              alt={feature.title}
                              fill
                              className="object-cover transition-transform group-hover/item:scale-105"
                            />
                          </div>
                          <h3 className="font-semibold mb-1 group-hover/item:text-secondary transition-colors">
                            {feature.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {feature.description}
                          </p>
                        </Link>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-6 border-t pt-6">
                      {item.submenu.categories.map((category, index) => (
                        <div key={index}>
                          <h3 className="font-semibold mb-2 text-sm text-muted-foreground">
                            {category.title}
                          </h3>
                          <ul className="space-y-2">
                            {category.items.map((subitem, subindex) => (
                              <li key={subindex}>
                                <Link
                                  href={subitem.href}
                                  className="text-sm hover:text-secondary flex items-center group/link"
                                  onClick={closeMenu}
                                >
                                  {subitem.title}
                                  <ArrowRight className="h-3 w-3 ml-1 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Link href="/auth">
              <Button className="hidden md:inline-flex bg-secondary hover:bg-secondary/90 text-white">
                Start Growing
              </Button>
            </Link>

            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.title} className="flex flex-col">
                  <button
                    className="flex items-center justify-between py-2 text-sm font-medium"
                    onClick={() => toggleSubmenu(item.title)}
                  >
                    <span>{item.title}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        openSubmenu === item.title ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openSubmenu === item.title && (
                    <div className="ml-4 mt-2 flex flex-col space-y-2 border-l pl-4">
                      {item.submenu.featured.map((feature, index) => (
                        <Link
                          key={index}
                          href={feature.href}
                          className="py-2 text-sm hover:text-secondary transition-colors"
                          onClick={closeMenu}
                        >
                          {feature.title}
                        </Link>
                      ))}
                      {item.submenu.categories.map((category) =>
                        category.items.map((subitem, index) => (
                          <Link
                            key={index}
                            href={subitem.href}
                            className="py-2 text-sm hover:text-secondary transition-colors"
                            onClick={closeMenu}
                          >
                            {subitem.title}
                          </Link>
                        ))
                      )}
                    </div>
                  )}
                </div>
              ))}
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-white mt-4">
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
