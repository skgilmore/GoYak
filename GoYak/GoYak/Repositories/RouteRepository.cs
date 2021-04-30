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
                        SELECT r.id, r.name, r.difficultyLevel, r.length
                               
                          FROM Route r";

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

                        });
                    }
                    reader.Close();

                    return routes;
                }
            }
        }

        
                }
            }
        
