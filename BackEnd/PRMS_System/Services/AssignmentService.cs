using Microsoft.EntityFrameworkCore;
using PRMS_System.DTO;
using PRMS_System.Models;

namespace PRMS_System.Services
{
    public class AssignmentService
    {
        private readonly AppDbContext _context;

        public AssignmentService(AppDbContext context)
        {
            _context = context;
        }

        public async Task AddOrUpdateAssignmentAsync(Assignment assignment)
        {
            if (assignment.AssignmentId == 0)
            {
                _context.Assignments.Add(assignment);
                await _context.SaveChangesAsync();
                await AddDefaultAssignmentStatusesAsync(assignment);
            }
            else
            {
                _context.Assignments.Update(assignment);
                await _context.SaveChangesAsync();
            }
        }

        private async Task AddDefaultAssignmentStatusesAsync(Assignment assignment)
        {
            var studentsInClass = await _context.Students
                .Where(s => s.ClassId == assignment.ClassId)
                .ToListAsync();

            var assignmentStatuses = studentsInClass.Select(student => new AssignmentStatus
            {
                AssignmentId = assignment.AssignmentId,
                StudentId = student.StudentId,
                Status = "Not Submitted",
                Grade = "Not Graded"
            }).ToList();

            _context.AssignmentStatuses.AddRange(assignmentStatuses);
            await _context.SaveChangesAsync();
        }

        public async Task AddOrUpdateAssignmentStatusAsync(int assignmentId, List<StudentAssignmentStatusDto> studentStatuses)
        {
            var existingStatuses = await _context.AssignmentStatuses
                .Where(s => s.AssignmentId == assignmentId)
                .ToListAsync();

            foreach (var studentStatus in studentStatuses)
            {
                var status = existingStatuses
                    .FirstOrDefault(s => s.StudentId == studentStatus.StudentId);

                if (status == null)
                {
                    status = new AssignmentStatus
                    {
                        AssignmentId = assignmentId,
                        StudentId = studentStatus.StudentId,
                        Status = studentStatus.Status,
                        Grade = studentStatus.Grade
                    };
                    _context.AssignmentStatuses.Add(status);
                }
                else
                {
                    status.Status = studentStatus.Status;
                    status.Grade = studentStatus.Grade;
                    _context.AssignmentStatuses.Update(status);
                }
            }

            await _context.SaveChangesAsync();
        }

        public async Task<IQueryable<AssignmentStatus>> GetAssignmentsByClassAsync(int classId)
        {
            return _context.AssignmentStatuses
                .Include(s => s.Assignment)
                .Include(s => s.Student)
                .Where(s => s.Assignment.ClassId == classId);
        }
    }
}
