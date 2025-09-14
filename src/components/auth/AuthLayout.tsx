import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="flex min-h-screen">
        {/* Left side - Branding */}
        <div className="hidden lg:flex lg:flex-1 lg:flex-col lg:justify-center lg:px-12 xl:px-24">
          <div className="max-w-md">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">OS</span>
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                MyOS
              </span>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Your Personal Operating System
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Streamline your digital life with intelligent chat, journaling, and productivity tools 
              designed to enhance your daily workflow.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-muted-foreground">Secure & Private</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">AI-Powered</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-warning rounded-full"></div>
                <span className="text-muted-foreground">Real-time Sync</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
                <span className="text-muted-foreground">Cross-platform</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Auth form */}
        <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-card/50 backdrop-blur-sm">
          <div className="mx-auto w-full max-w-md">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground">{title}</h2>
              {subtitle && (
                <p className="mt-2 text-muted-foreground">{subtitle}</p>
              )}
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}