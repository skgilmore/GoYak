using GoYak.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoYak.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class RouteController : Controller
    {
        private readonly IRouteRepository _routeRepository;
        public RouteController(
            IRouteRepository routeRepository)
        {
            _routeRepository = routeRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_routeRepository.GetAllRoutes());
        }

        [HttpGet("routeAmmenities")]
        public IActionResult GetAllWithAmmenities()
        {
            return Ok(_routeRepository.GetAllWithAmmenities());
        }
        // GET: Route/Details/5
        [HttpGet("{id}")]
        public IActionResult Details(int id)
        {
            return View();
        }
        [HttpGet("distance")]
        public IActionResult GetAllByDistance()
        {
            return Ok(_routeRepository.GetAllByDistance());
        }
      

        /*
        // POST: Route/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

   

        // POST: Route/Edit/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

     
        // POST: Route/Delete/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }*/
    }
}
