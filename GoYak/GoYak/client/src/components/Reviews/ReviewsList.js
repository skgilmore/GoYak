import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReviewContext } from "../../providers/ReviewProvider";
import Review from "./Review";
import { useParams } from "react-router-dom";
import { Button } from "reactstrap"

const ReviewList = () => {
    const { reviews, getAllReviews } = useContext(ReviewContext);
    const { id } = useParams();

    useEffect(() => {
        getAllReviews(id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Maps through each PostCategoryUser object, sending 
    // them to be converted to HTML then prints them all out.
    return (
        <section>
            <Link to={`/review/getReviewByRouteId/${id}`} className="nav-link">

            </Link>
            {reviews.map((c) => (
                <Review key={c.id} review={c} />
            ))}


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
};

export default ReviewList;
