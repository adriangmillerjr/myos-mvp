import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, Target, Zap, Bot } from "lucide-react";
import { Link } from "react-router-dom";

const ContentCards = () => {
  const tools = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "The Strategic Selector",
      badge: "NEW",
      description: "Routes the right agent to the right tasks. So you're never guessing what tool to use or when.",
      metrics: ["3x faster tool selection", "40% more efficient workflow match"],
      iconBg: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Personalized Clarity Engine",
      description: "Builds your internal profile in real-time capturing your tone, goals, strengths, and clarity drivers.",
      metrics: ["60% clearer daily priorities", "50% less task switching"],
      iconBg: "bg-success/10",
      iconColor: "text-success"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Productivity Coach",
      badge: "FRESH",
      description: "Delivers personalized coaching prompts to simplify decisions and overcome mental clutter.",
      metrics: ["70% reduction in mental friction", "33% more deep work per week"],
      iconBg: "bg-warning/10",
      iconColor: "text-warning"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Energy-Based Task Strategist",
      description: "Groups your work based on energy levels, focus windows, and task flow not just urgency",
      metrics: ["20% increase in productivity sessions", "45% less context switching"],
      iconBg: "bg-accent/10",
      iconColor: "text-accent-foreground"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-muted/5">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="text-primary font-medium">Tools That Work</div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Real Tools. Real Leverage.
            </span>
            <br />
            <span className="text-foreground text-3xl md:text-4xl">
              Each one built to save time, remove friction, and increase clarity
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every MyOS module is designed to replace guesswork with precision. 
            These aren't just prompts — they're decision-making engines.
          </p>
          
          <Link to="/login">
            <Button 
              variant="outline" 
              className="border-primary/20 text-primary hover:bg-primary/10"
            >
              Book a strategy call
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {tools.map((tool, index) => (
            <Card key={index} className="bg-card/50 border-border/50 backdrop-blur-sm hover:border-primary/20 transition-all duration-300 group">
              <CardContent className="p-8 space-y-6">
                {/* Tool Header */}
                <div className="flex items-start justify-between">
                  <div className={`w-16 h-16 ${tool.iconBg} rounded-xl flex items-center justify-center ${tool.iconColor} group-hover:scale-110 transition-transform`}>
                    {tool.icon}
                  </div>
                  {tool.badge && (
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                      {tool.badge}
                    </span>
                  )}
                </div>

                {/* Tool Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    {tool.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {tool.description}
                  </p>
                  
                  {/* Metrics */}
                  <div className="space-y-2">
                    {tool.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm font-medium text-foreground">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Element */}
                <div className="aspect-[4/3] bg-gradient-to-br from-muted/20 to-muted/10 rounded-xl border border-border/50 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/5 to-primary-glow/5 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className={`w-12 h-12 ${tool.iconBg} rounded-lg mx-auto flex items-center justify-center ${tool.iconColor}`}>
                        {tool.icon}
                      </div>
                      <div className="text-xs text-muted-foreground">Tool Preview</div>
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

export default ContentCards;