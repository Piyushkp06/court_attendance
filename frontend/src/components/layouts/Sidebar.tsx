import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  FileText, 
  ClipboardCheck, 
  Bell, 
  BarChart3, 
  Settings,
  Shield
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: FileText, label: "Case List", path: "/cases" },
  { icon: ClipboardCheck, label: "Attendance", path: "/attendance" },
  { icon: Bell, label: "Notifications", path: "/notifications" },
  { icon: BarChart3, label: "Reports", path: "/reports" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

const Sidebar = () => {
  return (
    <aside className="w-64 official-gradient text-sidebar-foreground flex flex-col">
      <div className="p-6 flex items-center gap-3 border-b border-sidebar-border">
        <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
          <Shield className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="font-bold text-sm">Odisha Police</h1>
          <p className="text-xs text-sidebar-foreground/70">Court System</p>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-all",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
              )
            }
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <p className="text-xs text-sidebar-foreground/60 text-center">
          Government of Odisha
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
