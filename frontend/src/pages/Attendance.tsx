import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const attendanceRecords = [
  { id: 1, caseId: "CID/2024/001", officer: "SI Ramesh Kumar", court: "District Court-A", time: "10:00 AM", marked: false },
  { id: 2, caseId: "CID/2024/002", officer: "SI Priya Patel", court: "District Court-B", time: "11:30 AM", marked: false },
  { id: 3, caseId: "CID/2024/003", officer: "ASI Suresh Nayak", court: "Sessions Court", time: "02:00 PM", marked: false },
  { id: 4, caseId: "CID/2024/004", officer: "SI Anjali Das", court: "District Court-A", time: "03:30 PM", marked: false },
];

const Attendance = () => {
  const [records, setRecords] = useState(attendanceRecords);
  const [remarks, setRemarks] = useState("");

  const handleMarkAttendance = (id: number) => {
    setRecords(prev =>
      prev.map(record =>
        record.id === id ? { ...record, marked: !record.marked } : record
      )
    );
  };

  const handleSubmit = () => {
    const markedCount = records.filter(r => r.marked).length;
    toast.success(`Attendance submitted for ${markedCount} officer(s)`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Attendance Tracking</h1>
        <p className="text-muted-foreground mt-1">Mark and verify officer attendance for court hearings</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Today's Date
            </CardTitle>
            <Calendar className="w-5 h-5 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">November 8, 2024</div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Current Time
            </CardTitle>
            <Clock className="w-5 h-5 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">10:45 AM</div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Marked Present
            </CardTitle>
            <CheckCircle className="w-5 h-5 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {records.filter(r => r.marked).length}/{records.length}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-foreground">Mark Attendance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Case ID</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Officer Name</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Court</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Scheduled Time</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Present</th>
                </tr>
              </thead>
              <tbody>
                {records.map((record) => (
                  <tr key={record.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="py-3 px-4 text-sm font-medium text-primary">{record.caseId}</td>
                    <td className="py-3 px-4 text-sm text-foreground">{record.officer}</td>
                    <td className="py-3 px-4 text-sm text-foreground">{record.court}</td>
                    <td className="py-3 px-4 text-sm text-foreground">{record.time}</td>
                    <td className="py-3 px-4">
                      <Checkbox
                        checked={record.marked}
                        onCheckedChange={() => handleMarkAttendance(record.id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Remarks (Optional)</label>
            <Textarea
              placeholder="Add any remarks or notes..."
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              className="min-h-[100px]"
            />
          </div>

          <Button onClick={handleSubmit} className="w-full bg-primary hover:bg-primary/90">
            Submit Attendance
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Attendance;
