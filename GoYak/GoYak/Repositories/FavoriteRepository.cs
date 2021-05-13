using GoYak.Controllers;
using GoYak.Models;
using GoYak.Repository;
using GoYak.Utilities;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoYak.Repositories
{
        public class FavoriteRepository : BaseRepository, IFavoriteRepository
        {
            public FavoriteRepository(IConfiguration configuration) : base(configuration) { }

            public List<Favorite> GetAllFavoritesForUser(int id)
            {
                using (SqlConnection conn = Connection)
                {
                    conn.Open();
                    using (SqlCommand cmd = conn.CreateCommand())
                    {
                        cmd.CommandText = @"
                    SELECT  f.id AS FavoriteId, f.routeId favoritedRouteId, f.userId as favoritedUserId,
                            rt.id as routeId, rt.name as routeName, rt.url
                            u.Is as userId, u.Name
                    FROM  Favorite f
                 LEFT JOIN  user u  ON u.id = f.userId
                 LEFT JOIN  route rt  ON rt.id = f.routeId
                     WHERE  favoritedUserId = @userId";

                        DbUtils.AddParameter(cmd, "@userId", id);

                        SqlDataReader reader = cmd.ExecuteReader();

                        var favorite = new List<Favorite>();
                        while (reader.Read())
                        {
                            favorite.Add(new Favorite()
                            {
                                id = DbUtils.GetInt(reader, "FavoriteId"),
                                User = DbUtils.IsDbNull(reader, "userId") ? null : new User()
                                {
                                    Id = DbUtils.GetInt(reader, "userId"),
                                    Name = DbUtils.GetString(reader, "userName"),

                                },
                                Route = new Route()
                                {
                                    id = DbUtils.GetInt(reader, "routeId"),
                                    name = DbUtils.GetString(reader, "routeName"),

                                },
                            });
                        }
                        reader.Close();
                        return favorite;
                    }
                }
            }

        public void Add(Favorite favorite)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO Favorite(routeId, userId)
                        OUTPUT INSERTED.ID
                        VALUES (@routeId, @userId)";

                    cmd.Parameters.AddWithValue("@routeId", favorite.routeId);
                    cmd.Parameters.AddWithValue("@userId", favorite.userId);

                    int id = (int)cmd.ExecuteScalar();

                    favorite.id = id;
                }
            }
        }

        public void Delete(int favoriteId)
            {
                using (SqlConnection conn = Connection)
                {
                    conn.Open();
                    using (SqlCommand cmd = conn.CreateCommand())
                    {
                        cmd.CommandText = @"
                        DELETE FROM Favorite
                        WHERE id = @favoriteId";

                        cmd.Parameters.AddWithValue("@favoriteId", favoriteId);

                        cmd.ExecuteNonQuery();
                    }
                }
            }

      
        }
    }
