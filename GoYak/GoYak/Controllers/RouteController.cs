using GoYak.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoYak.Controllers
{
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

        // GET: Route
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_routeRepository.GetAll());
        }

        // GET: Route/Details/5
        [HttpGet("{id}")]
        public IActionResult Details(int id)
        {
            return View();
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
