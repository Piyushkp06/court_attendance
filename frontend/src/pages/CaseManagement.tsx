import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, Search, Filter } from "lucide-react";
import { toast } from "sonner";

const mockCases = [
  { id: "CID/2024/001", court: "District Court-A", date: "2024-11-08", io: "SI Ramesh Kumar", witnesses: 3, status: "Present" },
  { id: "CID/2024/002", court: "District Court-B", date: "2024-11-09", io: "SI Priya Patel", witnesses: 2, status: "Pending" },
  { id: "CID/2024/003", court: "Sessions Court", date: "2024-11-10", io: "ASI Suresh Nayak", witnesses: 4, status: "Absent" },
  { id: "CID/2024/004", court: "District Court-A", date: "2024-11-11", io: "SI Anjali Das", witnesses: 1, status: "Late" },
  { id: "CID/2024/005", court: "District Court-C", date: "2024-11-12", io: "SI Rajesh Mohanty", witnesses: 5, status: "Present" },
  { id: "CID/2024/006", court: "Sessions Court", date: "2024-11-13", io: "ASI Kavita Rath", witnesses: 2, status: "Pending" },
];

const CaseManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleFileUpload = () => {
    toast.success("CSV upload functionality coming soon");
  };

  const filteredCases = mockCases.filter(case_ =>
    case_.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    case_.io.toLowerCase().includes(searchTerm.toLowerCase()) ||
    case_.court.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Case Management</h1>
          <p className="text-muted-foreground mt-1">Manage court cases and daily cause lists</p>
        </div>
        <Button onClick={handleFileUpload} className="bg-primary hover:bg-primary/90">
          <Upload className="w-4 h-4 mr-2" />
          Upload Cause List (CSV)
        </Button>
      </div>

      <Card className="glass-card">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search by Case ID, Officer, or Court..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
          </div>
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
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Witnesses</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCases.map((case_, index) => (
                  <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="py-3 px-4 text-sm font-medium text-primary">{case_.id}</td>
                    <td className="py-3 px-4 text-sm text-foreground">{case_.court}</td>
                    <td className="py-3 px-4 text-sm text-foreground">{case_.date}</td>
                    <td className="py-3 px-4 text-sm text-foreground">{case_.io}</td>
                    <td className="py-3 px-4 text-sm text-foreground">{case_.witnesses}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        case_.status === "Present" 
                          ? "status-badge-success" 
                          : case_.status === "Late"
                          ? "status-badge-warning"
                          : case_.status === "Pending"
                          ? "bg-muted text-muted-foreground border border-border"
                          : "status-badge-error"
                      }`}>
                        {case_.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <Button variant="ghost" size="sm">View Details</Button>
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

export default CaseManagement;
