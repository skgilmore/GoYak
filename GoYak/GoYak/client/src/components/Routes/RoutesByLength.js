import React, { useContext, useEffect, useState } from "react";
import { Card, CardBody, CardHeader, CardText, Button, CardImg, CardDeck, Collapse } from "reactstrap";
import { RouteContext } from "../../providers/RouteProvider";
import Route from "./Route";

const RouteLength = () => {

    /* -------------------- To have access to routes -------------------- */
    const { getAllRoutesByDistance, routes } = useContext(RouteContext)

    /* -------------------- Use use State to update the state of  routes as it is changed -------------------- */

    const [shortLengthRoutes, setShortLengthRoutes] = useState([])
    const [tailoredLengthRoutes, setTailoredLengthRoutes] = useState([])
    const [longLengthRoutes, setLongLengthRoutes] = useState([])


    /* -------------------- To have access to the filter, filter routes by their varying lengths , reset state and rerender page-------------------- */

    const [isLoading, setIsLoading] = useState(true);
    //    const [routes, setRoutes] = useState([])
    /* -------------------- Get all routes. Filter all routes by difficulty level  -------------------- */
    /* -------------------- Reset the state of the page to show only routes with matching difficulty levels -------------------- */

    useEffect(() => {
        getAllRoutesByDistance()

    }, [])

    useEffect(() => {
        console.log("routeshort?", routes)
        const shortLengthRoutes = routes.filter(route => route.routeDistance === "short")
        setShortLengthRoutes(shortLengthRoutes)
        const tailoredLengthRoutes = routes.filter(route => route.routeDistance === "tailored")
        setTailoredLengthRoutes(tailoredLengthRoutes)
        const longLengthRoutes = routes.filter(route => route.routeDistance === "long")
        setLongLengthRoutes(longLengthRoutes)

    }, [routes])


    console.log(getAllRoutesByDistance, "allroutes", shortLengthRoutes, "array in short?", longLengthRoutes, "arrayoflong?")
    return (
        <>
            <h2>Shortest Routes</h2>
            <Card>
                <CardBody>

                    {shortLengthRoutes.map(route => {
                        /* -------------------- Map over the returned cats and display their info as assigned in CatCard Comp------------------- */
                        return <Route key={route.id} route={route} routeDistance={route.routeDistance} />
                    })}
                </CardBody>
            </Card>
            <h2>Customizable Distance Routes</h2>
            <Card>
                <CardBody>
                    {tailoredLengthRoutes.map(route => {
                        /* -------------------- Map over the returned cats and display their info as assigned in CatCard Comp------------------- */
                        return <Route key={route.id} route={route} routeDistance={route.routeDistance} />
                    })}
                </CardBody>
            </Card>
            <h2>Longest Routes</h2>
            <Card>
                <CardBody>

                    {longLengthRoutes.map(route => {
                        /* -------------------- Map over the returned cats and display their info as assigned in CatCard Comp------------------- */
                        return <Route key={route.id} route={route} routeDistance={route.routeDistance} />
                    })}
                </CardBody>
            </Card>


        </>
    )
}

export default RouteLength;

