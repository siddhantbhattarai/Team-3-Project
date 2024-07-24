using Microsoft.AspNetCore.Mvc;
using PRMS_System.DTO;
using PRMS_System.Services;

namespace PRMS_System.Controllers
{

        [ApiController]
        [Route("api/[controller]")]
        public class AccountController : ControllerBase
        {
            private readonly AccountService _accountService;

            public AccountController(AccountService accountService)
            {
                _accountService = accountService;
            }

            [HttpPost("create")]
            public async Task<IActionResult> CreateAccount([FromBody] CreateAccountDto createAccountDto)
            {
                var account = await _accountService.CreateAccountAsync(createAccountDto.UserId, createAccountDto.StudentId);
                return Ok(account);
            }

            [HttpPost("transaction")]
            public async Task<IActionResult> RecordTransaction([FromBody] TransactionDto transactionDto)
            {
                var transaction = await _accountService.RecordTransactionAsync(transactionDto.AccountId, transactionDto.Amount, transactionDto.Type, transactionDto.Description);
                return Ok(transaction);
            }

            [HttpGet("details/{userId}")]
            public async Task<IActionResult> GetAccount(int userId)
            {
                var account = await _accountService.GetAccountAsync(userId);
                if (account == null)
                {
                    return NotFound();
                }

                return Ok(account);
            }
        }
}

