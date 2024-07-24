using PRMS_System.Models.CollegeSystem.Models;

namespace PRMS_System.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public string PasswordHash { get; set; }
        public string Email { get; set; }
        public int RoleId { get; set; } // Foreign Key to Role
        public Role Role { get; set; } // Navigation property
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }

}
