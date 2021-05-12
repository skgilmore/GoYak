import React, { useContext } from "react";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import { ReviewContext } from "../../providers/ReviewProvider";

export const ReviewDelete = ({ review }) => {
    const history = useHistory();
    const { deleteReview } = useContext(ReviewContext);

    return <Button type="button" onClick={() => {
        const confirmBox = window.confirm(
            "Do you really want to delete this Review?"
        )
        if (confirmBox === true) {
            deleteReview(review.id);
            //use a history.push to send it back to the list of comments

        }
    }} className="delete-button">
        Delete
                </Button>
}