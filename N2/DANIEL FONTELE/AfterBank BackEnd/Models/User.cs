using System.Collections;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace after_bank.Models
{
    [Table("users")]
    public partial class User
    {
        public User()
        {
            UserReleases = new HashSet<UserRelease>();
        }
        [Key]
        [Column("id")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Column("username")]
        public string Username { get; set; } = null!;
        [Column("password")]
        public string Password { get; set; } = null!;
        [Column("status")]
        public bool? Status { get; set; }

        public virtual ICollection<UserRelease>? UserReleases { get; set; }
    }
}
