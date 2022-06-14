using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace after_bank.Migrations
{
    public partial class migration_005 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_daniel_fontele.lancamentos",
                schema: "daniel_fontele",
                table: "daniel_fontele.lancamentos");

            migrationBuilder.RenameTable(
                name: "daniel_fontele.lancamentos",
                schema: "daniel_fontele",
                newName: "daniel_fontele.user_releases",
                newSchema: "daniel_fontele");

            migrationBuilder.AddPrimaryKey(
                name: "PK_daniel_fontele.user_releases",
                schema: "daniel_fontele",
                table: "daniel_fontele.user_releases",
                column: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_daniel_fontele.user_releases",
                schema: "daniel_fontele",
                table: "daniel_fontele.user_releases");

            migrationBuilder.RenameTable(
                name: "daniel_fontele.user_releases",
                schema: "daniel_fontele",
                newName: "daniel_fontele.lancamentos",
                newSchema: "daniel_fontele");

            migrationBuilder.AddPrimaryKey(
                name: "PK_daniel_fontele.lancamentos",
                schema: "daniel_fontele",
                table: "daniel_fontele.lancamentos",
                column: "Id");
        }
    }
}
