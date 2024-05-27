// Data/AppDbContext.cs
using Microsoft.EntityFrameworkCore;
using TaskEntity = dotnet_api.Models.Task; // Alias to avoid conflict

namespace dotnet_api.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<TaskEntity> Tasks { get; set; }
    }
}
