import React, { useContext } from "react";
import { CardImg } from "reactstrap";
import { useHistory } from "react-router-dom";
import { ReviewContext } from "../../providers/ReviewProvider";

export const ReviewImg = ({ review }) => {
    const history = useHistory();

    return (

        <div>
            <h1 className="display-3">{review.name}</h1>
            <p className="lead">Read reviews  or add your own!</p>
            <CardImg className="reviewRouteImg" width="100%" src={review.url} alt="route" />
        </div>

    )
}




