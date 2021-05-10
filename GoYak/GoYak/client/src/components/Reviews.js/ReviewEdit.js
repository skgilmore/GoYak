import React, { useContext } from "react";
import { Button, Form } from "reactstrap";
import { useHistory, useParams } from "react-router-dom";
import { ReviewContext } from "../../providers/ReviewProvider";

export const ReviewEdit = ({ review }) => {
    const history = useHistory();
    const { updateReview } = useContext(ReviewContext);
    // const { reviewId } = useParams();
    //   let reviewId = review.id

    debugger
    return <Button type="button" onClick={() => {

        updateReview(review)
    }} className="edit-button">
        Edit
            </Button>
}
//history.push(`/review/edit/${review.id}`)

