"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ApplicationForm } from "@/components/careers/application-form";
import { use } from "react";

export default function JobApplicationPage({
  params,
}: {
  params: Promise<{ job: string }>; // Type params as a Promise
}) {
  const { job } = use(params); // Unwrap params with use()
  const jobTitle = job
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(95,31,95,0.2),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(187,173,213,0.2),transparent_60%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/company/careers"
              className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Careers
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Apply for <span className="text-gradient">{jobTitle}</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              We're excited about your interest in joining our team. Please
              complete the application form below.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ApplicationForm jobTitle={jobTitle} />
            </div>

            <div className="space-y-8">
              <div className="bg-background rounded-xl border p-6">
                <h3 className="text-xl font-semibold mb-4">
                  About This Position
                </h3>
                <p className="text-muted-foreground mb-4">
                  You're applying for the{" "}
                  <span className="font-medium text-foreground">
                    {jobTitle}
                  </span>{" "}
                  position at Sydek.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Competitive Salary</p>
                      <p className="text-sm text-muted-foreground">
                        We offer above-market compensation
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Flexible Work</p>
                      <p className="text-sm text-muted-foreground">
                        Remote and hybrid options available
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Growth Opportunities</p>
                      <p className="text-sm text-muted-foreground">
                        Clear path for advancement
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Comprehensive Benefits</p>
                      <p className="text-sm text-muted-foreground">
                        Health, retirement, and more
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 rounded-xl p-6 border">
                <h3 className="text-xl font-semibold mb-4">Application Tips</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Tailor your resume to highlight relevant experience</li>
                  <li>
                    • Be specific about your achievements in your cover letter
                  </li>
                  <li>
                    • Provide concrete examples of your skills and expertise
                  </li>
                  <li>• Double-check all information before submitting</li>
                  <li>
                    • Follow up if you haven't heard back within two weeks
                  </li>
                </ul>
              </div>

              <div className="bg-secondary/10 rounded-xl p-6 border border-secondary/20">
                <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about the application process or the
                  position, please don't hesitate to contact us.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/company/contact">Contact Recruiting Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
