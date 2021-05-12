import React from "react";
import { Card, CardDeck } from "reactstrap";
import { Link } from "react-router-dom";
import Favorites from "./Routes/FavoritedRoutes";

export default function Hello() {



    return (
        <CardDeck>
            <Card>
                <div class="card bg-dark text-blue">
                    <img class="card-img" src="https://cdn.shopify.com/s/files/1/0071/1815/9930/files/get_outside_logo.png?height=628&pad_color=fff&v=1530989815&width=1200" alt="Card image"></img>
                    <Link to={`route/`}>
                        <div class="card-img-overlay">
                            <h5 class="card-title">See All Routes</h5>
                            <p class="card-text">Check them out!.</p>
                            <p class="card-text">Last updated 3 mins ago</p>
                        </div>
                    </Link>
                </div>
            </Card>
            <Card>
                <div class="card bg-dark text-blue">
                    <img class="card-img" src="https://ih1.redbubble.net/image.430592575.3400/st,small,507x507-pad,600x600,f8f8f8.u12.jpg" alt="Card image"></img>
                    <Link to={`route/distance`}>
                        <div class="card-img-overlay">
                            <h5 class="card-title">See Routes By Distance</h5>
                            <p class="card-text">Check them out!.</p>
                        </div>
                    </Link>
                </div>
            </Card>
            <Card>
                <div class="card bg-dark text-blue">
                    <img class="card-img" src="https://cdn.shopify.com/s/files/1/0071/1815/9930/files/get_outside_logo.png?height=628&pad_color=fff&v=1530989815&width=1200" alt="Card image"></img>
                    <Link to={`route/difficulty`}>
                        <div class="card-img-overlay">
                            <h5 class="card-title">See All By difficulty</h5>
                            <p class="card-text">Check them out!.</p>
                            <p class="card-text">Last updated 3 mins ago</p>
                        </div>
                    </Link>
                </div>
            </Card>
            <Card>
                <div class="card bg-dark text-blue">
                    <img class="card-img" src="https://ih1.redbubble.net/image.430592575.3400/st,small,507x507-pad,600x600,f8f8f8.u12.jpg" alt="Card image"></img>
                    <div class="card-img-overlay">
                        <h5 class="card-title">See All Routes</h5>
                        <p class="card-text">Check them out!.</p>
                        <p class="card-text">Last updated 3 mins ago</p>
                    </div>
                </div>
            </Card>
            <Card>
                <h5 class="card-title">Your Favorites</h5>
                <div class="card bg-dark text-blue">
                    <img class="card-img" src="https://ih1.redbubble.net/image.430592575.3400/st,small,507x507-pad,600x600,f8f8f8.u12.jpg" alt="Card image"></img>
                    <div class="card-img-overlay">
                        <Favorites />

                    </div>
                </div>
            </Card>
        </CardDeck>
    );
}