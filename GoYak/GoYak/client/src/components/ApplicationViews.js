import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import RouteList from "./Routes/RouteList";
import RouteDifficulty from "./Routes/RoutesByDifficulty";
import ReviewForm from "./Reviews/ReviewForm";
import ReviewList from "./Reviews/ReviewsList";
import { ReviewDetail } from "./Reviews/ReviewDetails";
import RouteLength from "./Routes/RoutesByLength";
import RouteAmmenities from "./Routes/RoutesByAmmenities";
import { ReviewImg } from "./Reviews/ReviewImg";



export default function ApplicationViews() {
    const { isLoggedIn } = useContext(UserProfileContext);

    return (
        <main>
            <Switch>
                <Route path="/review/edit/:reviewId" exact>
                    {isLoggedIn ? <ReviewDetail /> : <Login />}
                </Route>
                <Route path="/login" exact>
                    {isLoggedIn ? <Hello /> : <Login />}
                </Route>
                <Route path="/" exact>
                    {isLoggedIn ? <Hello /> : <Redirect to="/login" />}
                </Route>
                <Route path="/route" exact>
                    {isLoggedIn ? <RouteList /> : <Redirect to="/login" />}
                </Route>

                <Route path="/review/getReviewByRouteId/:id">
                    {isLoggedIn ? <ReviewList /> : <Redirect to="/login" />}
                </Route>
                <Route path="/review/add/:routeId(\d+)" >
                    {isLoggedIn ? <ReviewForm /> : <Redirect to="/login" />}
                </Route>

                <Route path="/route/routeAmmenities" exact  >
                    {isLoggedIn ? <RouteAmmenities /> : <Redirect to="/login" />}
                </Route>

                <Route path="/route/difficulty" exact  >
                    {isLoggedIn ? <RouteDifficulty /> : <Redirect to="/login" />}
                </Route>
                <Route path="/route/distance" exact  >
                    {isLoggedIn ? <RouteLength /> : <Redirect to="/login" />}
                </Route>

                <Route path="/register">
                    <Register />
                </Route>

            </Switch>
        </main>
    );
}
