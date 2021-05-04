using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoYak.Models
{
    public class Route
    {
        public int id { get; set; }
        public string name { get; set; }
        public string difficultyLevel { get; set; }
        public string length { get; set; }

       public int? recAreaId { get; set; }
        public RecArea RecArea { get; set; }

                public int? ammenityId { get; set; }
        public Ammenity Ammenity { get; set; }
        public List<Ammenity> Ammenities { get; set; }
public List<RouteAmmenity> RouteAmmenity { get; set; }
    }
}
