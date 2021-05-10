using GoYak.Controllers;
using GoYak.Models;
using GoYak.Utilities;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoYak.Repository
{
    public class UserRepository : BaseRepository, IUserRepository
    {
        public UserRepository(IConfiguration configuration) : base(configuration) { }

        public User GetByFirebaseUserId(string firebaseUserId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT up.id, up.firebaseUserId, up.name AS userName, up.email
                          FROM [User] up
                         WHERE firebaseUserId = @firebaseuserId";

                    DbUtils.AddParameter(cmd, "@firebaseUserId", firebaseUserId);

                    User User = null;

                    var reader = cmd.ExecuteReader();
                    if (reader.Read())
                    {
                        User = new User()
                        {
                            Id = DbUtils.GetInt(reader, "id"),
                            FirebaseUserId = DbUtils.GetString(reader, "firebaseUserId"),
                            Name = DbUtils.GetString(reader, "userName"),
                            Email = DbUtils.GetString(reader, "email"),
                         
                        };
                    }
                    reader.Close();

                    return User;
                }
            }
        }

        public void Add(User user)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO [User] (FirebaseUserId, Name, Email, UserName, Zip)
                                        OUTPUT INSERTED.ID
                                        VALUES (@FirebaseUserId, @Name, @Email, @UserName, @Zip)";
                    DbUtils.AddParameter(cmd, "@FirebaseUserId", user.FirebaseUserId);
                    DbUtils.AddParameter(cmd, "@Name", user.Name);
                    DbUtils.AddParameter(cmd, "@Email", user.Email);
                    DbUtils.AddParameter(cmd, "@UserName", user.UserName);
                    DbUtils.AddParameter(cmd, "@Zip", user.Zip);




                    user.Id = (int)cmd.ExecuteScalar();
                }
            }
        }
    }
}
