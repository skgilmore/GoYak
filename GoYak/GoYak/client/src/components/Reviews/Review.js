import { Card, CardBody, CardText, CardImg, Modal, Jumbotron, Container } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { ReviewContext } from "../../providers/ReviewProvider";
import React, { useContext, useEffect, useState } from "react";
import ReviewList from "./ReviewsList";
import { ReviewDelete } from "./ReviewDelete";
import { ReviewEdit } from "./ReviewEdit";
import { ReviewImg } from "./ReviewImg";




const Review = ({ review }) => {

    let currentUser = JSON.parse(sessionStorage.getItem("userProfile"))




    return (
        <>
            <div>
                <Container fluid className="displaytop">
                    <Jumbotron>

                        <div>
                            <h1 className="display-3">{review.name}</h1>
                            <p className="lead">Read reviews  or add your own!</p>
                            <CardImg className="reviewRouteImg" width="100%" src={review.url} alt="route" />
                        </div>
                        <Card className="m-2 shadow postCard">
                            <CardText>
                                <small>
                                    <Link to={`/route/${review.routeId}`}>
                                        <h2>
                                            <small>
                                                Review: {review.text}
                                            </small>
                                        </h2>
                                    </Link>
                                    <h3>
                                        Reviewer: {review.user.name}
                                    </h3>
                                    <div class="float-right">
                                        {review.user.id === currentUser.id && <ReviewEdit key={review.id} review={review} />}
                                        <br>
                                        </br>
                                        {review.user.id === currentUser.id && <ReviewDelete key={review.id} review={review} />}
                                    </div>
                                </small>
                            </CardText>
                        </Card>
                    </Jumbotron>
                </Container>
            </div>
        </>
    )
}

export default Review;
