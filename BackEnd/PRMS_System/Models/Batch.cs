namespace PRMS_System.Models
{
    public class Batch
    {
        public int BatchId { get; set; }
        public string Name { get; set; }

        public string Year { get; set; }
        public ICollection<Student> Students { get; set; }
    }
}
