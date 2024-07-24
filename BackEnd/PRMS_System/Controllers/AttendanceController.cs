using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PRMS_System.DTO;
using PRMS_System.Services;

namespace PRMS_System.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AttendanceController : Controller
    {
        private readonly AttendanceService _attendanceService;

        public AttendanceController(AttendanceService attendanceService)
        {
            _attendanceService = attendanceService;
        }

        [HttpPost("record")]
        public async Task<IActionResult> RecordAttendance([FromBody] AttendanceDto attendanceDto)
        {
            await _attendanceService.AddOrUpdateAttendanceAsync(attendanceDto.StudentId, attendanceDto.Date, attendanceDto.Status);
            return Ok(new { status = "Attedance saved."});
        }

        [HttpPost("bulk-record")]
        public async Task<IActionResult> BulkRecordAttendance([FromBody] BulkAttendanceDto bulkAttendanceDto)
        {
            await _attendanceService.AddOrUpdateBulkAttendanceAsync(bulkAttendanceDto);
            return Ok(new { status = "Class Attedance saved." });
        }

        [HttpGet("list")]
        public async Task<IActionResult> GetAttendances([FromQuery] int classId, [FromQuery] int batchId, [FromQuery] DateTime date)
        {
            var attendances = await _attendanceService.GetAttendancesByClassAsync(classId, batchId, date);

            var attendanceList = await attendances
                .Select(a => new
                {
                    a.StudentId,
                    StudentName = $"{a.Student.FirstName} {a.Student.LastName}",
                    a.Date,
                    a.Status
                })
                .ToListAsync();

            return Ok(attendanceList);
          
        }
    }
}
