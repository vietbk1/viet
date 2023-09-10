using Microsoft.EntityFrameworkCore;

namespace Test_for_PBL.Models
{
    public class dbctx:DbContext
    {
        public dbctx(DbContextOptions<dbctx> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
    }
}
