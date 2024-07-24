namespace PRMS_System.Models
{
    namespace CollegeSystem.Models
    {
        public class Role
        {
            public int RoleId { get; set; }
            public string Name { get; set; }
            public ICollection<User> Users { get; set; }
        }
    }

}
