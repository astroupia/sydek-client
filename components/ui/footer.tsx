"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary via-accent to-tertiary">
              Sydek
            </h3>
            <p className="text-muted-foreground">
              Empowering businesses with innovative digital solutions.
            </p>
            <div className="flex space-x-4">
              {/* <Link
                href="#"
                className="text-muted-foreground hover:text-secondary"
              >
                <Twitter className="h-5 w-5" />
              </Link> */}

              <Link
                href="https://www.linkedin.com/company/sydekse/"
                className="text-muted-foreground hover:text-secondary"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/solutions/products"
                  className="text-muted-foreground hover:text-secondary"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/projects"
                  className="text-muted-foreground hover:text-secondary"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/company/about"
                  className="text-muted-foreground hover:text-secondary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/company/contact"
                  className="text-muted-foreground hover:text-secondary"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/company/partners"
                  className="text-muted-foreground hover:text-secondary"
                >
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/out-sourcing"
                  className="text-muted-foreground hover:text-secondary"
                >
                  Outsourcing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Sydek. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
