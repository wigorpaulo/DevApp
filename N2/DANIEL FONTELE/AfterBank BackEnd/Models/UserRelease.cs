using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace after_bank.Models
{
    [Table("user_releases")]
    public partial class UserRelease
    {
        [Key]
        [Column("id")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Column("user_id")]
        public int? UserId { get; set; }
        [Column("transaction_id")]        
        public int? TransactionId { get; set; }
        [Column("operation_type")]
        public char? OperationType { get; set; }
        [Column("created_at")]
        public DateTime? CreatedAt { get; set; }

        public virtual Transaction? Transaction { get; set; } = null!;
        public virtual User? User { get; set; } = null!;
    }
}
