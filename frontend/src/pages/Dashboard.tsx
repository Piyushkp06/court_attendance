import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, CheckCircle2, AlertCircle } from "lucide-react";

const statsCards = [
  {
    title: "Total Cases",
    value: "234",
    icon: FileText,
    trend: "+12% from last month",
    color: "text-primary"
  },
  {
    title: "Active Officers",
    value: "45",
    icon: Users,
    trend: "Currently on duty",
    color: "text-accent"
  },
  {
    title: "Today's Attendance",
    value: "42/45",
    icon: CheckCircle2,
    trend: "93% attendance rate",
    color: "text-success"
  },
  {
    title: "Pending Alerts",
    value: "8",
    icon: AlertCircle,
    trend: "Requires attention",
    color: "text-warning"
  }
];

const recentCases = [
  { id: "CID/2024/001", court: "District Court-A", date: "2024-11-08", io: "SI Ramesh Kumar", status: "Present" },
  { id: "CID/2024/002", court: "District Court-B", date: "2024-11-08", io: "SI Priya Patel", status: "Present" },
  { id: "CID/2024/003", court: "Sessions Court", date: "2024-11-08", io: "ASI Suresh Nayak", status: "Absent" },
  { id: "CID/2024/004", court: "District Court-A", date: "2024-11-08", io: "SI Anjali Das", status: "Late" },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome back! Here's your overview for today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat, index) => (
          <Card key={index} className="glass-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-2">{stat.trend}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-foreground">Today's Court Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Case ID</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Court</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Date</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">IO Name</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentCases.map((case_, index) => (
                  <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="py-3 px-4 text-sm font-medium text-primary">{case_.id}</td>
                    <td className="py-3 px-4 text-sm text-foreground">{case_.court}</td>
                    <td className="py-3 px-4 text-sm text-foreground">{case_.date}</td>
                    <td className="py-3 px-4 text-sm text-foreground">{case_.io}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        case_.status === "Present" 
                          ? "status-badge-success" 
                          : case_.status === "Late"
                          ? "status-badge-warning"
                          : "status-badge-error"
                      }`}>
                        {case_.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
