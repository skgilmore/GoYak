import React, { useContext, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Button } from "reactstrap";

//import { Button } from "reactstrap-bootstrap";
import { FavoriteContext } from "../../providers/FavoriteProvider";

export const AddFavorite = ({ route }) => {
    const { addFavorite, getFavoritesByUserProfileId } = useContext(FavoriteContext);
    const { userId } = useParams();
    const history = useHistory();
    let currentUser = JSON.parse(sessionStorage.getItem("userProfile"));
    //  const userId = currentUser;


    // Modal - setting states
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Function for the 'Add Favorite' button
    const handleAddFavorite = () => {
        const favoriteObj = {
            userId: currentUser,
            routeId: route.id
        }
        addFavorite(favoriteObj)
            .then(getFavoritesByUserProfileId(userId))
            .then(handleClose())
        console.log("add favorite")
    }

    // JSX for the 'Add Favorite' button
    return (
        <>
            <Button onClick={handleAddFavorite} className="favorite-btn">Add Favorite</Button>
        </>
    )
};