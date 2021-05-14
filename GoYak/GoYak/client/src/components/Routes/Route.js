import React, { useContext, useState } from "react";
//import { Button, Modal, Card, Row, Col } from "react-bootstrap";
import { CardBody, CardHeader, CardText, Modal, Button, Card, Row, Col, CardImg, CardDeck } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import RouteList from "./RouteList";
import RouteAmmenities from "./RoutesByAmmenities";
import { AddFavorite } from "./AddFavorite"
import { FavoriteContext } from "../../providers/FavoriteProvider"
import { unstable_concurrentAct } from "react-dom/cjs/react-dom-test-utils.development";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



const Route = ({ route }) => {
    const { addFavorite, getFavoritesByUserProfileId, favorites } = useContext(FavoriteContext);
    const history = useHistory();

    let currentUser = JSON.parse(sessionStorage.getItem("userProfile"))
    let userId = currentUser

    const displayAmmenities2 =
        route.routeAmmenity?.map((ammenity) => ammenity.ammenityLabel);


    const handleAddFavorite = () => {
        const favoriteObj = {
            userId: userId.id,
            routeId: route.id
        }
        addFavorite(favoriteObj)
            .then(getFavoritesByUserProfileId(userId))
        console.log("add favorite")
    }
    const mapAms = route.routeAmmenity
    if (route.recArea.url === null) {
        let defaultRoutePic = "https://cdn.shopify.com/s/files/1/0071/1815/9930/files/get_outside_logo.png?height=628&pad_color=fff&v=1530989815&width=1200"
        route.recArea.url = defaultRoutePic
    }


    return (
        <><div>

            <CardDeck className="routeCardDeck">
                <Card className="m-2 shadow routeCard">
                    <CardImg className="routeImg" top width="100%" src={route.recArea?.url} alt="route" />
                    <div class="card-img-overlay ">
                        <Button className="favorite-btn, float-right" onClick={handleAddFavorite}>
                            <FontAwesomeIcon size="3x" icon="heart" />
                        </Button>
                    </div>

                    <CardHeader>

                        <Link to={`/review/getReviewByRouteId/${route.id}`}>{route.name}</Link>
                    </CardHeader>

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
                </Card>
                <CardText style={{ textTransform: 'capitalize', padding: 10 }}>
                    <small>
                        {
                            route.routeAmmenity?.map((ammenity) => {
                                return (
                                    <>
                                        <small>
                                            Amenities:
                                            </small>
                                        <div>
                                            {ammenity.ammenityLabel}
                                        </div>
                                    </>
                                )
                            })
                        }
                    </small>




                </CardText>
            </CardDeck >
        </div>
        </>
    );
};
export default Route;
//{editButton(route.id)}

