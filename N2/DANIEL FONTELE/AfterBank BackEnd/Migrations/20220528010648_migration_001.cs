using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace after_bank.Migrations
{
    public partial class migration_001 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Users",
                table: "Users");

            migrationBuilder.DropPrimaryKey(
                name: "PK_UserRelease",
                table: "UserRelease");

            migrationBuilder.EnsureSchema(
                name: "daniel_fontele");

            migrationBuilder.RenameTable(
                name: "Users",
                newName: "users",
                newSchema: "daniel_fontele");

            migrationBuilder.RenameTable(
                name: "Transactions",
                newName: "Transactions",
                newSchema: "daniel_fontele");

            migrationBuilder.RenameTable(
                name: "UserRelease",
                newName: "UserReleases",
                newSchema: "daniel_fontele");

            migrationBuilder.AlterColumn<string>(
                name: "OperationType",
                schema: "daniel_fontele",
                table: "UserReleases",
                type: "character varying(1)",
                maxLength: 1,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "text");

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
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_users",
                schema: "daniel_fontele",
                table: "users");

            migrationBuilder.DropPrimaryKey(
                name: "PK_UserReleases",
                schema: "daniel_fontele",
                table: "UserReleases");

            migrationBuilder.RenameTable(
                name: "users",
                schema: "daniel_fontele",
                newName: "Users");

            migrationBuilder.RenameTable(
                name: "Transactions",
                schema: "daniel_fontele",
                newName: "Transactions");

            migrationBuilder.RenameTable(
                name: "UserReleases",
                schema: "daniel_fontele",
                newName: "UserRelease");

            migrationBuilder.AlterColumn<string>(
                name: "OperationType",
                table: "UserRelease",
                type: "text",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "character varying(1)",
                oldMaxLength: 1);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Users",
                table: "Users",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserRelease",
                table: "UserRelease",
                column: "Id");
        }
    }
}
