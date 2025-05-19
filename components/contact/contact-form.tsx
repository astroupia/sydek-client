"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronRight, Loader2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { NotificationDialog } from "@/components/ui/notification-dialog";

interface ContactFormProps {
  onSubmit?: (formData: any) => void;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gmailEmail: "",
    subject: "",
    message: "",
    inquiryType: {
      generalInquiry: false,
      outsourcing: false,
      partnership: false,
      bookMeeting: false,
    },
    entityType: "individual", // "individual" or "company"
    // Company specific fields
    companyEmployees: "",
    companyIndustry: "",
    companyDomain: "",
    // Individual specific fields
    portfolioLink: "",
    portfolioType: "website", // "website", "linkedin", "instagram", "twitter"
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState<{
    isOpen: boolean;
    type: "success" | "error";
    title: string;
    message: string;
  }>({
    isOpen: false,
    type: "success",
    title: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      inquiryType: {
        ...prev.inquiryType,
        [name]: checked,
      },
    }));
  };

  const handleEntityTypeChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      entityType: value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      gmailEmail: "",
      subject: "",
      message: "",
      inquiryType: {
        generalInquiry: false,
        outsourcing: false,
        partnership: false,
        bookMeeting: false,
      },
      entityType: "individual",
      companyEmployees: "",
      companyIndustry: "",
      companyDomain: "",
      portfolioLink: "",
      portfolioType: "website",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error(
            "Too many requests. Please try again in a few seconds."
          );
        }
        throw new Error(data.error || "Failed to send message");
      }

      resetForm();
      setNotification({
        isOpen: true,
        type: "success",
        title: "Message Sent",
        message: "Thank you for contacting us. We'll get back to you soon!",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      setNotification({
        isOpen: true,
        type: "error",
        title: "Error",
        message:
          error instanceof Error
            ? error.message
            : "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative">
      <div className="absolute -inset-1.5 animated-gradient rounded-2xl blur opacity-10"></div>
      <div className="relative bg-card rounded-2xl p-8 border shadow-xl backdrop-blur-sm">
        <h2 className="text-2xl font-bold mb-8 flex items-center">
          <span className="bg-secondary/10 p-2 rounded-full mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-secondary"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </span>
          Send a Message
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div
            className={cn(
              "transition-all duration-300 rounded-lg",
              focusedField === "name" ? "bg-secondary/5 p-3 -mx-3" : ""
            )}
          >
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Your Name
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField(null)}
              placeholder="John Doe"
              required
              className="border-secondary/20 focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-300"
            />
          </div>

          <div
            className={cn(
              "transition-all duration-300 rounded-lg",
              focusedField === "email" ? "bg-secondary/5 p-3 -mx-3" : ""
            )}
          >
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Your Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              placeholder="john@example.com"
              required
              className="border-secondary/20 focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-300"
            />
          </div>

          <div
            className={cn(
              "transition-all duration-300 rounded-lg",
              focusedField === "gmailEmail" ? "bg-secondary/5 p-3 -mx-3" : ""
            )}
          >
            <label
              htmlFor="gmailEmail"
              className="block text-sm font-medium mb-2"
            >
              Gmail Address (Optional)
            </label>
            <Input
              id="gmailEmail"
              name="gmailEmail"
              type="email"
              value={formData.gmailEmail}
              onChange={handleChange}
              onFocus={() => setFocusedField("gmailEmail")}
              onBlur={() => setFocusedField(null)}
              placeholder="john@gmail.com"
              className="border-secondary/20 focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-300"
            />
          </div>

          <div className="bg-secondary/5 p-4 rounded-xl">
            <label className="block text-sm font-medium mb-3">
              Inquiry Type
            </label>
            <div className="grid grid-cols-2 gap-4">
              {[
                { id: "generalInquiry", label: "General Inquiry" },
                { id: "outsourcing", label: "Outsourcing" },
                { id: "partnership", label: "Partnership" },
                { id: "bookMeeting", label: "Book a Meeting" },
              ].map((item) => (
                <div key={item.id} className="flex items-center space-x-2">
                  <div className="relative flex items-center">
                    <Checkbox
                      id={item.id}
                      checked={
                        formData.inquiryType[
                          item.id as keyof typeof formData.inquiryType
                        ]
                      }
                      onCheckedChange={(checked) =>
                        handleCheckboxChange(item.id, checked as boolean)
                      }
                      className="h-5 w-5 border-2 border-secondary/30 data-[state=checked]:bg-secondary data-[state=checked]:border-secondary rounded-md transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-secondary/10 scale-0 rounded-full data-[state=checked]:scale-150 opacity-0 data-[state=checked]:opacity-100 transition-all duration-300 pointer-events-none" />
                  </div>
                  <Label
                    htmlFor={item.id}
                    className={cn(
                      "font-medium transition-colors duration-300",
                      formData.inquiryType[
                        item.id as keyof typeof formData.inquiryType
                      ]
                        ? "text-secondary"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-secondary/5 p-4 rounded-xl">
            <label className="block text-sm font-medium mb-3">You are a:</label>
            <RadioGroup
              value={formData.entityType}
              onValueChange={handleEntityTypeChange}
              className="flex space-x-6"
            >
              {[
                { value: "individual", label: "Individual" },
                { value: "company", label: "Company" },
              ].map((item) => (
                <div
                  key={item.value}
                  className="flex items-center space-x-2 group"
                >
                  <div className="relative">
                    <RadioGroupItem
                      value={item.value}
                      id={item.value}
                      className="h-5 w-5 border-2 border-secondary/30 text-secondary transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-secondary/10 scale-0 rounded-full data-[state=checked]:scale-150 opacity-0 data-[state=checked]:opacity-100 transition-all duration-300 pointer-events-none" />
                  </div>
                  <Label
                    htmlFor={item.value}
                    className={cn(
                      "font-medium transition-colors duration-300",
                      formData.entityType === item.value
                        ? "text-secondary"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {formData.entityType === "company" && (
            <div className="space-y-4 border-l-2 border-secondary pl-4 py-2 animate-fadeIn">
              <div
                className={cn(
                  "transition-all duration-300 rounded-lg",
                  focusedField === "companyEmployees"
                    ? "bg-secondary/5 p-3 -mx-3"
                    : ""
                )}
              >
                <label
                  htmlFor="companyEmployees"
                  className="block text-sm font-medium mb-2"
                >
                  Number of Employees
                </label>
                <Select
                  value={formData.companyEmployees}
                  onValueChange={(value) =>
                    handleSelectChange("companyEmployees", value)
                  }
                  onOpenChange={(open) =>
                    setFocusedField(open ? "companyEmployees" : null)
                  }
                >
                  <SelectTrigger className="border-secondary/20 focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-300">
                    <SelectValue placeholder="Select company size" />
                  </SelectTrigger>
                  <SelectContent className="border-secondary/20">
                    <SelectItem value="1-10">1-10</SelectItem>
                    <SelectItem value="11-50">11-50</SelectItem>
                    <SelectItem value="51-200">51-200</SelectItem>
                    <SelectItem value="201-500">201-500</SelectItem>
                    <SelectItem value="501+">501+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div
                className={cn(
                  "transition-all duration-300 rounded-lg",
                  focusedField === "companyIndustry"
                    ? "bg-secondary/5 p-3 -mx-3"
                    : ""
                )}
              >
                <label
                  htmlFor="companyIndustry"
                  className="block text-sm font-medium mb-2"
                >
                  Industry
                </label>
                <Input
                  id="companyIndustry"
                  name="companyIndustry"
                  value={formData.companyIndustry}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("companyIndustry")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="e.g. Technology, Healthcare, Finance"
                  required={formData.entityType === "company"}
                  className="border-secondary/20 focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-300"
                />
              </div>
              <div
                className={cn(
                  "transition-all duration-300 rounded-lg",
                  focusedField === "companyDomain"
                    ? "bg-secondary/5 p-3 -mx-3"
                    : ""
                )}
              >
                <label
                  htmlFor="companyDomain"
                  className="block text-sm font-medium mb-2"
                >
                  Company Website
                </label>
                <Input
                  id="companyDomain"
                  name="companyDomain"
                  value={formData.companyDomain}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("companyDomain")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="e.g. company.com"
                  required={formData.entityType === "company"}
                  className="border-secondary/20 focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-300"
                />
              </div>
            </div>
          )}

          {formData.entityType === "individual" && (
            <div className="space-y-4 border-l-2 border-secondary pl-4 py-2 animate-fadeIn">
              <div
                className={cn(
                  "transition-all duration-300 rounded-lg",
                  focusedField === "portfolioLink"
                    ? "bg-secondary/5 p-3 -mx-3"
                    : ""
                )}
              >
                <label className="block text-sm font-medium mb-2">
                  Portfolio/Profile Link (Optional)
                </label>
                <div className="flex space-x-2">
                  <Select
                    value={formData.portfolioType}
                    onValueChange={(value) =>
                      handleSelectChange("portfolioType", value)
                    }
                    onOpenChange={(open) =>
                      setFocusedField(open ? "portfolioLink" : null)
                    }
                  >
                    <SelectTrigger className="w-1/3 border-secondary/20 focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-300">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="border-secondary/20">
                      <SelectItem value="website">Website</SelectItem>
                      <SelectItem value="linkedin">LinkedIn</SelectItem>
                      <SelectItem value="instagram">Instagram</SelectItem>
                      <SelectItem value="twitter">Twitter</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    id="portfolioLink"
                    name="portfolioLink"
                    value={formData.portfolioLink}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("portfolioLink")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Enter your link here"
                    className="w-2/3 border-secondary/20 focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-300"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Share a link to your work or profile (optional)
                </p>
              </div>
            </div>
          )}

          <div
            className={cn(
              "transition-all duration-300 rounded-lg",
              focusedField === "subject" ? "bg-secondary/5 p-3 -mx-3" : ""
            )}
          >
            <label htmlFor="subject" className="block text-sm font-medium mb-2">
              Subject
            </label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onFocus={() => setFocusedField("subject")}
              onBlur={() => setFocusedField(null)}
              placeholder="How can we help?"
              required
              className="border-secondary/20 focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-300"
            />
          </div>
          <div
            className={cn(
              "transition-all duration-300 rounded-lg",
              focusedField === "message" ? "bg-secondary/5 p-3 -mx-3" : ""
            )}
          >
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              placeholder="Your message here..."
              rows={5}
              required
              className="border-secondary/20 focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-300"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-secondary to-tertiary hover:opacity-90 text-white transition-all duration-300 shadow-lg hover:shadow-xl group"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <span className="mr-2">Send Message</span>
                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </>
            )}
          </Button>
        </form>
      </div>

      <NotificationDialog
        isOpen={notification.isOpen}
        onClose={() => setNotification((prev) => ({ ...prev, isOpen: false }))}
        type={notification.type}
        title={notification.title}
        message={notification.message}
      />
    </div>
  );
}
