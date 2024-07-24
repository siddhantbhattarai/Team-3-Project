using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using PRMS_System.DTO;
using PRMS_System.Helpers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
    {
    private readonly AppDbContext _context;
    private readonly IConfiguration _configuration;

    public AuthController(IConfiguration configuration, AppDbContext context)
    {
        _configuration = configuration;
        _context = context;
    }

  
    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginRequest request)
    {
        if (request == null || string.IsNullOrEmpty(request.Username) || string.IsNullOrEmpty(request.Password))
        {
            return BadRequest(new { error = "Username and password are required" });
        }

        var user = await _context.Users.FirstOrDefaultAsync(u => u.Username == request.Username);
        if (user == null || !BCrypt.Net.BCrypt.Verify(request.Password, user.PasswordHash))
        {
            return Unauthorized(new { error = "Invalid credentials" });
        }

        var authHelpers = new AuthHelpers(_configuration);
        var token = authHelpers.GenerateJWTToken(user);

        return Ok(new { Role = user.RoleId, token });
    }

    //[HttpPost("Register")]
    //public async Task<(IActionResult)> AddStaffAsync(StudentDto studentDto)
    //{

    //}
}

