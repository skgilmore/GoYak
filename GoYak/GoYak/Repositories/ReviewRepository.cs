using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GoYak.Repositories;
using GoYak.Models;
using GoYak.Repository;
using GoYak.Controllers;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using GoYak.Utilities;

namespace GoYak.Repositories
{
    public class ReviewRepository : BaseRepository, IReviewRepository
    { 
   public ReviewRepository(IConfiguration configuration) : base(configuration) { }

        public List<Review> GetAllReviews()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                       SELECT r.Id as reviewId, r.userId as userId, r.text, r.routeId 
				           
                        FROM Review r
                         Left JOIN User u ON r.userId = u.Id
                         LEFT JOIN Route rt ON r.routeId = rt.Id";
                    var reader = cmd.ExecuteReader();

                    var reviews = new List<Review>();

                    while (reader.Read())
                    {
                        Review review = new Review()
                        {
                            id = reader.GetInt32(reader.GetOrdinal("reviewId")),
                            routeId = reader.GetInt32(reader.GetOrdinal("routeId")),
                            text = reader.GetString(reader.GetOrdinal("text")),
                            user = new User()
                            {
                                Id = DbUtils.GetInt(reader, "UserId"),
                                FirebaseUserId = DbUtils.GetString(reader, "fireBaseUserId"),
                                Name = DbUtils.GetString(reader, "userName"),
                            }
                        };


                        reviews.Add(review);
                    }

                    reader.Close();

                    return reviews;
                }
            }
        }



        public List<Review> GetReviewByRouteId(int routeId)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                           SELECT r.id AS reviewId, r.routeId, r.userId, r.text, r.timeStamp,
                            rt.id AS routeId, rt.name as routeName,
                            u.id AS userId, u.name as userName, u.fireBaseUserId
                        FROM Review r
                        LEFT JOIN Route rt ON r.routeId = rt.id
                        LEFT JOIN [User] u ON r.userId = u.id
                        WHERE routeId = @routeid
                        ORDER BY r.timeStamp DESC
                    ";

                    cmd.Parameters.AddWithValue("@routeId", routeId);

                    SqlDataReader reader = cmd.ExecuteReader();

                    List<Review> reviews = new List<Review>();

                    while (reader.Read())
                    {
                        Review review = new Review()
                        {
                            id = reader.GetInt32(reader.GetOrdinal("reviewId")),
                            routeId = reader.GetInt32(reader.GetOrdinal("routeId")),
                            text = reader.GetString(reader.GetOrdinal("text")),
                            timeStamp = DbUtils.GetDateTime(reader, ("timeStamp")),   
                            user = new User()
                            {
                                Id = DbUtils.GetInt(reader, "UserId"),
                                FirebaseUserId = DbUtils.GetString(reader, "fireBaseUserId"),
                                Name = DbUtils.GetString(reader, "userName"),
                            }

                        };




                        reviews.Add(review);
                    }
                    reader.Close();
                    return reviews;
                }
            }
        }





        public void Add(Review review, int routeId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO Review (
                            text,  timeStamp, userId, routeId )
                        OUTPUT INSERTED.ID
                        VALUES (
                            @text, @timeStamp, @userId, @routeId )";
                    cmd.Parameters.AddWithValue("@text", review.text);
                    cmd.Parameters.AddWithValue("@timeStamp", review.timeStamp);   
                    cmd.Parameters.AddWithValue("@userId", review.userId);
                    cmd.Parameters.AddWithValue("@routeId", review.routeId);

                    review.id = (int)cmd.ExecuteScalar();


                }
            }
        }

     


        public void Update (Review review)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    UPDATE Review
                    SET text = @text
                    WHERE id = @id
                    ";

                    cmd.Parameters.AddWithValue("@text", review.text);
                    cmd.Parameters.AddWithValue("@id", review.id);

                    cmd.ExecuteNonQuery();

                }
            }
        }



        public Review GetReviewById(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT id, text, routeId, userId, timeStamp
                        FROM Review
                        WHERE Id = @id";

                    cmd.Parameters.AddWithValue("@id", id);

                    SqlDataReader reader = cmd.ExecuteReader();

                    if (reader.Read())
                    {
                        Review review = new Review()
                        {
                            id = reader.GetInt32(reader.GetOrdinal("id")),
                            text = reader.GetString(reader.GetOrdinal("text")),
                            routeId = reader.GetInt32(reader.GetOrdinal("routeId")),
                            timeStamp = reader.GetDateTime(reader.GetOrdinal("timeStamp")),
                            userId = reader.GetInt32(reader.GetOrdinal("userId"))
                        };

                        reader.Close();
                        return review;
                    }

                    reader.Close();
                    return null;
                }
            }
        }



        public void DeleteReview(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    DELETE FROM Review
                    WHERE Id = @id";

                    cmd.Parameters.AddWithValue("@id", id);

                    cmd.ExecuteNonQuery();
                }
            }
        }




    }
}
