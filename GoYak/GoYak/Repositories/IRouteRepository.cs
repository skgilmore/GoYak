using GoYak.Models;
using System.Collections.Generic;

namespace GoYak.Repositories
{
    public interface IRouteRepository
    {
        List<Route> GetAll();
    }
}