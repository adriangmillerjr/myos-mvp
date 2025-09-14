import { Home, User, MessageSquare, BookOpen, Settings, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface AppSidebarProps {
  activeItem?: string;
  onItemSelect?: (item: string) => void;
}

const navigation = [
  { id: "dashboard", label: "Dashboard", icon: Home },
  { id: "profile", label: "Profile", icon: User },
  { id: "chat", label: "Chat", icon: MessageSquare },
  { id: "journal", label: "Journal", icon: BookOpen },
  { id: "settings", label: "Settings", icon: Settings },
];

export function AppSidebar({ activeItem = "dashboard", onItemSelect }: AppSidebarProps) {
  return (
    <div className="flex h-full w-64 flex-col bg-card border-r border-border">
      {/* Logo */}
      <div className="flex h-16 items-center px-6 border-b border-border">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
            <span className="text-sm font-bold text-primary-foreground">OS</span>
          </div>
          <span className="text-lg font-semibold text-foreground">MyOS</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;
          
          return (
            <Button
              key={item.id}
              variant={isActive ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start space-x-3 h-11",
                isActive && "bg-primary/10 text-primary border border-primary/20"
              )}
              onClick={() => onItemSelect?.(item.id)}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Button>
          );
        })}
      </nav>

      {/* User actions */}
      <div className="p-4 border-t border-border">
        <Button
          variant="ghost"
          className="w-full justify-start space-x-3 h-11 text-destructive hover:text-destructive hover:bg-destructive/10"
        >
          <LogOut className="w-5 h-5" />
          <span>Sign Out</span>
        </Button>
      </div>
    </div>
  );
}