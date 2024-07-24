using Microsoft.EntityFrameworkCore;
using PRMS_System.DTO;
using PRMS_System.Models;

namespace PRMS_System.Services
{
    public class AttendanceService
    {
        private readonly AppDbContext _context;

        public AttendanceService(AppDbContext context)
        {
            _context = context;
        }

        public async Task AddOrUpdateAttendanceAsync(int studentId, DateTime date, string status)
        {
            var attendance = await _context.Attendances
                .FirstOrDefaultAsync(a => a.StudentId == studentId && a.Date == date);

            if (attendance == null)
            {
                attendance = new Attendance
                {
                    StudentId = studentId,
                    Date = date,
                    Status = status
                };
                _context.Attendances.Add(attendance);
            }
            else
            {
                attendance.Status = status;
                _context.Attendances.Update(attendance);
            }

            await _context.SaveChangesAsync();
        }

        public async Task AddOrUpdateBulkAttendanceAsync(BulkAttendanceDto bulkAttendanceDto)
        {
            var attendances = await _context.Attendances
                .Where(a => bulkAttendanceDto.Attendances.Select(att => att.StudentId).Contains(a.StudentId)
                            && a.Date == bulkAttendanceDto.Date)
                .ToListAsync();

            foreach (var studentAttendance in bulkAttendanceDto.Attendances)
            {
                var attendance = attendances
                    .FirstOrDefault(a => a.StudentId == studentAttendance.StudentId);

                if (attendance == null)
                {
                    attendance = new Attendance
                    {
                        StudentId = studentAttendance.StudentId,
                        Date = bulkAttendanceDto.Date,
                        Status = studentAttendance.Status
                    };
                    _context.Attendances.Add(attendance);
                }
                else
                {
                    attendance.Status = studentAttendance.Status;
                    _context.Attendances.Update(attendance);
                }
            }

            await _context.SaveChangesAsync();
        }

        public async Task<IQueryable<Attendance>> GetAttendancesByClassAsync(int classId, int batchId, DateTime date)
        {
            // Assuming you have a way to filter students by class, section, and batch
            var studentIds = await _context.Students
                .Where(s => s.ClassId == classId && s.BatchId == batchId)
                .Select(s => s.StudentId)
                .ToListAsync();

            return _context.Attendances
                .Where(a => studentIds.Contains(a.StudentId) && a.Date.Date == date.Date)
                .Include(a => a.Student);
        }
    }
}
