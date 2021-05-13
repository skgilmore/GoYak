using GoYak.Controllers;
using GoYak.Models;
using System.Collections.Generic;

namespace GoYak.Repositories
{
    public interface IFavoriteRepository
    {
        List<Favorite> GetAllFavoritesForUser(int id);
        void Delete(int id);
        void Add(Favorite favorite);
    }
}