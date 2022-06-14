using after_bank.Config;
using after_bank.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace after_bank.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionController : ControllerBase
    {
        private readonly ApplicationDbContext _dbcontext;

        public TransactionController(ApplicationDbContext dbcontext)
        {
            this._dbcontext = dbcontext;
        }

        // GET: api/<UsersController>
        [HttpGet]
        public async Task<ActionResult<List<Transaction>>> Get()
        {
            return Ok(await _dbcontext.Transaction.ToListAsync());
        }


        // GET api/<UsersController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Transaction>> Get(int id)
        {
            var transaction = await _dbcontext.Transaction.FindAsync(id);
            if (transaction == null)
                return BadRequest();
            return Ok(transaction);
        }

        // POST api/<UsersController>
        [HttpPost]
        public async Task<ActionResult<List<Transaction>>> Post([FromBody] Transaction transaction)
        {
            transaction.Id = 0;
            
            _dbcontext.Transaction.Add(transaction);
            await _dbcontext.SaveChangesAsync();

            return Ok(await _dbcontext.Transaction.ToListAsync());
        }

        // PUT api/<UsersController>/5
        [HttpPut]
        public async Task<ActionResult> Put(Transaction transaction)
        {
            var dbobj = await _dbcontext.Transaction.FindAsync(transaction.Id);
            if (dbobj == null)
                return BadRequest();

            dbobj.Type = transaction.Type;
            dbobj.Value = transaction.Value;
            dbobj.UpdatedAt = transaction.UpdatedAt;
            dbobj.Status = transaction.Status;
            dbobj.UserReleases = transaction.UserReleases;
            dbobj.CreatedAt = transaction.CreatedAt;
            dbobj.Description = transaction.Description;            

            await _dbcontext.SaveChangesAsync();

            return Ok();
        }

        // DELETE api/<UsersController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var dbobj = await _dbcontext.Transaction.FindAsync(id);
            if (dbobj == null)
                return BadRequest();

            _dbcontext.Transaction.Remove(dbobj);
            await _dbcontext.SaveChangesAsync();

            return Ok();
        }
    }
}
