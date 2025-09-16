import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, BookOpen, Shield, Users, Calendar, Settings } from "lucide-react";

const CapabilitiesGrid = () => {
  const capabilities = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "AI-Powered Chat",
      description: "Intelligent conversations that understand your context and help you think through complex problems.",
      iconBg: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Smart Journaling",
      description: "Capture thoughts, track progress, and discover insights with AI-powered analysis.",
      iconBg: "bg-success/10",
      iconColor: "text-success"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Privacy First",
      description: "Your data is encrypted and protected with enterprise-grade security standards.",
      iconBg: "bg-warning/10",
      iconColor: "text-warning"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Share insights and coordinate with your team while maintaining personal workflows.",
      iconBg: "bg-accent/10",
      iconColor: "text-accent-foreground"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Intelligent Scheduling",
      description: "Automatically optimize your calendar based on energy levels and task priorities.",
      iconBg: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Custom Workflows",
      description: "Build personalized automation that adapts to your unique working style.",
      iconBg: "bg-success/10",
      iconColor: "text-success"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Powerful Capabilities
            </span>
            <br />
            <span className="text-foreground text-3xl md:text-4xl">
              Built for High-Performance Living
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every feature is designed to amplify your natural strengths and eliminate 
            the friction that keeps you from doing your best work.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <Card key={index} className="bg-card/50 border-border/50 backdrop-blur-sm hover:border-primary/20 transition-all duration-300 group">
              <CardContent className="p-6 space-y-4">
                {/* Icon */}
                <div className={`w-12 h-12 ${capability.iconBg} rounded-lg flex items-center justify-center ${capability.iconColor} group-hover:scale-110 transition-transform`}>
                  {capability.icon}
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {capability.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesGrid;