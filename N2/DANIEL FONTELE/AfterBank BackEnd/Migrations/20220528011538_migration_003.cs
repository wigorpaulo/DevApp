using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace after_bank.Migrations
{
    public partial class migration_003 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_users",
                schema: "daniel_fontele",
                table: "users");

            migrationBuilder.DropPrimaryKey(
                name: "PK_UserReleases",
                schema: "daniel_fontele",
                table: "UserReleases");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Transactions",
                schema: "daniel_fontele",
                table: "Transactions");

            migrationBuilder.RenameTable(
                name: "users",
                schema: "daniel_fontele",
                newName: "daniel_fontele.users",
                newSchema: "daniel_fontele");

            migrationBuilder.RenameTable(
                name: "UserReleases",
                schema: "daniel_fontele",
                newName: "daniel_fontele.UserReleases",
                newSchema: "daniel_fontele");

            migrationBuilder.RenameTable(
                name: "Transactions",
                schema: "daniel_fontele",
                newName: "daniel_fontele.Transactions",
                newSchema: "daniel_fontele");

            migrationBuilder.AddPrimaryKey(
                name: "PK_daniel_fontele.users",
                schema: "daniel_fontele",
                table: "daniel_fontele.users",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_daniel_fontele.UserReleases",
                schema: "daniel_fontele",
                table: "daniel_fontele.UserReleases",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_daniel_fontele.Transactions",
                schema: "daniel_fontele",
                table: "daniel_fontele.Transactions",
                column: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_daniel_fontele.users",
                schema: "daniel_fontele",
                table: "daniel_fontele.users");

            migrationBuilder.DropPrimaryKey(
                name: "PK_daniel_fontele.UserReleases",
                schema: "daniel_fontele",
                table: "daniel_fontele.UserReleases");

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
                name: "daniel_fontele.UserReleases",
                schema: "daniel_fontele",
                newName: "UserReleases",
                newSchema: "daniel_fontele");

            migrationBuilder.RenameTable(
                name: "daniel_fontele.Transactions",
                schema: "daniel_fontele",
                newName: "Transactions",
                newSchema: "daniel_fontele");

            migrationBuilder.AddPrimaryKey(
                name: "PK_users",
                schema: "daniel_fontele",
                table: "users",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserReleases",
                schema: "daniel_fontele",
                table: "UserReleases",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Transactions",
                schema: "daniel_fontele",
                table: "Transactions",
                column: "Id");
        }
    }
}
