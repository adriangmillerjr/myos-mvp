import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const SpotlightSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="text-primary font-medium">About MyOS</div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="text-foreground">Building</span>{" "}
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  Smarter Lives
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  One System at a Time.
                </span>
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                We design personalized operating systems that help high-capacity people 
                automate their workflows, eliminate decision fatigue, and reclaim control of their life.
              </p>
              
              <p className="text-lg text-foreground font-medium">
                From chaos to clarity — in under 30 days.
              </p>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-2 text-success">
              <Rocket className="w-5 h-5" />
              <span className="font-semibold">70% less time spent on repetitive decisions.</span>
            </div>

            <div className="space-y-4">
              <Link to="/login">
                <Button 
                  variant="outline" 
                  className="border-primary/20 text-primary hover:bg-primary/10"
                >
                  Why we built this?
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              
              <p className="text-muted-foreground">
                Built for those who lead with clarity and build with intent
              </p>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-muted/20 to-muted/10 rounded-2xl border border-border overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary/5 to-primary-glow/5 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-full mx-auto shadow-lg"></div>
                  <div className="text-sm text-muted-foreground">Productivity Visualization</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpotlightSection;