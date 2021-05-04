using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GoYak.Controllers;
using GoYak.Models;
using GoYak.Repository;
using GoYak.Utilities;
using Microsoft.Extensions.Configuration;
// r.Lenth, ra.Id, ra.Label, ai.id,ai.label

namespace GoYak.Repositories
{
    public class RouteRepository : BaseRepository, IRouteRepository
    {
    
        public RouteRepository(IConfiguration configuration) : base(configuration) { }

      
        public List<Route> GetAll()
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

        
                }
            }

/*  Ammenity = new Ammenity()
                            {
                                id = (int)DbUtils.GetNullableInt(reader, "ammenityId"),
                                label = DbUtils.GetString(reader, "ammenityLabel"),
                            },
*/