import React from "react";
import { Card, CardDeck } from "reactstrap";
import { Link } from "react-router-dom";
import Favorites from "./Routes/FavoritedRoutes";

export default function Hello() {

    const cardStyle = {

    }

    const divStyle = {

        textAlign: 'center',
        padding: 'inherit',
        backdropFilter: 'opacity(0.5)',
        textTransform: 'uppercase',
        alignItems: 'flexEnd',
        color: 'transparent',
        //backgroundImage: url("https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2Vyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80+ ")
    };

    return (
        <>
            <CardDeck>
                <Card class="homepage">
                    <div style={divStyle}>
                        <img class="card-img" src="https://ih1.redbubble.net/image.430592575.3400/st,small,507x507-pad,600x600,f8f8f8.u12.jpg"></img>
                        <Link to={`route/`}>
                            <div class="card-img-overlay">
                                <h5 class="card-title text-dark font-weight-bold">Routes</h5>
                                <i class="fas fa-external-link-square-alt color-black"></i>
                                <p class="text-dark">Check them out!.</p>
                            </div>
                        </Link>
                    </div>

                </Card>
                <Card class="homepage">
                    <div style={divStyle}>
                        <img class="card-img" src="https://ih1.redbubble.net/image.430592575.3400/st,small,507x507-pad,600x600,f8f8f8.u12.jpg" alt="Card image"></img>
                        <Link to={`route/distance`}>
                            <div class="card-img-overlay">
                                <h5 class="card-title">Distance</h5>
                                <p class="card-text">Check them out!.</p>
                            </div>
                        </Link>
                    </div>
                </Card>
                <Card class="homepage">
                    <div style={divStyle}>
                        <img class="card-img" src="https://ih1.redbubble.net/image.430592575.3400/st,small,507x507-pad,600x600,f8f8f8.u12.jpg" alt="Card image"></img>
                        <Link to={`route/difficulty`}>
                            <div class="card-img-overlay">
                                <h5 class="card-title">Difficulty</h5>
                                <p class="card-text">Check them out!.</p>
                            </div>
                        </Link>
                    </div>
                </Card>
                <Card class="homepage">
                    <div style={divStyle}>
                        <img class="card-img" src="https://ih1.redbubble.net/image.430592575.3400/st,small,507x507-pad,600x600,f8f8f8.u12.jpg"></img>
                        <Link to={`route/routeAmmenities`}>
                            <div class="card-img-overlay">
                                <h5 class="card-title">Amenity</h5>
                                <p class="card-text">Check them out!.</p>
                            </div>
                        </Link>
                    </div>
                </Card>
            </CardDeck >
            <CardDeck>
                <Favorites />
            </CardDeck>
        </>
    );
}