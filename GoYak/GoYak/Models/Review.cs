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
      //  public U
        public string text { get; set; }
        public string url { get;  set; }
        public DateTime? timeStamp { get; set; }
        public int routeId { get; set; }
       
   //     public User FirebaseUserId { get; set; }
        public User user { get; set; }
//public User User { get; internal set; }
    }
}
