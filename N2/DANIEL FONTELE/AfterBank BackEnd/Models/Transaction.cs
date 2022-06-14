using System.Collections;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace after_bank.Models
{
    [Table("transactions")]
    public partial class Transaction
    {
        public Transaction()
        {
            UserReleases = new HashSet<UserRelease>();
        }
        [Key]
        [Column("id")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Column("type")]
        public char Type { get; set; }
        [Column("description")]
        public string Description { get; set; } = null!;
        [Column("value")]
        public decimal Value { get; set; }
        [Column("updated_at")]
        public DateTime? UpdatedAt { get; set; }
        [Column("created_at")]
        public DateTime? CreatedAt { get; set; }
        [Column("status")]
        public bool? Status { get; set; }

        public virtual ICollection<UserRelease>? UserReleases { get; set; }
    }
}
