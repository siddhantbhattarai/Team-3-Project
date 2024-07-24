using Microsoft.AspNetCore.Mvc;

namespace PRMS_System.DTO
{
    public class StudentReportDto
    {
        public int StudentId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public DateTime DateOfBirth { get; set; }
        public DateTime EnrollmentDate { get; set; }
        public string Faculty { get; set; }
        public string Class { get; set; }
        public string Batch { get; set; }
        public string GradeLevel { get; set; }

        public AccountSummary AccountSummary { get; set; }
        public AttendanceSummary AttendanceSummary { get; set; }
        public AssignmentSummary AssignmentSummary { get; set; }
    }

    public class AccountSummary
    {
        public bool IsFeesCleared { get; set; }
        public decimal OutstandingAmount { get; set; }
    }

    public class AttendanceSummary
    {
        public int TotalClassDays { get; set; }
        public int DaysAttended { get; set; }
        public double AttendancePercentage { get; set; }
    }

    public class AssignmentSummary
    {
        public int TotalAssignments { get; set; }
        public int AssignmentsSubmitted { get; set; }
        public int AssignmentsRemaining { get; set; }
        public string GradeSummary { get; set; }
    }
}
