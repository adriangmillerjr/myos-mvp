import { Bell, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AppHeaderProps {
  title?: string;
  user?: {
    name: string;
    email: string;
    avatar?: string;
  };
}

export function AppHeader({ title = "Dashboard", user }: AppHeaderProps) {
  return (
    <header className="flex h-16 items-center justify-between px-6 bg-background border-b border-border">
      {/* Title */}
      <div>
        <h1 className="text-2xl font-semibold text-foreground">{title}</h1>
      </div>

      {/* Search and actions */}
      <div className="flex items-center space-x-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search..."
            className="pl-10 w-64 bg-muted/50 border-muted"
          />
        </div>

        {/* Notifications */}
        <Button variant="ghost" size="sm" className="relative">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"></span>
        </Button>

        {/* User avatar */}
        <Avatar className="w-8 h-8">
          <AvatarImage src={user?.avatar} alt={user?.name} />
          <AvatarFallback className="bg-primary text-primary-foreground text-sm">
            {user?.name?.charAt(0) || <User className="w-4 h-4" />}
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}