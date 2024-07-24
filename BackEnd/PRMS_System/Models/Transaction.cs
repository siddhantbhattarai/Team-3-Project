namespace PRMS_System.Models
{
    public class Transaction
    {
        public int TransactionId { get; set; }
        public int AccountId { get; set; }  // Foreign key to Account
        public decimal Amount { get; set; }
        public string Type { get; set; }  // E.g., "Credit" or "Debit"
        public DateTime Date { get; set; }
        public string Description { get; set; }

        // Navigation properties
        public Account Account { get; set; }
    }
}
