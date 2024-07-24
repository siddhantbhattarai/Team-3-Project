namespace PRMS_System.Models
{
    public class Account
    {
        public int AccountId { get; set; }
        public int UserId { get; set; }  // Foreign key to User
        public int StudentId { get; set; }  // Foreign key to Student
        public decimal Balance { get; set; }
        public decimal DueAmount { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        // Navigation properties
        public User User { get; set; }
        public Student Student { get; set; }
        public ICollection<Transaction> Transactions { get; set; } = new List<Transaction>();
    }
}
