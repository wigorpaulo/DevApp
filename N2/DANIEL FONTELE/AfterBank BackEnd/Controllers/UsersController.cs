using after_bank.Config;
using after_bank.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using after_bank.Validations;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace after_bank.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _dbcontext;

        public UserController(ApplicationDbContext dbcontext)
        {
            this._dbcontext = dbcontext;
        }

        // GET: api/<UsersController>
        [HttpGet]
        public async Task<ActionResult<List<User>>> Get()
        {
            return Ok(await _dbcontext.User.ToListAsync());
        }


        // GET api/<UsersController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> Get(int id)
        {
            var user = await _dbcontext.User.FindAsync(id);
            if (user == null)
                return BadRequest();
            return Ok(user);
        }

        // POST api/<UsersController>
        [HttpPost]
        public async Task<ActionResult<List<User>>> Post([FromBody] User user)
        {
            if (UserValidation.PostValidation(user))
                return BadRequest();
            
            user.Id = 0;
            _dbcontext.User.Add(user);
            await _dbcontext.SaveChangesAsync();

            return Ok(await _dbcontext.User.ToListAsync());
        }

        // PUT api/<UsersController>/5
        [HttpPut]
        public async Task<ActionResult> Put(User user)
        {
            var dbobj = await _dbcontext.User.FindAsync(user.Id);
            if (dbobj == null)
                return BadRequest();

            dbobj.Username = user.Username;
            dbobj.Password = user.Password;
            dbobj.Status = user.Status;
            dbobj.UserReleases = user.UserReleases;

            await _dbcontext.SaveChangesAsync();

            return Ok();
        }

        // DELETE api/<UsersController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var dbobj = await _dbcontext.User.FindAsync(id);
            if (dbobj == null)
                return BadRequest();

            _dbcontext.User.Remove(dbobj);
            await _dbcontext.SaveChangesAsync();

            return Ok();
        }

        [HttpGet("{id}/releases")]
        public async Task<ActionResult<List<UserRelease>>> GetReleases(int id)
        {
            var user = await _dbcontext.User.FindAsync(id);
            if (user == null)
                return BadRequest();

            return Ok(user.UserReleases);
        }
    }
}
