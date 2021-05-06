using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoYak.Models
{
    public class Review
    {
        public int id { get; set; }
        public int userId { get; set; }
        public User name{ get; set; }
        public string text { get; set; }
        public DateTime timeStamp { get; set; }
        public int routeId { get; set; }
    }
}
