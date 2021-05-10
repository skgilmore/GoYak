using GoYak.Models;
using System.Collections.Generic;

namespace GoYak.Controllers
{
    public interface IReviewRepository
    {
        void Add(Review review, int routeId);
        void DeleteReview(int id);
        void Update (Review review);
        Review GetReviewById(int id);
        List<Review> GetAllReviews();
        List<Review> GetReviewByRouteId (int routeId);
        //void Update(Review review);
        // Review GetById(int id);
    }
}