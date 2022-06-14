using after_bank.Models;
using Microsoft.EntityFrameworkCore;

namespace after_bank.ModelsAuto
{
    public partial class migration_009 : DbContext
    {
        public migration_009()
        {
        }

        public migration_009(DbContextOptions<migration_009> options)
            : base(options)
        {
        }

        public virtual DbSet<Transaction> Transactions { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;
        public virtual DbSet<UserRelease> UserReleases { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseNpgsql("User ID=rnixveopvxgapd;Password=924bbc9ac4ad9542594411d69b19c30138f3a138e3750014d124af014593ca22;Host=ec2-52-86-56-90.compute-1.amazonaws.com;Port=5432;Database=du4k9vug9n84e;Pooling=true;SSL Mode=Require;TrustServerCertificate=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasPostgresExtension("uuid-ossp");

            modelBuilder.Entity<Transaction>(entity =>
            {
                entity.ToTable("transactions", "daniel_fontele");

                entity.Property(e => e.Id)
                    .ValueGeneratedNever()
                    .HasColumnName("id");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.Description)
                    .HasColumnType("character varying")
                    .HasColumnName("description");

                entity.Property(e => e.Status)
                    .HasColumnType("bit(1)")
                    .HasColumnName("status");

                entity.Property(e => e.Type)
                    .HasMaxLength(1)
                    .HasColumnName("type");

                entity.Property(e => e.UpdatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("updated_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.Value)
                    .HasPrecision(10, 2)
                    .HasColumnName("value");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("users", "daniel_fontele");

                entity.Property(e => e.Id)
                    .ValueGeneratedNever()
                    .HasColumnName("id");

                entity.Property(e => e.Password)
                    .HasMaxLength(50)
                    .HasColumnName("password");

                entity.Property(e => e.Status)
                    .HasColumnType("bit(1)")
                    .HasColumnName("status");

                entity.Property(e => e.Username)
                    .HasColumnType("character varying")
                    .HasColumnName("username");
            });

            modelBuilder.Entity<UserRelease>(entity =>
            {
                entity.ToTable("user_releases", "daniel_fontele");

                entity.Property(e => e.Id)
                    .ValueGeneratedNever()
                    .HasColumnName("id");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.OperationType)
                    .HasMaxLength(1)
                    .HasColumnName("operation_type");

                entity.Property(e => e.TransactionId).HasColumnName("transaction_id");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.Transaction)
                    .WithMany(p => p.UserReleases)
                    .HasForeignKey(d => d.TransactionId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("user_releases_transaction_id_fkey");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.UserReleases)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("user_releases_user_id_fkey");
            });

            modelBuilder.HasSequence("id_seq", "daniel_geahn");

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
