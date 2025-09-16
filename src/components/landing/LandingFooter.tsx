import { Link } from "react-router-dom";

const LandingFooter = () => {
  return (
    <footer className="border-t border-border/50 py-12 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-sm font-bold text-primary-foreground">OS</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                MyOS
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your AI-powered operating system for high-performance living. 
              Built by Geeked Technologies.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Product</h4>
            <div className="space-y-2">
              <Link to="/login" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                Features
              </Link>
              <Link to="/login" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                Pricing
              </Link>
              <Link to="/login" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                Security
              </Link>
              <Link to="/login" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                Integrations
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Company</h4>
            <div className="space-y-2">
              <Link to="/login" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                About
              </Link>
              <Link to="/login" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                Careers
              </Link>
              <Link to="/login" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                Contact
              </Link>
              <Link to="/login" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                Blog
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Support</h4>
            <div className="space-y-2">
              <Link to="/login" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                Help Center
              </Link>
              <Link to="/login" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                Documentation
              </Link>
              <Link to="/login" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                Status
              </Link>
              <Link to="/login" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                API
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            &copy; 2024 MyOS by Geeked Technologies. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6">
            <Link to="/login" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/login" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Terms of Service
            </Link>
            <Link to="/login" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;