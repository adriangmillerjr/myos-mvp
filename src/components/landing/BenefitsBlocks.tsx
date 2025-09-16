import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Clock, Brain } from "lucide-react";

const BenefitsBlocks = () => {
  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Save 10+ Hours Weekly",
      description: "Automate routine decisions and eliminate context switching with intelligent task management.",
      stats: "Average user saves 12.5 hours per week",
      iconBg: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Reduce Mental Load",
      description: "Let AI handle the cognitive overhead while you focus on what matters most.",
      stats: "70% reduction in decision fatigue",
      iconBg: "bg-success/10",
      iconColor: "text-success"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Boost Productivity",
      description: "Energy-based scheduling and personalized workflows optimize your peak performance windows.",
      stats: "40% increase in deep work sessions",
      iconBg: "bg-warning/10",
      iconColor: "text-warning"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Achieve Clarity",
      description: "Transform chaos into clear priorities with AI-powered insights and personalized coaching.",
      stats: "90% report clearer daily focus",
      iconBg: "bg-accent/10",
      iconColor: "text-accent-foreground"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/5">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-foreground">Why High-Performers</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Choose MyOS
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from real users who've transformed their productivity 
            and reclaimed control of their time.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-card/50 border-border/50 backdrop-blur-sm hover:border-primary/20 transition-all duration-300 group">
              <CardContent className="p-8 space-y-6">
                {/* Header */}
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 ${benefit.iconBg} rounded-xl flex items-center justify-center ${benefit.iconColor} group-hover:scale-110 transition-transform flex-shrink-0`}>
                    {benefit.icon}
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="border-t border-border/50 pt-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium text-primary">{benefit.stats}</span>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="aspect-[5/2] bg-gradient-to-br from-muted/20 to-muted/10 rounded-xl border border-border/50 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/5 to-primary-glow/5 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className={`w-10 h-10 ${benefit.iconBg} rounded-lg mx-auto flex items-center justify-center ${benefit.iconColor}`}>
                        {benefit.icon}
                      </div>
                      <div className="text-xs text-muted-foreground">Performance Chart</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsBlocks;