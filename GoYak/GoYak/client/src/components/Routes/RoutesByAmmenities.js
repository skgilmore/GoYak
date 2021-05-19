import React, { useContext, useEffect, useState } from "react";
import { Router } from "react-router";
import { Card, CardBody, CardHeader, CardText, Button, CardImg, CardDeck, Collapse } from "reactstrap";
import { RouteContext } from "../../providers/RouteProvider";
import Route from "./Route";

const RouteAmmenities = () => {

    /* -------------------- To have access to routes -------------------- */
    const { getAllRoutesByAmmenity, getAllRoutes, routes, setRoutes } = useContext(RouteContext)

    /* -------------------- Use use State to update the state of  routes as it is changed -------------------- */

    const [hasammenity, setAmmenity] = useState([])

    /* -------------------- To have access to the filter, filter routes by their varying lengths , reset state and rerender page-------------------- */

    const [isLoading, setIsLoading] = useState(true);
    /* -------------------- Get all routes. Filter all routes by difficulty level  -------------------- */
    /* -------------------- Reset the state of the page to show only routes with matching difficulty levels -------------------- */

    useEffect(() => {
        getAllRoutes()
        getAllRoutesByAmmenity();
    }, [])
    /* -------------------- Route Ammenity is an array therfore cant check with dot notation. First Filter by length then map -------------------- */


    useEffect(() => {
        const hasammenity = routes.filter(route => {
            if (
                route.routeAmmenity.length
            ) {
                return true

            }

        }

        )
        setAmmenity(hasammenity)


    }, [routes])

    const cardBody = {
        flex: '0 1 auto',
        justifyContent: 'space-evenly',
        minHeight: '1px',
        padding: '1.25rem',
        background: '#f2f3ffe3',
    }

    return (
        <>
            <CardBody>
                <CardDeck>
                    <div style={cardBody}>


                        <h2>They've got what you need:</h2>
                        <div>
                            {
                                hasammenity.map((route) => {
                                    const Ammms = routes.find(route => route.routeAmmenity.ammenityId === 2)
                                    return <Route key={route.id} route={route} ammenity={route.routeAmmenity.ammenityLabel} user={route.user?.id} />
                                })
                            }
                        </div>
                    </div>
                </CardDeck>
            </CardBody>


        </>
    )
}
export default RouteAmmenities;

