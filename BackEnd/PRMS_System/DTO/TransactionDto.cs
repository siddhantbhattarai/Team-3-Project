namespace PRMS_System.DTO
{
    public class TransactionDto
    {
        public int AccountId { get; set; }
        public decimal Amount { get; set; }
        public string Type { get; set; }  // E.g., "Credit" or "Debit"
        public string Description { get; set; }
    }
}
