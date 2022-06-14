using after_bank.Config;
using after_bank.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace after_bank.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserReleasesController : ControllerBase
    {
        private readonly ApplicationDbContext _dbcontext;

        public UserReleasesController(ApplicationDbContext dbcontext)
        {
            this._dbcontext = dbcontext;
        }

        // GET: api/<UsersController>
        [HttpGet]
        public async Task<ActionResult<List<UserRelease>>> Get()
        {
            return Ok(await _dbcontext.UserRelease.ToListAsync());
        }


        // GET api/<UsersController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UserRelease>> Get(int id)
        {
            var userRelease = await _dbcontext.UserRelease.FindAsync(id);
            if (userRelease == null)
                return BadRequest();
            return Ok(userRelease);
        }

        // POST api/<UsersController>
        [HttpPost]
        public async Task<ActionResult<List<UserRelease>>> Post([FromBody] UserRelease userRelease)
        {
            userRelease.Id = 0;

            //var user = await _dbcontext.User.FindAsync(userRelease.UserId);
            //var transaction = await _dbcontext.Transaction.FindAsync(userRelease.TransactionId);

            //userRelease.User = user;
            //userRelease.Transaction = transaction;

            //userRelease.User.UserReleases = null;
            //userRelease.Transaction.UserReleases = null;
            
            _dbcontext.UserRelease.Add(userRelease);
            await _dbcontext.SaveChangesAsync();

            return Ok(await _dbcontext.UserRelease.ToListAsync());
        }

        // PUT api/<UsersController>/5
        [HttpPut]
        public async Task<ActionResult> Put(UserRelease userRelease)
        {
            var dbobj = await _dbcontext.UserRelease.FindAsync(userRelease.Id);
            if (dbobj == null)
                return BadRequest();

            dbobj.UserId = userRelease.UserId;
            dbobj.TransactionId = userRelease.TransactionId;
            dbobj.OperationType = userRelease.OperationType;
            dbobj.CreatedAt = userRelease.CreatedAt;
            dbobj.Transaction = userRelease.Transaction;
            dbobj.User = userRelease.User;

            await _dbcontext.SaveChangesAsync();

            return Ok();
        }

        // DELETE api/<UsersController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var dbobj = await _dbcontext.UserRelease.FindAsync(id);
            if (dbobj == null)
                return BadRequest();

            _dbcontext.UserRelease.Remove(dbobj);
            await _dbcontext.SaveChangesAsync();

            return Ok();
        }
    }
}
