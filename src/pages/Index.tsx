import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, BookOpen, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
              <span className="text-sm font-bold text-primary-foreground">OS</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              MyOS
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="hero">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Your Personal
              <span className="block bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Operating System
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Streamline your digital life with AI-powered chat, intelligent journaling, 
              and productivity tools that adapt to your workflow.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/dashboard">
              <Button size="lg" variant="hero" className="text-lg px-8 py-6 h-auto">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto">
                Sign In
              </Button>
            </Link>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">AI Chat</h3>
              <p className="text-sm text-muted-foreground">
                Intelligent conversations that understand context and help you think through problems.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border hover:border-success/20 transition-all duration-300 group">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-success/20 transition-colors">
                <BookOpen className="w-6 h-6 text-success" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Smart Journal</h3>
              <p className="text-sm text-muted-foreground">
                Capture thoughts, track progress, and discover insights with AI-powered journaling.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border hover:border-warning/20 transition-all duration-300 group">
              <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-warning/20 transition-colors">
                <Shield className="w-6 h-6 text-warning" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Secure & Private</h3>
              <p className="text-sm text-muted-foreground">
                Your data is encrypted and protected with enterprise-grade security standards.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border hover:border-accent-foreground/20 transition-all duration-300 group">
              <div className="w-12 h-12 bg-accent/50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                <Zap className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">
                Real-time sync across devices with instant response times and offline support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to upgrade your digital experience?
          </h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of users who have transformed their productivity with MyOS.
          </p>
          <Link to="/dashboard">
            <Button size="lg" variant="hero" className="text-lg px-8 py-6 h-auto">
              Get Started - It's Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 MyOS by Geeked Technologies. Built with ❤️ for productivity.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
