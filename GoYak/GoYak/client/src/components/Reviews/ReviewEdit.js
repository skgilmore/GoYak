import React, { useContext, useEffect, useState } from "react";
import { Button, CardFooter, Form, CardBody, CardHeader, CardText, FormGroup, Input, Label, Modal, Card, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import { ReviewContext } from "../../providers/ReviewProvider";
import { ReviewDetail } from "./ReviewDetails";


export const ReviewEdit = ({ review }) => {
    const history = useHistory();

    // Handles showing the delete button if the current user is viewing a post that they wrote. 
    const editButton = (reviewId) => {

        {
            return <Button type="button" onClick={() => {
                history.push(`/review/edit/${reviewId}`)
            }} className="edit-button">
                Edit
            </Button>
        }
    }

    return (
        <div>
            {editButton(review.id)}

        </div>
    );
};

//<CardHeader><Link to={`review/${review.id}`}></Link></CardHeader>
