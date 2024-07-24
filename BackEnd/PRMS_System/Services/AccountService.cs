using Microsoft.EntityFrameworkCore;
using PRMS_System.Models;

namespace PRMS_System.Services
{
    public class AccountService
    {
        private readonly AppDbContext _context;

        public AccountService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Account> CreateAccountAsync(int userId, int studentId)
        {
            var account = new Account
            {
                UserId = userId,
                StudentId = studentId,
                Balance = 0.00m,
                DueAmount = 0.00m,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            };

            _context.Accounts.Add(account);
            await _context.SaveChangesAsync();
            return account;
        }

        public async Task<Transaction> RecordTransactionAsync(int accountId, decimal amount, string type, string description)
        {
            var transaction = new Transaction
            {
                AccountId = accountId,
                Amount = amount,
                Type = type,
                Date = DateTime.UtcNow,
                Description = description
            };

            var account = await _context.Accounts.FindAsync(accountId);
            if (account == null)
            {
                throw new ArgumentException("Account not found");
            }

            //if (type == "Debit" && account.Balance < amount)
            //{
            //    throw new InvalidOperationException("Insufficient funds");
            //}

            account.Balance = type == "Credit" ? account.Balance + amount : account.Balance - amount;
            account.UpdatedAt = DateTime.UtcNow;

            if (account.Balance < 0)
            {
                account.DueAmount = Math.Abs(account.Balance);
            }    
            else
            {
                account.DueAmount = 0.00m;
            }

            _context.Transactions.Add(transaction);
            await _context.SaveChangesAsync();

            return transaction;
        }

        public async Task<Account> GetAccountAsync(int userId)
        {
            return await _context.Accounts
                .Include(a => a.Transactions)
                .FirstOrDefaultAsync(a => a.UserId == userId)
                ?? throw new InvalidOperationException($"Account not found for user {userId}");
        }
    }
}
