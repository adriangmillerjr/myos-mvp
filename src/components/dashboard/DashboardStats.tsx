import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, BookOpen, Clock, TrendingUp } from "lucide-react";

const stats = [
  {
    title: "Total Messages",
    value: "1,234",
    change: "+12%",
    icon: MessageSquare,
    trend: "up",
  },
  {
    title: "Journal Entries",
    value: "56",
    change: "+5%",
    icon: BookOpen,
    trend: "up",
  },
  {
    title: "Active Time",
    value: "4.2h",
    change: "-8%",
    icon: Clock,
    trend: "down",
  },
  {
    title: "Productivity",
    value: "85%",
    change: "+15%",
    icon: TrendingUp,
    trend: "up",
  },
];

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} className="bg-card border-border hover:bg-card/80 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <Icon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className={`text-xs ${
                stat.trend === "up" ? "text-success" : "text-destructive"
              }`}>
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}