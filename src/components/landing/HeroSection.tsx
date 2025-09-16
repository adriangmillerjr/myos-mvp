import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 bg-gradient-to-br from-background via-background to-muted/10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary/20">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span>MyOS</span>
              <span className="text-muted-foreground">Your AI-Powered Operating System</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">Your Life Deserves a</span>
                <br />
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  Better Operating
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  System.
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                We help high-capacity people gain clarity, leverage AI, and automate 
                everything except their genius.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/login">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-lg hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 h-auto"
                >
                  Build My Operating System
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 h-auto border-primary/20 text-primary hover:bg-primary/10"
              >
                What Is MyOS?
              </Button>
            </div>

            {/* Trust Logos */}
            <div className="flex items-center space-x-6 opacity-60">
              <div className="text-xs text-muted-foreground">Trusted by leaders at</div>
              <div className="flex items-center space-x-4">
                {/* Placeholder for logos */}
                <div className="w-16 h-8 bg-muted/20 rounded"></div>
                <div className="w-16 h-8 bg-muted/20 rounded"></div>
                <div className="w-16 h-8 bg-muted/20 rounded"></div>
                <div className="w-16 h-8 bg-muted/20 rounded"></div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-3xl border border-primary/20 flex items-center justify-center backdrop-blur-sm">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary-glow rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-4xl text-primary-foreground font-bold">OS</div>
              </div>
            </div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-3xl blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;