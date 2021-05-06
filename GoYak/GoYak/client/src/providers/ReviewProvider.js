import React, { useState, createContext } from "react"

/* -------------------- ALLOW IMPORT OF CONTEXT TO TO BE USED BY INDIVIDUAL COMPONENTS-------------------- */
export const ReviewContext = createContext()

export const ReviewProvider = (props) => {
    const [reviews, setReviews] = useState([])

    const getReviews = () => {
        return fetch('http://localhost:8088/reviews')
            .then(res => res.json())
            .then(setReviews)
    }
    const getReviewsById = (id) => {
        return fetch(`http://localhost:8088/reviews/${id}?_expand=route`)
            .then(res => res.json())

    }

    const addReview = review => {
        return fetch(`http://localhost:8088/reviews`, {

            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(review)
        })
            .then(response => response.json())
            .then(getReviews)

    }
    const updateReview = review => {
        return fetch(`http://localhost:8088/reviews/${review.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(review)
        })
            .then(getReviews)
    }

    const deleteReview = reviewId => {
        return fetch(`http://localhost:8088/reviews/${reviewId}`, {
            method: "DELETE"
        })
            .then(getReviews)
    }
    /* -------------------- To make the cHats, and the cHat functions available to other components i.e. expose child elements -------------------- */

    return (
        <ReviewContext.Provider value={{
            reviews, getReviews, addReview, deleteReview, getReviewsById, updateReview

        }}>
            {props.children}
        </ReviewContext.Provider>
    )
}