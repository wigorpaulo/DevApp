using after_bank.Models;
using Microsoft.EntityFrameworkCore;

namespace after_bank.Config
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
            //Database.EnsureCreated();
        }

        public DbSet<User> User { get; set; }
        public DbSet<Transaction> Transaction { get; set; }
        public DbSet<UserRelease> UserRelease { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasDefaultSchema("daniel_fontele");
            base.OnModelCreating(modelBuilder);
        }
    }
}
