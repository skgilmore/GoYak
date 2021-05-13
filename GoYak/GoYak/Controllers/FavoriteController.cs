using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GoYak.Models;
using GoYak.Repositories;


namespace GoYak.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]

    public class FavoriteController : Controller
    {

        private readonly IFavoriteRepository _favoriteRepository;

        public FavoriteController(IFavoriteRepository favoriteRepository)
        {
            _favoriteRepository = favoriteRepository;
        }


        [HttpGet("getbyUserId/{id}")]
        public IActionResult Get(int id)
        {
            var f = _favoriteRepository.GetAllFavoritesForUser(id);
            if (f == null)
            {
                return NotFound();
            }
            return Ok(f);
        }

        [HttpPost("Add")]
        public IActionResult Post(Favorite favorite)
        {
            _favoriteRepository.Add(favorite);
            return CreatedAtAction("Details", new { id = favorite.id }, favorite);
        }

        [HttpDelete("Delete/{id}")]
        public IActionResult Delete(int id)
        {
            _favoriteRepository.Delete(id);
            return NoContent();
        }

      
    }
}