using GoYak.Models;
using System.Collections.Generic;

namespace GoYak.Controllers
{
    public interface IReviewRepository
    {
        void Add(Review review);
        void DeleteReview(int id);
        void EditReview(Review review);
        Review GetReviewById(int id);
        List<Review> GetAllReviews();
        List<Review> GetReviewByRouteId (int routeId);
    }
}