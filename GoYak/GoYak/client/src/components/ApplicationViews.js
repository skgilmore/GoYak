import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import RouteList from "./Routes/RouteList";
//import RouteDifficulty from "./Routes/RoutesByDifficulty";
import ReviewForm from "./Reviews/ReviewForm";
import ReviewList from "./Reviews/ReviewsList";

//<Route path="/route/routeDifficulty">
//{isLoggedIn ? <RouteDifficulty /> : <Redirect to="/login" />}
//</Route>


export default function ApplicationViews() {
    const { isLoggedIn } = useContext(UserProfileContext);

    return (
        <main>
            <Switch>
                <Route path="/" exact>
                    {isLoggedIn ? <Hello /> : <Redirect to="/login" />}
                </Route>

                <Route exact path="/review/getReviewByRouteId/:id">
                    {isLoggedIn ? <ReviewList /> : <Redirect to="/login" />}
                </Route>
                <Route path="/review/add/:routeId(\d+)" >
                    {isLoggedIn ? <ReviewForm /> : <Redirect to="/login" />}
                </Route>

                <Route path="/route/routeAmmenities" exact  >
                    {isLoggedIn ? <RouteList /> : <Redirect to="/login" />}
                </Route>


                <Route path="/register">
                    <Register />
                </Route>

            </Switch>
        </main>
    );
}
