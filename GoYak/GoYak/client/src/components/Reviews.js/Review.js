import { Card, CardBody, CardText, Button, ModalFooter, CardFooter, Form, FormGroup, Label, Input, ModalBody, ModalHeader, Modal } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { ReviewContext } from "../../providers/ReviewProvider";
import React, { useContext, useEffect, useState } from "react";
import ReviewList from "./ReviewsList";
import { ReviewDelete } from "./ReviewDelete";
import { ReviewEdit } from "./ReviewEdit";


const Review = ({ review }) => {

    let currentUser = JSON.parse(sessionStorage.getItem("userProfile"));

    //    if (review.timeStamp != "") {
    //      const event = new Date(review.timeStamp)
    //    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    //  review.timeStamp = event.toLocaleDateString(options)
    //}
    return (
        <>
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
                                Reviewer: {review.user.name}
                            </small>
                        </CardText>
                        {review.user.id === currentUser.id && <ReviewDelete key={review.id} review={review} />}
                        {review.user.id === currentUser.id && <ReviewEdit key={review.id} review={review} />}
                    </CardBody>
                </Card>
            </div >
            <div>

                <Modal>

                </Modal>
            </div>
        </>
    );
};

export default Review;
//    <ReviewList></ReviewList>
