import React, { useState, createContext, useContext } from "react";
import "firebase/auth";
import { UserProfileContext } from "./UserProfileProvider";
import { useHistory } from "react-router-dom";

export const ReviewContext = createContext();


export const ReviewProvider = (props) => {
    const [reviews, setReviews] = useState([]);
    const { getToken } = useContext(UserProfileContext);
    const history = useHistory();


    const getAllReviews = (routeId) => {
        return getToken()
            .then(token => fetch(`/api/review/getReviewByRouteId/${routeId}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(setReviews));
    };

    //.then(setReviews));
    // .then(setReviews));
    //adding a new comment
    const addReview = (review) => {
        return getToken().then((token) => {
            return fetch(`/api/review/add/${review.routeId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(review), //this stringifies our review object meaning it changes our object into string object
            })
                .then((res) => {
                    const response = res.json();
                    return response;
                }) //then send the stringified object(res), and we will use this in our PostForm after we add new object

                .then((reviewObject) => history.push(`/review/${reviewObject.id}`));

        });

    };;


    const deleteReview = (reviewId) =>
        getToken().then((token) =>
            fetch(`/api/review/${reviewId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }).then(history.go(0))

        );
    const updateReview = (review) => {

        return getToken().then((token) =>
            fetch(`/api/review/edit/${review.id}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(review),
            })
            //.then(history.push(`/api/review/getReviewByRouteId/${routeId}`))
        );
    };

    const getReviewById = (reviewId) => {
        return getToken().then((token) =>
            fetch(`/api/review/edit/${reviewId}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                //   body: JSON.stringify(review),

            }).then((res) => res.json())

        );
    }



    return (
        <ReviewContext.Provider value={{ reviews, getAllReviews, deleteReview, addReview, updateReview, getReviewById }}>
            {props.children}
        </ReviewContext.Provider>
    );
};
