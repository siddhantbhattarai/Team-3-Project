using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PRMS_System.DTO;
using PRMS_System.Models;
using PRMS_System.Services;
using System.Diagnostics;

namespace PRMS_System.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AssignmentController : Controller
    {
        private readonly AssignmentService _assignmentService;

        public AssignmentController(AssignmentService assignmentService)
        {
            _assignmentService = assignmentService;
        }

        [HttpPost("create")]
        public async Task<IActionResult> CreateAssignment([FromBody] Assignment assignment)
        {
            await _assignmentService.AddOrUpdateAssignmentAsync(assignment);
            return Ok(new { Message = "Assignment added for all students in the class." });
        }

        [HttpPost("status")]
        public async Task<IActionResult> UpdateAssignmentStatus([FromBody] UpdateAssignmentStatusDto updateStatusDto)
        {
            await _assignmentService.AddOrUpdateAssignmentStatusAsync(updateStatusDto.AssignmentId, updateStatusDto.StudentStatuses);
            return Ok();
        }

        [HttpGet("class/{classId}")]
        public async Task<IActionResult> GetAssignmentsByClass(int classId)
        {
            var assignments = await _assignmentService.GetAssignmentsByClassAsync(classId);
            var assignmentList = await assignments
            .Select(s => new
                {
                    s.AssignmentId,
                    s.StudentId,
                    StudentName = $"{s.Student.FirstName} {s.Student.LastName}",
                    s.Assignment.Title,
                    s.Assignment.Description,
                    s.Assignment.DueDate,
                    s.Status,
                    s.Grade
                })
                .ToListAsync();

            return Ok(assignmentList);
        }
    }
}
