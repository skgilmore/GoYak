import { Card, CardBody, CardText, CardImg, Modal, Jumbotron, Container } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { ReviewContext } from "../../providers/ReviewProvider";
import React, { useContext, useEffect, useState } from "react";
import ReviewList from "./ReviewsList";
import { ReviewDelete } from "./ReviewDelete";
import { ReviewEdit } from "./ReviewEdit";



const Review = ({ review }) => {

    let currentUser = JSON.parse(sessionStorage.getItem("userProfile"))



    return (
        <>
            <div>
                <Container fluid className="displaytop">
                    <Jumbotron fluid>
                        <h1 className="display-3">Fluid jumbotron</h1>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                        <CardImg className="reviewRouteImg" width="100%" src={review.url} alt="route" />
                    </Jumbotron>

                    <CardBody>

                        <CardText>
                            <Link to={`/route/${review.routeId}`}>
                                <h3>
                                    <small>
                                        Review: {review.text}
                                    </small>
                                </h3>
                            </Link>

                            <small>
                                Reviewer: {review.user.name}
                            </small>
                            {review.user.id === currentUser.id && <ReviewDelete key={review.id} review={review} />}
                            {review.user.id === currentUser.id && <ReviewEdit key={review.id} review={review} />}
                        </CardText>
                    </CardBody>
                </Container>
            </div>
        </>

    )
}

export default Review;
