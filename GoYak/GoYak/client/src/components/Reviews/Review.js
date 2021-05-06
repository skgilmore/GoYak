import { Card, CardBody, CardText, Button } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { ReviewContext } from "../../providers/ReviewProvider";
import React, { useContext } from "react";


const Review = ({ review }) => {
    const history = useHistory();

    const { deleteReview } = useContext(ReviewContext);


    const reviewDelete = () => {
        let currentUser = JSON.parse(sessionStorage.getItem("userProfile"));
        if (review.userId === currentUser.id) {
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
    }



    if (review.timeStamp != "") {
        const event = new Date(review.timeStamp)
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        review.timeStamp = event.toLocaleDateString(options)
    }
    return (
        <div>
            <Link to={`/route/${review.routeId}`}>
                <h3>
                    <small>
                        Review: {review.text}
                    </small>
                </h3>
            </Link>
            <Card className="m-4">
                <CardBody>
                    <CardText>
                        <small>
                            Reviewer: {review.name.name}
                        </small>
                    </CardText>

                    {reviewDelete(review.id)}
                </CardBody>
            </Card>
        </div >
    );
};

export default Review;
