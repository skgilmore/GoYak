import React, { useContext, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
//import { Link } from "react-router-dom";
import { RouteContext } from "../../providers/RouteProvider";
import Route from "./Route";

const RouteList = () => {
    const { routes, getAllRoutes } = useContext(RouteContext);

    // When the user arrives at localhost:3000/post, request all routes
    // that have been approved and that have a published date before this moment.
    // Posts are already sorted by published dates descending
    useEffect(() => {
        getAllRoutes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Maps through each PostCategoryUser object, sending 
    // them to be converted to HTML then prints them all out.
    /* <Link to="/route/add" className="nav-link">
         New Route
         </Link>
         */
    return (
        <Container>
            <Row>
                {routes.map((r) => (
                    <Col md="4"><Route key={r.id} route={r} /></Col>
                ))}
            </Row>
        </Container>
    );
};

export default RouteList;
