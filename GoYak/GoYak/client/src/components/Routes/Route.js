import React from "react";
import { Card, CardBody, CardHeader, CardText, Button, CardImg, CardDeck } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import RouteList from "./RouteList";

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
    /*
        const displayAmmenities2 =
            route.routeAmmenity.map((ammenity) => ammenity.ammenityLabel);
        console.log(displayAmmenities2, "ams list on route.js?")
        */
    console.log(route, "route")


    const mapAms = route.routeAmmenity
    if (route.recArea.url === null) {
        let defaultRoutePic = "https://cdn.shopify.com/s/files/1/0071/1815/9930/files/get_outside_logo.png?height=628&pad_color=fff&v=1530989815&width=1200"
        route.recArea.url = defaultRoutePic
    }

    return (
        <>
            <CardDeck className="routeCardDeck">
                <Card className="m-2 shadow routeCard">
                    <CardImg className="routeImg" top width="100%" src={route.recArea?.url} alt="route" />
                    <CardHeader><Link to={`route/${route.id}`}>{route.name}</Link></CardHeader>
                    <CardBody>
                        <CardText style={{ textTransform: 'capitalize' }}>
                            <small>
                                Length: {route.length}
                            </small>
                        </CardText>
                        <CardText style={{ textTransform: 'capitalize' }}>
                            <small>
                                Difficulty: {route.difficultyLevel}
                            </small>
                        </CardText>
                        <CardText style={{ textTransform: 'capitalize', padding: 10, marginHorizontal: 10 }}>

                            <small>
                                Amenity:
                            <li>
                                    {route.routeAmmenity.map((ammenity) => ammenity.ammenityLabel).join(" , ")}
                                </li>
                            </small>


                        </CardText>
                    </CardBody>
                </Card>
            </CardDeck >
        </>
    );
};
export default Route;
//{editButton(route.id)}

