using GoYak.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using GoYak.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Security.Claims;

namespace GoYak.Controllers
{
        [Route("api/[controller]")]
        [ApiController]

    public class ReviewController : ControllerBase
    {
        private readonly IReviewRepository _reviewRepository;
        private readonly IUserRepository _userRepository;

        public ReviewController(
            IReviewRepository reviewRepository,
            IUserRepository userRepository)
        {
            _reviewRepository = reviewRepository;
            _userRepository = userRepository;
        }
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_reviewRepository.GetAllReviews());
        }
        [HttpGet("edit/{id}")]
        public IActionResult GetReviewById (int id)
        {
            var review = _reviewRepository.GetReviewById(id);
            if (review != null)
            {
                return Ok(review);
            }
            return NotFound();
        }
     

        [HttpGet("GetReviewByRouteId/{routeId}")]
        public IActionResult GetReviewByRouteId(int routeId)
        {
            var review = _reviewRepository.GetReviewByRouteId(routeId);
            if (review == null)
            {
                return NotFound();
            }
            return Ok(review);
        }
        [HttpPost("add/{routeId}")]
        public IActionResult Post(Review review, int routeId)
        {
            var currentUserProfile = GetCurrentUserProfile();
            review.userId = currentUserProfile.Id;
            review.timeStamp = DateTime.Now;
            _reviewRepository.Add(review, routeId);
            return CreatedAtAction("Get", new { id = review.id }, review);
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var currentUserProfile = GetCurrentUserProfile();
            try
            {
                _reviewRepository.DeleteReview(id);
                return Ok();
            }
            catch (Exception)
            {
                return NotFound();
            }
        }
        [HttpPut("edit/{id}")]
        public IActionResult Put (Review review)
        {
      
            _reviewRepository.Update(review);
            return NoContent();
        }

        // Retrieves the current user object by using the provided firebaseId
        private User GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userRepository.GetByFirebaseUserId(firebaseUserId);
        }
    }
}