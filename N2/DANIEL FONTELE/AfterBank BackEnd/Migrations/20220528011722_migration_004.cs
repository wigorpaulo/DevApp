using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace after_bank.Migrations
{
    public partial class migration_004 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_daniel_fontele.UserReleases",
                schema: "daniel_fontele",
                table: "daniel_fontele.UserReleases");

            migrationBuilder.RenameTable(
                name: "daniel_fontele.UserReleases",
                schema: "daniel_fontele",
                newName: "daniel_fontele.lancamentos",
                newSchema: "daniel_fontele");

            migrationBuilder.AddPrimaryKey(
                name: "PK_daniel_fontele.lancamentos",
                schema: "daniel_fontele",
                table: "daniel_fontele.lancamentos",
                column: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_daniel_fontele.lancamentos",
                schema: "daniel_fontele",
                table: "daniel_fontele.lancamentos");

            migrationBuilder.RenameTable(
                name: "daniel_fontele.lancamentos",
                schema: "daniel_fontele",
                newName: "daniel_fontele.UserReleases",
                newSchema: "daniel_fontele");

            migrationBuilder.AddPrimaryKey(
                name: "PK_daniel_fontele.UserReleases",
                schema: "daniel_fontele",
                table: "daniel_fontele.UserReleases",
                column: "Id");
        }
    }
}
