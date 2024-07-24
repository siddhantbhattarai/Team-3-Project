using PRMS_System.Models;

namespace PRMS_System.DTO
{
    public class StudentParentDto
    {
        public StudentDto Student { get; set; }
        public ParentDto Parent { get; set; }
    }

    public class StudentDto
    {
        public int RegistrationId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public DateTime EnrollmentDate { get; set; }
        public int FacultyId { get; set; }
        public int ClassId { get; set; }
        public int BatchId { get; set; }
        public string GradeLevel { get; set; }
    }

    public class ParentDto
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
    }
}
