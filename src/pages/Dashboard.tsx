import { useState } from "react";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { AppHeader } from "@/components/layout/AppHeader";
import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, BookOpen, Plus, ArrowRight } from "lucide-react";

export default function Dashboard() {
  const [activeItem, setActiveItem] = useState("dashboard");

  // Mock user data - will come from Supabase
  const user = {
    name: "Alex Johnson",
    email: "alex@example.com",
    avatar: "", // Will be populated from auth
  };

  const recentActivity = [
    {
      type: "chat",
      title: "Started conversation about project planning",
      time: "2 hours ago",
      icon: MessageSquare,
    },
    {
      type: "journal",
      title: "Added entry: 'Daily Reflection'",
      time: "1 day ago",
      icon: BookOpen,
    },
    {
      type: "chat",
      title: "Discussed new feature ideas",
      time: "2 days ago",
      icon: MessageSquare,
    },
  ];

  return (
    <div className="flex h-screen bg-background">
      <AppSidebar activeItem={activeItem} onItemSelect={setActiveItem} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <AppHeader title="Dashboard" user={user} />
        
        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Welcome Section */}
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-background rounded-lg p-6 border border-primary/20">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Welcome back, {user.name.split(' ')[0]}! 👋
                </h2>
                <p className="text-muted-foreground">
                  Ready to boost your productivity? Start a new chat or add a journal entry.
                </p>
              </div>
              <div className="flex space-x-3">
                <Button variant="hero" className="space-x-2">
                  <Plus className="w-4 h-4" />
                  <span>New Chat</span>
                </Button>
                <Button variant="outline" className="space-x-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Write Entry</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <DashboardStats />

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Recent Activity */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Recent Activity
                  <Button variant="ghost" size="sm" className="text-primary">
                    View all
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardTitle>
                <CardDescription>
                  Your latest interactions and entries
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity, index) => {
                  const Icon = activity.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                      <div className={`p-2 rounded-lg ${
                        activity.type === "chat" ? "bg-primary/10 text-primary" : "bg-success/10 text-success"
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">
                          {activity.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>
                  Jump into your most-used features
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start space-x-3 h-12 hover:bg-primary/5 hover:text-primary border border-transparent hover:border-primary/20"
                  onClick={() => setActiveItem("chat")}
                >
                  <MessageSquare className="w-5 h-5" />
                  <div className="text-left">
                    <div className="font-medium">Start New Chat</div>
                    <div className="text-xs text-muted-foreground">Get AI assistance</div>
                  </div>
                </Button>
                
                <Button 
                  variant="ghost" 
                  className="w-full justify-start space-x-3 h-12 hover:bg-success/5 hover:text-success border border-transparent hover:border-success/20"
                  onClick={() => setActiveItem("journal")}
                >
                  <BookOpen className="w-5 h-5" />
                  <div className="text-left">
                    <div className="font-medium">New Journal Entry</div>
                    <div className="text-xs text-muted-foreground">Capture your thoughts</div>
                  </div>
                </Button>
                
                <Button 
                  variant="ghost" 
                  className="w-full justify-start space-x-3 h-12 hover:bg-warning/5 hover:text-warning border border-transparent hover:border-warning/20"
                  onClick={() => setActiveItem("profile")}
                >
                  <Plus className="w-5 h-5" />
                  <div className="text-left">
                    <div className="font-medium">Update Profile</div>
                    <div className="text-xs text-muted-foreground">Manage your settings</div>
                  </div>
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}