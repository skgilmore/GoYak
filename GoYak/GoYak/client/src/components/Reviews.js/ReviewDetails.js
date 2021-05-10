import React, { useContext, useEffect, useState } from "react";
import { ReviewContext } from "../../providers/ReviewProvider.js";
import { FormGroup, Label } from "reactstrap";
import { Link, useHistory, useParams } from "react-router-dom";


export const ReviewDetail = () => {

    const { getReviewById, updateReview } = useContext(ReviewContext)
    const [review, setReview] = useState({})
    const { reviewId } = useParams();
    const history = useHistory();

    const [isLoading, setIsLoading] = useState(true);


    //-------------------- FIND THE Review TO DISPLAY BASED ON Review ID ------------

    useEffect(() => {
        getReviewById(reviewId)
            .then((response) => {
                setReview(response)
            })
    }, [])

    //when a field changes, update state. The return will re-render and display based on the values in state
    //Controlled component
    const handleControlledInputChange = (event) => {
        /* When changing a state object or array,
            always create a copy, make changes, and then set state.*/
        const newReview = { ...review };

        /* review is an object with properties.
            Set the property to the new value using object bracket notation. */
        newReview[event.target.id] = event.target.value;
        // update state
        setReview(newReview);
    };


    const handleClickSaveReview = (event) => {

        setIsLoading(true);
        if (reviewId) {
            //PUT - update
            updateReview({
                id: reviewId,
                text: review.text
            })
            history.goBack();
        }
    };



    return (
        <>
            <form className="reviewForm">
                <h2 className="reviewForm__text">Edit your Review </h2>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="text">text: </label>
                        <input
                            type="text"
                            id="text"
                            onChange={handleControlledInputChange}
                            required
                            autoFocus
                            className="form-control"
                            placeholder="text"
                            value={review.text}
                        />
                    </div>
                </fieldset>
                <button
                    className="btn btn-primary"
                    disabled={isLoading}
                    onClick={(event) => {
                        event.preventDefault();
                        handleClickSaveReview();
                    }}
                >
                    Edit review
    </button>
            </form>
        </>
    );
}