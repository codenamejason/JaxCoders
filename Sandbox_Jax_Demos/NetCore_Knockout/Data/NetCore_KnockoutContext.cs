using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace NetCore_Knockout.Models
{
    public class NetCore_KnockoutContext : DbContext
    {
        public NetCore_KnockoutContext (DbContextOptions<NetCore_KnockoutContext> options)
            : base(options)
        {
        }

        public DbSet<Member> Member { get; set; }
    }
}
