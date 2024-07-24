namespace PRMS_System.Models
{
    public class Faculty
    {
        public int FacultyId { get; set; }
        public string Name { get; set; }
        public ICollection<Student> Students { get; set; }
    }
}
