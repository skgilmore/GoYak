import React, { useContext, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { RouteContext } from "../../providers/RouteProvider";
import Route from "./Route";
import FavoritedRoutes from "./Route"

const RouteList = () => {
    const { routes, getAllRoutes, setRoutes } = useContext(RouteContext);

    // When the user arrives at localhost:3000/post, request all routes
    // that have been approved and that have a published date before this moment.
    // Posts are already sorted by published dates descending
    useEffect(() => {
        getAllRoutes();
        setRoutes(routes)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    console.log(getAllRoutes, "what are all routes?", routes, "is this array?")


    // Maps through each PostCategoryUser object, sending 
    // them to be converted to HTML then prints them all out.

    return (
        <div className='card-container'>
            <div className="card-title">
                {routes.map((r) => (
                    <Row md="2 justify-content-center"><Route key={r.id} route={r} /></Row>
                ))}
            </div>
        </div>
    );
};

export default RouteList;
