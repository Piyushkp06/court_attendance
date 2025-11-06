import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, User } from "lucide-react";
import { toast } from "sonner";

interface LoginProps {
  onLogin: () => void;
}

const Login = ({ onLogin }: LoginProps) => {
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!role || !username || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    // Mock authentication
    toast.success("Login successful");
    onLogin();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center official-gradient p-4">
      <Card className="w-full max-w-md glass-card">
        <CardHeader className="space-y-4 text-center">
          <div className="mx-auto w-20 h-20 bg-accent rounded-full flex items-center justify-center">
            <Shield className="w-12 h-12 text-primary" />
          </div>
          <div>
            <CardTitle className="text-2xl text-primary">Odisha Police</CardTitle>
            <CardDescription className="text-base mt-2">
              Court Attendance & Witness Tracking System
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Select value={role} onValueChange={setRole}>
                <SelectTrigger id="role">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent className="bg-popover">
                  <SelectItem value="admin">Admin (SP/SDPO)</SelectItem>
                  <SelectItem value="io">Investigating Officer</SelectItem>
                  <SelectItem value="liaison">Liaison Officer</SelectItem>
                  <SelectItem value="witness">Witness</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="username">Username / Employee ID</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your ID"
                  className="pl-10"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="pl-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Sign In
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              Authorized access only. All activities are logged and monitored.
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
