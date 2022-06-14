using after_bank.Config;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEntityFrameworkNpgsql()
    .AddDbContext<ApplicationDbContext>(options =>
        options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

#region CORS
builder.Services.AddCors();
#endregion

// Add services to the container.

builder.Services.AddControllers();
//builder.Services.AddDbContext<ApplicationDbContext>(options =>
//    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//builder.Services.AddControllers().AddJsonOptions(x =>
                //x.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.IgnoreCycles);

#region CORS
app.UseCors(c =>
{
    c.AllowAnyHeader()
     .AllowAnyMethod()
     .AllowAnyHeader()
     .SetIsOriginAllowed(url => true);
});

//builder.Services.AddCors(options =>
//{
//    options.AddDefaultPolicy(builder =>
//    {
//        builder.AllowAnyHeader()
//               .AllowAnyMethod()
//               .AllowAnyHeader()
//               .SetIsOriginAllowed(url => true);
//    });
//});
#endregion

//app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
