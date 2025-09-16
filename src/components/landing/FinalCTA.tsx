import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-primary-glow/5">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
            <Sparkles className="w-4 h-4" />
            <span>Ready to Transform Your Life?</span>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-foreground">Your Operating System</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Awaits
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join thousands of high-performers who've already transformed their productivity. 
              Your personalized AI operating system is ready to deploy.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 py-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                10,000+
              </div>
              <div className="text-muted-foreground">Users Transformed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                12.5hrs
              </div>
              <div className="text-muted-foreground">Average Time Saved/Week</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                30 Days
              </div>
              <div className="text-muted-foreground">To Full Optimization</div>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <Link to="/login">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-2xl hover:shadow-glow transition-all duration-300 text-xl px-10 py-8 h-auto"
              >
                Build My Operating System Now
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </Link>
            
            <p className="text-sm text-muted-foreground">
              14-day free trial • No credit card required • Setup in 5 minutes
            </p>
          </div>

          {/* Trust Elements */}
          <div className="pt-8 border-t border-border/50">
            <div className="flex items-center justify-center space-x-8 opacity-60">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-sm text-muted-foreground">Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-sm text-muted-foreground">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-sm text-muted-foreground">Money-Back Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;