import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { ReviewContext } from "../../providers/ReviewProvider";
import Review from "./Review";
import { useParams } from "react-router-dom";
import { Button, Jumbotron, CardImg } from "reactstrap"
import { deleteReview } from "./ReviewDelete"
import { ReviewImg } from "./ReviewImg";


const ReviewList = () => {
    const { reviews, getAllReviews, deleteReview } = useContext(ReviewContext);
    const { id } = useParams();
    // const history = useHistory();
    useEffect(() => {
        getAllReviews(id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    console.log(reviews, "where you at")



    // Maps through each Review object, sending 
    // them to be converted to HTML then prints them all out.
    //{review.user.id === currentUser.id && <ReviewEdit key={review.id} review={review} />}
    return (
        <section>


            {reviews?.map((review) => {
                return <Review key={review.id} review={review}
                />
            }
            )}


            <Link to={`/review/add/${id}`} className="nav-link">
                <Button>

                    <Button style={{
                        color: "black",
                    }}>
                        <p>Add A Review</p>
                    </Button>

                </Button>
            </Link>


        </section >
    );
}

//{deleteReview && <a href="/delete">delete</a>}

export default ReviewList;