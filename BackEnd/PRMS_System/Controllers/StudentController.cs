using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PRMS_System.DTO;
using PRMS_System.Models;
using PRMS_System.Services;

namespace PRMS_System.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentController : ControllerBase
    {      
            private readonly StudentService _studentService;

            public StudentController(StudentService studentService)
            {
                _studentService = studentService;
            }


       // [Authorize]
        [HttpPost]
        public async Task<IActionResult> AddStudentWithParent([FromBody] StudentParentDto studentParentDto)
        {
            if (studentParentDto == null || studentParentDto.Student == null || studentParentDto.Parent == null)
            {
                return BadRequest(new { error = "Student and Parent information are required" });
            }

            var result = await _studentService.AddStudentWithParentAsync(studentParentDto.Student, studentParentDto.Parent);

            if (result.Success)
            {
                return Ok(new { message = "Student and Parent added successfully", username = result.Username, password = result.Password });
            }

            return StatusCode(500, new { error = "An error occurred while adding the student and parent" });
        }
    }   
    
}