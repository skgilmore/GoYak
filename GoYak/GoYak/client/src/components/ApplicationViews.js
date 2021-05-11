import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import RouteList from "./Routes/RouteList";
//import RouteDifficulty from "./Routes/RoutesByDifficulty";
import ReviewForm from "./Reviews.js/ReviewForm";
import ReviewList from "./Reviews.js/ReviewsList";
import { ReviewDetail } from "./Reviews.js/ReviewDetails";

//<Route path="/route/routeDifficulty">
//{isLoggedIn ? <RouteDifficulty /> : <Redirect to="/login" />}
//</Route>


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

                <Route path="/review/getReviewByRouteId/:id">
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
