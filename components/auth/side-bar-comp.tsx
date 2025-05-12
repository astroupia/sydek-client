import type React from "react";
import Link from "next/link";
import { Shield, Users, Zap, ArrowRight } from "lucide-react";

interface SidebarProps {
  tab: string;
}

const Sidebar: React.FC<SidebarProps> = ({ tab }) => {
  const renderSignupSidebar = () => (
    <div className="w-full h-full">
      <div className="bg-card rounded-xl border shadow-sm p-8 mb-6 relative overflow-hidden h-[calc(100%-2rem)]">
        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-tertiary/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <h3 className="text-2xl font-bold mb-4 relative z-10">
          Why Join Sydek?
        </h3>
        <div className="space-y-6 relative z-10">
          <div className="flex gap-4 items-start">
            <div className="bg-secondary/10 p-2 rounded-lg">
              <Users className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Collaborative Community</h4>
              <p className="text-muted-foreground text-sm">
                Join a thriving ecosystem of developers, designers, and digital
                innovators.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="bg-accent/10 p-2 rounded-lg">
              <Zap className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Cutting-Edge Tools</h4>
              <p className="text-muted-foreground text-sm">
                Access to advanced developer platforms and digital solutions.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="bg-tertiary/10 p-2 rounded-lg">
              <Shield className="h-6 w-6 text-tertiary" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Enterprise Security</h4>
              <p className="text-muted-foreground text-sm">
                Your data is protected with industry-leading security practices.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-secondary/10 to-accent/10 p-6 rounded-xl border relative overflow-hidden">
        <blockquote className="relative z-10">
          <p className="text-lg italic mb-4">
            "Sydek transformed our development process. Their platform has
            become essential to our workflow."
          </p>
          <footer className="font-medium">
            — Alex Johnson, CTO at TechVision
          </footer>
        </blockquote>
      </div>
    </div>
  );

  const renderLoginSidebar = () => (
    <div className="w-full h-full">
      <div className="bg-card rounded-xl border shadow-sm p-8 mb-6 relative overflow-hidden h-[calc(100%-2rem)]">
        <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>

        <h3 className="text-2xl font-bold mb-4 relative z-10">
          Platform Updates
        </h3>
        <div className="space-y-4 relative z-10">
          <div className="border-l-2 border-secondary pl-4 py-1">
            <span className="text-xs font-medium text-secondary bg-secondary/10 px-2 py-0.5 rounded-full mb-1 inline-block">
              NEW
            </span>
            <h4 className="font-medium mb-1">Enhanced Developer API</h4>
            <p className="text-muted-foreground text-sm">
              Faster request processing and additional endpoints for your
              applications.
            </p>
          </div>
          <div className="border-l-2 border-accent pl-4 py-1">
            <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full mb-1 inline-block">
              IMPROVED
            </span>
            <h4 className="font-medium mb-1">Dashboard Analytics</h4>
            <p className="text-muted-foreground text-sm">
              Comprehensive insights with customizable reporting tools.
            </p>
          </div>
          <div className="border-l-2 border-tertiary pl-4 py-1">
            <span className="text-xs font-medium text-tertiary bg-tertiary/10 px-2 py-0.5 rounded-full mb-1 inline-block">
              UPCOMING
            </span>
            <h4 className="font-medium mb-1">Collaboration Tools</h4>
            <p className="text-muted-foreground text-sm">
              Enhanced team features coming next month to improve productivity.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-accent/10 to-tertiary/10 p-6 rounded-xl border">
        <h4 className="font-semibold mb-3 flex items-center">
          <Shield className="h-5 w-5 mr-2 text-secondary" />
          Security Reminder
        </h4>
        <p className="text-sm text-muted-foreground mb-4">
          Ensure your account remains secure by regularly updating your password
          and enabling two-factor authentication in your profile settings.
        </p>
        <Link
          href="/account/security"
          className="text-secondary text-sm font-medium hover:underline inline-flex items-center"
        >
          Review Security Settings
          <ArrowRight className="ml-1 h-3 w-3" />
        </Link>
      </div>
    </div>
  );

  return (
    <div className="hidden lg:block w-full h-full">
      {tab === "signup" ? renderSignupSidebar() : renderLoginSidebar()}
    </div>
  );
};

export default Sidebar;
