using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GoYak.Controllers;
using GoYak.Models;
using GoYak.Repository;
using GoYak.Utilities;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
// r.Lenth, ra.Id, ra.Label, ai.id,ai.label

namespace GoYak.Repositories
{
    public class RouteRepository : BaseRepository, IRouteRepository
    {
    
        public RouteRepository(IConfiguration configuration) : base(configuration) { }

            public List<Route> GetAllWithAmmenities()
        {
                using (var conn = Connection)
                {
                    conn.Open();
                    using (var cmd = conn.CreateCommand())
                    {
                        cmd.CommandText = @"
               SELECT r.id as routeId, r.name, r.difficultyLevel, r.length, r.recAreaId, ra.id , 
                                ai.id as ammenityId, rec.id as recArea, rec.url, rec.name, ai.label as ammenityLabel
                               
                          FROM Route as r
                            Left join routeAmenities  as ra on r.ammenityId = r.ammenityId
                            left join Ammenity as ai on ra.ammenityId = ai.id
                            left join RecArea as rec on r.recAreaId = rec.id";

                        var reader = cmd.ExecuteReader();

                        var routes = new List<Route>();
                        while (reader.Read())
                        {
                            var routeId = DbUtils.GetInt(reader, "routeId");

                            var existingRoute = routes.FirstOrDefault(r => r.id == routeId);
                            if (existingRoute == null)
                            {
                            existingRoute = new Route()
                            {
                                id = routeId,
                                //id = DbUtils.GetInt(reader, "Id"),
                                name = DbUtils.GetString(reader, "Name"),
                                difficultyLevel = DbUtils.GetString(reader, "DifficultyLevel"),
                                length = DbUtils.GetString(reader, "Length"),
                                RecArea = DbUtils.IsDbNull(reader, "recArea") ? null : new RecArea()
                                {
                                   // id = DbUtils.GetInt(reader, "recId"),
                                    name = DbUtils.GetString(reader, "name"),
                                    url = DbUtils.GetString(reader, "url"),

                                },
                                        RouteAmmenity = new List<RouteAmmenity>()
                                };

                                routes.Add(existingRoute);
                            }

                            if (DbUtils.IsNotDbNull(reader, "ammenityId"))
                            {
                                existingRoute.RouteAmmenity.Add(new RouteAmmenity()
                                {
                                    ammenityId = DbUtils.GetInt(reader, "ammenityId"),
                                    ammenityLabel = DbUtils.GetString(reader, "ammenitylabel"),
                                    routeId = routeId,
                                });
                            }
                        }

                        reader.Close();

                        return routes;
                    }
                }
            }
        }




        /*      public List<Route> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                       SELECT r.id, r.name, r.difficultyLevel, r.length, ra.id as recId, 
                                ai.id as ammenityId, rec.url, rec.name as recName, ai.label as ammenityLabel
                               
                          FROM Route as r
Left join routeAmenities  as ra on r.ammenityId = r.ammenityId
left join Ammenity as ai on ra.ammenityId = ai.id
left join RecArea as rec on r.recAreaId = rec.id";

                    var reader = cmd.ExecuteReader();

                    var routes = new List<Route>();
                    while (reader.Read())
                    {
                        {
                            routes.Add(NewRouteFromDb(reader));
                        }


                    }
                        return routes;
                        reader.Close();
                }
            }
        }
            private Route NewRouteFromDb(SqlDataReader reader)
            {
            return new Route()
            {
                id = DbUtils.GetInt(reader, "Id"),
                name = DbUtils.GetString(reader, "name"),
                difficultyLevel = DbUtils.GetString(reader, "difficultyLevel"),
                length = DbUtils.GetString(reader, "length"),
                RecArea = DbUtils.IsDbNull(reader, "recId") ? null : new RecArea()
                {
                    id = DbUtils.GetInt(reader, "recId"),
                    name = DbUtils.GetString(reader, "recName"),
                    url = DbUtils.GetString(reader, "url"),

                },
                Ammenity = DbUtils.IsDbNull(reader, "ammenityId") ? null : new Ammenity()
                {
                    id = DbUtils.GetInt(reader, "ammenitiyId"),
                    label = DbUtils.GetNullableString(reader, "ammenitylabel")

                },
            };
            }
  */
        /*   public List<Route> GetAll()
           {
               using (var conn = Connection)
               {
                   conn.Open();
                   using (var cmd = conn.CreateCommand())
                   {
                       cmd.CommandText = @"
                              SELECT r.id, r.name, r.difficultyLevel, r.length, ra.id as recId, 
                                   ai.id as ammenityId, ra.url, ra.name, ai.label as ammenityLabel

                             FROM Route r
                               LEFT JOIN routeAmenities on r.recAreaId = r=ra.Id
                               LEFT JOIN routeAmenities on r.ammenityId = r=ai.Id
                               LEFT JOIN RecArea ra on r.recAreaId = ra.Id
                               LEFT JOIN Ammenity ai on r.ammenityId = ai.Id";

                       var reader = cmd.ExecuteReader();

                       var routes = new List<Route>();
                       while (reader.Read())
                       {
                           routes.Add(new Route()
                           {
                               id = DbUtils.GetInt(reader, "Id"),
                               name = DbUtils.GetString(reader, "Name"),
                               difficultyLevel = DbUtils.GetString(reader, "DifficultyLevel"),
                               length = DbUtils.GetString(reader, "Length"),
                               Ammenity = DbUtils.IsDbNull(reader, "ammenityId") ? null : new Ammenity() 
                               {
                                   id = DbUtils.GetInt(reader, "ammenityId"),
                                   label = DbUtils.GetString(reader, "ammenityLabel"),
                               },

                               RecArea = DbUtils.IsDbNull(reader, "recId") ? null :  new RecArea()
                               {
                                   id = DbUtils.GetInt(reader, "recId"),
                                   name = DbUtils.GetString(reader, "name"),
                                   url = DbUtils.GetString(reader, "url"),


                               },

                           });
                       }
                       reader.Close();

                       return routes;
                   }
               }
           }

          */
    }
            

/*  Ammenity = new Ammenity()
                            {
                                id = (int)DbUtils.GetNullableInt(reader, "ammenityId"),
                                label = DbUtils.GetString(reader, "ammenityLabel"),
                            },
*/