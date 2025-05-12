import type React from "react";
import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Lock, ArrowRight, User, Building, Check } from "lucide-react";
import Link from "next/link";

interface SignupFormProps {
  signupData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    companyName: string;
    agreeTerms: boolean;
    agreeUpdates: boolean;
  };
  setSignupData: React.Dispatch<
    React.SetStateAction<SignupFormProps["signupData"]>
  >;
  errors: { [key: string]: string };
  onSubmit: (e: React.FormEvent) => void;
  plan: string;
}

const SignupForm: React.FC<SignupFormProps> = ({
  signupData,
  setSignupData,
  errors,
  onSubmit,
  plan,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setSignupData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const isPlanBased = (plan: string) =>
    ["starter", "pro", "enterprise"].includes(plan);
  const getPlanName = (plan: string) =>
    ({
      starter: "Starter",
      pro: "Professional",
      enterprise: "Enterprise",
    }[plan] || "Starter");
  const getPlanDescription = (plan: string) =>
    ({
      starter: "Perfect for small teams and startups",
      pro: "Advanced features for growing businesses",
      enterprise: "Custom solutions for large organizations",
    }[plan] || "Perfect for small teams and startups");

  return (
    <>
      <TabsContent value="signup" className="mt-0">
        <div className="bg-card rounded-xl border shadow-sm p-6">
          {isPlanBased(plan) && (
            <div className="mb-6 p-4 bg-secondary/10 rounded-lg">
              <h2 className="font-semibold flex items-center text-secondary">
                <Check className="h-5 w-5 mr-2" />
                {getPlanName(plan)} Plan Selected
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                {getPlanDescription(plan)}
              </p>
            </div>
          )}

          <form onSubmit={onSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    className="pl-10"
                    value={signupData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                {errors.firstName && (
                  <p className="text-xs text-red-500">{errors.firstName}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    className="pl-10"
                    value={signupData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                {errors.lastName && (
                  <p className="text-xs text-red-500">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <Label htmlFor="signup-email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="signup-email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className="pl-10"
                  value={signupData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2 mb-4">
              <Label htmlFor="signup-password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="signup-password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  className="pl-10"
                  value={signupData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Password must be at least 8 characters long and include a number
                and a special character.
              </p>
              {errors.password && (
                <p className="text-xs text-red-500">{errors.password}</p>
              )}
            </div>

            <div className="space-y-2 mb-4">
              <Label htmlFor="companyName">Company Name</Label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="companyName"
                  name="companyName"
                  placeholder="Acme Inc."
                  className="pl-10"
                  value={signupData.companyName}
                  onChange={handleChange}
                  required
                />
              </div>
              {errors.companyName && (
                <p className="text-xs text-red-500">{errors.companyName}</p>
              )}
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="agreeTerms"
                  name="agreeTerms"
                  checked={signupData.agreeTerms}
                  onCheckedChange={(checked) =>
                    setSignupData((prev) => ({
                      ...prev,
                      agreeTerms: !!checked,
                    }))
                  }
                />
                <Label
                  htmlFor="agreeTerms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="text-secondary hover:underline"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-secondary hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </Label>
              </div>
              {errors.agreeTerms && (
                <p className="text-xs text-red-500">{errors.agreeTerms}</p>
              )}

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="agreeUpdates"
                  name="agreeUpdates"
                  checked={signupData.agreeUpdates}
                  onCheckedChange={(checked) =>
                    setSignupData((prev) => ({
                      ...prev,
                      agreeUpdates: !!checked,
                    }))
                  }
                />
                <Label
                  htmlFor="agreeUpdates"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Send me product updates and offers
                </Label>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-secondary hover:bg-secondary/90"
            >
              Create Account
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </TabsContent>
    </>
  );
};

export default SignupForm;
