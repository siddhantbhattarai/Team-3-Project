using Microsoft.EntityFrameworkCore;
using PRMS_System.DTO;
using PRMS_System.Models;
using System.Diagnostics;

namespace PRMS_System.Services
{
    public class ReportService
    {
        private readonly AppDbContext _context;

        public ReportService(AppDbContext context)
        {
            _context = context;
        }

        // Other existing methods...

        public async Task<StudentReportDto> GetStudentReportAsync(int studentId)
        {
            var student = await _context.Students
                .Include(s => s.User)
                .Include(s => s.ClassId)
                .Include(s => s.BatchId)
                .Include(s => s.FacultyId)
                .FirstOrDefaultAsync(s => s.StudentId == studentId);

            if (student == null)
            {
                throw new Exception("Student not found.");
            }

            var account = await _context.Accounts
                .Where(a => a.StudentId == studentId)
                .FirstOrDefaultAsync();

            var totalClassDays = await _context.Attendances
                .Where(at => at.StudentId == studentId)
                .GroupBy(at => at.Date)
                .CountAsync();

            var daysAttended = await _context.Attendances
                .Where(at => at.StudentId == studentId && at.Status == "Present")
                .CountAsync();

            var assignments = await _context.AssignmentStatuses
                .Include(s => s.Assignment)
                .Where(s => s.StudentId == studentId)
                .ToListAsync();

            var totalAssignments = assignments.Count;
            var assignmentsSubmitted = assignments.Count(s => s.Status == "Submitted");
            var assignmentsRemaining = totalAssignments - assignmentsSubmitted;
            var gradeSummary = assignments
                .Where(s => !string.IsNullOrEmpty(s.Grade))
                .GroupBy(s => s.Grade)
                .Select(g => new { Grade = g.Key, Count = g.Count() })
                .ToDictionary(g => g.Grade, g => g.Count);

            return new StudentReportDto
            {
                StudentId = student.StudentId,
                FirstName = student.FirstName,
                LastName = student.LastName,
                Email = student.User.Email,
                DateOfBirth = student.DateOfBirth,
                EnrollmentDate = student.EnrollmentDate,
                //Faculty = student.FacultyId.Name,
               // Class = student.ClassId.Name,
               // Batch = student.BatchId.Name,
                GradeLevel = student.GradeLevel,
                AccountSummary = new AccountSummary
                {
                    IsFeesCleared = account?.Balance >= 0,
                    OutstandingAmount = account?.Balance ?? 0
                },
                AttendanceSummary = new AttendanceSummary
                {
                    TotalClassDays = totalClassDays,
                    DaysAttended = daysAttended,
                    AttendancePercentage = totalClassDays > 0 ? (daysAttended / (double)totalClassDays) * 100 : 0
                },
                AssignmentSummary = new AssignmentSummary
                {
                    TotalAssignments = totalAssignments,
                    AssignmentsSubmitted = assignmentsSubmitted,
                    AssignmentsRemaining = assignmentsRemaining,
                    GradeSummary = string.Join(", ", gradeSummary.Select(g => $"{g.Key}: {g.Value}"))
                }
            };
        }
    }
}
