
import React, { useContext, useEffect, useState } from "react";
import { Card, CardBody, CardHeader, CardText, Button, CardImg, CardDeck, Collapse } from "reactstrap";
import { RouteContext } from "../../providers/RouteProvider";
import { AddFavorite } from "./AddFavorite";
import Route from "./Route";

const RouteDifficulty = () => {

    /* -------------------- To have access to routes -------------------- */
    const { getAllRoutes, routes, setRoutes } = useContext(RouteContext)

    /* -------------------- Use use State to update the state of  routes as it is changed -------------------- */

    const [hardRoutes, setHardRoutes] = useState([])
    const [mediumRoutes, setMediumRoutes] = useState([])
    const [easyRoutes, setEasyRoutes] = useState([])


    /* -------------------- To have access to the filter, filter routes by their difficulty level , reset state and rerender page-------------------- */

    const [isLoading, setIsLoading] = useState(true);
    /* -------------------- Get all routes. Filter all routes by difficulty level  -------------------- */
    /* -------------------- Reset the state of the page to show only routes with matching difficulty levels -------------------- */

    useEffect(() => {
        getAllRoutes();
        setRoutes(routes)

    }, []);

    useEffect(() => {
        console.log("routedifficulty?", routes)
        const hardRoutes = routes.filter(route => route.difficultyLevel === "hard")
        setHardRoutes(hardRoutes)
        const mediumRoutes = routes.filter(route => route.difficultyLevel === "medium")
        setMediumRoutes(mediumRoutes)
        const easyRoutes = routes.filter(route => route.difficultyLevel === "easy")
        setEasyRoutes(easyRoutes)

    }, [routes])

    const cardBody = {
        flex: '0 1 auto',
        justifyContent: 'space-evenly',
        minHeight: '1px',
        padding: '1.25rem',
        background: '#f2f3ffe3',
    }


    console.log(getAllRoutes, "allroutesDifficulty", routes, "array in diff?", hardRoutes, "arrayofhard?", mediumRoutes, "medArray", easyRoutes, "easy")
    return (
        <>

            <CardBody>
                <div style={cardBody}>
                    <h2>Most Difficult Routes</h2>
                    <CardBody>
                        <CardDeck>
                            {hardRoutes.map(route => {
                                /* -------------------- Map over the returned cats and display their info as assigned in CatCard Comp------------------- */
                                return <Route key={route.id} route={route} difficultyLevel={route.difficultyLevel} />
                            })}
                        </CardDeck>
                    </CardBody>
                </div>
            </CardBody>
            <CardBody>
                <div style={cardBody}>
                    <h2>Easy Peasy Routes </h2>
                    <CardBody>
                        <CardDeck>
                            {easyRoutes.map(route => {
                                /* -------------------- Map over the returned cats and display their info as assigned in CatCard Comp------------------- */
                                return <Route key={route.id} route={route} difficultyLevel={route.difficultyLevel} />

                            })}

                        </CardDeck>
                    </CardBody>
                </div>
            </CardBody>
            <Card>
                <CardBody>
                    <div style={cardBody}>
                        <h2>Could be  challenge routes</h2>
                        <CardBody>
                            <CardDeck>
                                {mediumRoutes.map(route => {
                                    /* -------------------- Map over the returned cats and display their info as assigned in CatCard Comp------------------- */
                                    return <Route key={route.id} route={route} difficultyLevel={route.difficultyLevel} />
                                })}
                            </CardDeck>
                        </CardBody>
                    </div>
                </CardBody>
            </Card>


        </>
    )
}


export default RouteDifficulty;
