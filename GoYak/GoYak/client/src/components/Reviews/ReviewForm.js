import React, { useContext, useEffect, useState } from "react";
import { ReviewContext } from "../../providers/ReviewProvider.js";
import { FormGroup, Label } from "reactstrap";

export const ReviewForm = () => {
    const { addReview } = useContext(ReviewContext);

    //With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.
    //Define the initial state of the form inputs with useState()
    const [review, setReview] = useState({
        text: "",
    });

    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(false);

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



    const handleClickSaveReview = () => {
        console.log(review);

        const text = review.text;


        if (text === "") {
            window.alert("Please type in text of review");
        } else {
            //disable the button - no extra clicks
            setIsLoading(true); //this ensures the user cannot repeatedly click the button while the API is being updated

            //POST - add
            addReview({
                //if not, this must be a new note so the input fields will be empty
                text: review.text,

            });
            //after we add the new review object, we then pass that new review object to our .then() function
            //then we grab the id of the new review
            //and we push the id of the new review object to our url
        }
    };

    return (
        <>
            <form className="reviewForm">
                <h2 className="reviewForm__text">Add new review</h2>

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
                    Add review
        </button>
            </form>
        </>
    );
};

export default ReviewForm;
