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
        public List<Route> GetAllRoutes()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                       SELECT r.id as routeId, r.name, r.recAreaId, ra.id as recId, ra.url, 
                    ra.name as recName,f.id as favoriteId,f.userId, u.name as userName, f.routeId as favoriteRouteId
				           
                        FROM Route as r
                         Left JOIN RecArea as ra ON r.recAreaId = ra.id
                          Left JOIN Favorite as f on r.id = f.routeId 
                            Left JOIN [User] as u on f.userId = u.id";
                    var reader = cmd.ExecuteReader();

                    var routes = new List<Route>();

                                //id = DbUtils.GetInt(reader, "id"),
                    while (reader.Read())
                    {
                        var routeId = DbUtils.GetInt(reader, "routeId");

                        var existingRoute = routes.FirstOrDefault(r => r.routeId == routeId);
                        if (existingRoute == null)
                        {
                            existingRoute = new Route()
                            {
                                id = routeId,
                                name = DbUtils.GetString(reader, "name"),
                                User = DbUtils.IsDbNull(reader,"userId") ? null: new User()
                                {
                                    Id = DbUtils.GetInt(reader,"userId"),
                                   Name = DbUtils.GetString(reader, "userName"),
                                
                                },
                                RecArea = DbUtils.IsDbNull(reader, "recAreaId") ? null : new RecArea()
                                {
                                     id = DbUtils.GetInt(reader, "recId"),
                                    name = DbUtils.GetString(reader, "name"),
                                    url = DbUtils.GetString(reader, "url"),

                                },
                                Favorites = new List<Favorite>()
                            };

                            routes.Add(existingRoute);
                        }

                        if (DbUtils.IsNotDbNull(reader, "favoriteId"))
                        {
                            existingRoute.Favorites.Add(new Favorite()
                            {
                               id = DbUtils.GetInt(reader, "favoriteId"),
                                userId = DbUtils.GetInt(reader, "userId"),
                               routeId = routeId,
                            });
                        }
                    }

                    reader.Close();

                    return routes;
                }

            }
                               //routeId = DbUtils.GetInt(reader, "routeId"),
        }





        public List<Route> GetAllByDistance()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
               SELECT r.id as routeId, r.name, r.difficultyLevel, r.length,r.routeDistance, r.recAreaId, 
                                 rec.id as recArea, rec.url, rec.name
                               
                          FROM Route as r
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
                                name = DbUtils.GetString(reader, "Name"),
                                difficultyLevel = DbUtils.GetString(reader, "DifficultyLevel"),
                                length = DbUtils.GetString(reader, "Length"),
                                routeDistance = DbUtils.GetString(reader, "routeDistance"),
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


                    }

                    reader.Close();

                    return routes;
                }
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
    
            

/*  Ammenity = new Ammenity()
                            {
                                id = (int)DbUtils.GetNullableInt(reader, "ammenityId"),
                                label = DbUtils.GetString(reader, "ammenityLabel"),
                            },
*/