using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using GoYak.Models;
using GoYak.Repository;

namespace GoYak.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _userRepository;
        public UserController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpGet("{firebaseUserId}")]
        public IActionResult GetByFirebaseUserId(string firebaseUserId)
        {
            var userProfile = _userRepository.GetByFirebaseUserId(firebaseUserId);
            if (userProfile == null)
            {
                return NotFound();
            }
            return Ok(userProfile);
        }

        [HttpPost]
        public IActionResult Register(User user)
        {
            // All newly registered users start out as a "user" user type (i.e. they are not admins)
          //  userProfile.UserTypeId = UserType.USER_TYPE_ID;
            //_userRepository.Add(userProfile);
            return CreatedAtAction(
                nameof(GetByFirebaseUserId), new { firebaseUserId = user.FirebaseUserId }, user);
        }
    }
}
