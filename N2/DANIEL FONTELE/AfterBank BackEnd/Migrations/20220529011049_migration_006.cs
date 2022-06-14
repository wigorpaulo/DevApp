using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace after_bank.Migrations
{
    public partial class migration_006 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_daniel_fontele.users",
                schema: "daniel_fontele",
                table: "daniel_fontele.users");

            migrationBuilder.DropPrimaryKey(
                name: "PK_daniel_fontele.user_releases",
                schema: "daniel_fontele",
                table: "daniel_fontele.user_releases");

            migrationBuilder.DropPrimaryKey(
                name: "PK_daniel_fontele.Transactions",
                schema: "daniel_fontele",
                table: "daniel_fontele.Transactions");

            migrationBuilder.RenameTable(
                name: "daniel_fontele.users",
                schema: "daniel_fontele",
                newName: "users",
                newSchema: "daniel_fontele");

            migrationBuilder.RenameTable(
                name: "daniel_fontele.user_releases",
                schema: "daniel_fontele",
                newName: "user_releases",
                newSchema: "daniel_fontele");

            migrationBuilder.RenameTable(
                name: "daniel_fontele.Transactions",
                schema: "daniel_fontele",
                newName: "transactions",
                newSchema: "daniel_fontele");

            migrationBuilder.AddPrimaryKey(
                name: "PK_users",
                schema: "daniel_fontele",
                table: "users",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_user_releases",
                schema: "daniel_fontele",
                table: "user_releases",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_transactions",
                schema: "daniel_fontele",
                table: "transactions",
                column: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_users",
                schema: "daniel_fontele",
                table: "users");

            migrationBuilder.DropPrimaryKey(
                name: "PK_user_releases",
                schema: "daniel_fontele",
                table: "user_releases");

            migrationBuilder.DropPrimaryKey(
                name: "PK_transactions",
                schema: "daniel_fontele",
                table: "transactions");

            migrationBuilder.RenameTable(
                name: "users",
                schema: "daniel_fontele",
                newName: "daniel_fontele.users",
                newSchema: "daniel_fontele");

            migrationBuilder.RenameTable(
                name: "user_releases",
                schema: "daniel_fontele",
                newName: "daniel_fontele.user_releases",
                newSchema: "daniel_fontele");

            migrationBuilder.RenameTable(
                name: "transactions",
                schema: "daniel_fontele",
                newName: "daniel_fontele.Transactions",
                newSchema: "daniel_fontele");

            migrationBuilder.AddPrimaryKey(
                name: "PK_daniel_fontele.users",
                schema: "daniel_fontele",
                table: "daniel_fontele.users",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_daniel_fontele.user_releases",
                schema: "daniel_fontele",
                table: "daniel_fontele.user_releases",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_daniel_fontele.Transactions",
                schema: "daniel_fontele",
                table: "daniel_fontele.Transactions",
                column: "Id");
        }
    }
}
