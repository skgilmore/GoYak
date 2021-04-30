import React from "react";
import { Card, CardBody, CardHeader, CardText, Button } from "reactstrap";
import { Link, useHistory } from "react-router-dom";

const Route = ({ route }) => {
    const history = useHistory();

    // Handles showing the delete button if the current user is viewing a route that they wrote. 

    /* const editButton = (postId) => {
         let currentUser = JSON.parse(sessionStorage.getItem("userProfile"));
         if (route.userProfile.id === currentUser.id) {
             return <Button type="button" onClick={() => {
                 history.push(`/route/edit/${postId}`)
             }} className="delete-button">
                 Edit
             </Button>
         }
     }
     */

    return (
        <Card className="m-2 shadow routeCard">
            <CardHeader><Link to={`route/${route.id}`}>{route.name}</Link></CardHeader>
            <CardBody>
                <CardText>
                    <small>
                        Length: {route.length}
                    </small>
                </CardText>
                <CardText>
                    <small>
                        Difficulty: {route.difficulty}
                    </small>
                </CardText>
            </CardBody>
        </Card>
    );
};
export default Route;
//{editButton(route.id)}

