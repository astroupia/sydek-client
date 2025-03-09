"use client";

import type React from "react";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Tabs } from "@/components/ui/tabs";
import InteractiveBackground from "@/components/interactive-background";
import LoginForm from "@/components/auth/sign-in-form";
import SignupForm from "@/components/auth/sign-up-form";
import Sidebar from "@/components/auth/side-bar-comp";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AuthPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const defaultTab = searchParams.get("tab") || "login";
  const plan = searchParams.get("plan") || "starter";

  const [activeTab, setActiveTab] = useState(defaultTab);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    companyName: "",
    agreeTerms: false,
    agreeUpdates: false,
  });
  const [loginErrors, setLoginErrors] = useState<{ [key: string]: string }>({});
  const [signupErrors, setSignupErrors] = useState<{ [key: string]: string }>(
    {}
  );

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { [key: string]: string } = {};
    if (!loginData.email) errors.email = "Email is required";
    if (!loginData.password) errors.password = "Password is required";

    if (Object.keys(errors).length > 0) {
      setLoginErrors(errors);
      return;
    }
    setLoginErrors({});
    console.log("Login form submitted:", loginData);
    router.push("/dashboard");
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { [key: string]: string } = {};
    if (!signupData.firstName) errors.firstName = "First name is required";
    if (!signupData.lastName) errors.lastName = "Last name is required";
    if (!signupData.email) errors.email = "Email is required";
    if (!signupData.password) errors.password = "Password is required";
    if (!signupData.companyName)
      errors.companyName = "Company name is required";
    if (!signupData.agreeTerms)
      errors.agreeTerms = "You must agree to the terms";

    if (Object.keys(errors).length > 0) {
      setSignupErrors(errors);
      return;
    }
    setSignupErrors({});
    console.log("Signup form submitted:", signupData);
    router.push("/dashboard");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <InteractiveBackground
          className="absolute inset-0"
          particleCount={20}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-start gap-8 w-full">
            {/* Sidebar */}
            <div className="w-full lg:w-1/2 lg:flex-shrink-0">
              <Sidebar tab={activeTab} />
            </div>

            {/* Form Section */}
            <div className="w-full lg:w-1/2 lg:flex-shrink-0 flex flex-col items-center lg:items-start">
              <Link
                href="/"
                className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>

              <h1 className="text-3xl font-bold tracking-tight mb-6 text-center lg:text-left">
                {activeTab === "login" ? (
                  <>
                    Welcome <span className="text-gradient">Back</span>
                  </>
                ) : (
                  <>
                    Create Your <span className="text-gradient">Account</span>
                  </>
                )}
              </h1>

              <div className="w-full max-w-md">
                <Tabs
                  value={activeTab}
                  onValueChange={setActiveTab}
                  className="w-full"
                >
                  <LoginForm
                    loginData={loginData}
                    setLoginData={setLoginData}
                    errors={loginErrors}
                    onSubmit={handleLoginSubmit}
                  />
                  <SignupForm
                    signupData={signupData}
                    setSignupData={setSignupData}
                    errors={signupErrors}
                    onSubmit={handleSignupSubmit}
                    plan={plan}
                  />
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
