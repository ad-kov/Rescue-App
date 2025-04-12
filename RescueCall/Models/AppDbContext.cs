using Microsoft.EntityFrameworkCore;

namespace RescueCall.Models
{
    public class AppDbContext : DbContext
    {
        public DbSet<RescueRequest> RescueRequests { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
    }
}
