/*

ASK JOE- FORCE SHORT, LONG, VARIES OR LESS THAN 10 GREATER THAN TO ETC COLUMN




import React, { useContext, useEffect, useState } from "react";
import { Card, CardBody, CardHeader, CardText, Button, CardImg, CardDeck, Collapse } from "reactstrap";
import { RouteContext } from "../../providers/RouteProvider";
import Route from "./Route";

const RouteDifficulty = () => {

    /* -------------------- To have access to routes -------------------- */
//const { getAllRoutes, routes } = useContext(RouteContext)

/* -------------------- Use use State to update the state of  routes as it is changed -------------------- */
/*
const [hardRoutes, setHardRoutes] = useState([])
const [mediumRoutes, setMediumRoutes] = useState([])
const [easyRoutes, setEasyRoutes] = useState([])


/* -------------------- To have access to the filter, filter croutes by their difficulty level , reset state and rerender page-------------------- */

//const [isLoading, setIsLoading] = useState(true);
//    const [routes, setRoutes] = useState([])
/* -------------------- Get all routes. Filter all routes by difficulty level  -------------------- */
/* -------------------- Reset the state of the page to show only routes with matching difficulty levels -------------------- */
/*
useEffect(() => {
    getAllRoutes()

}, [])

useEffect(() => {
    console.log("routeshard?", routes)
    const hardRoutes = routes.filter(route => route.difficultyLevel === "hard")
    setHardRoutes(hardRoutes)
    const mediumRoutes = routes.filter(route => route.difficultyLevel === "medium")
    setMediumRoutes(mediumRoutes)
    const easyRoutes = routes.filter(route => route.difficultyLevel === "easy")
    setEasyRoutes(easyRoutes)

}, [routes])


console.log(getAllRoutes, "allroutesDifficulty", routes, "array in diff?", hardRoutes, "arrayofeasy?")
return (
    <>
        <h2>Challenge Accepted</h2>
        <Card>
            <CardBody>

                {hardRoutes.map(route => {
                    /* -------------------- Map over the returned cats and display their info as assigned in CatCard Comp------------------- */
/*                  return <Route key={route.id} route={route} difficultyLevel={route.difficultyLevel} />
              })}
          </CardBody>
      </Card>
      <h2>Hakunah Matata</h2>
      <Card>
          <CardBody>

              {easyRoutes.map(route => {
                  /* -------------------- Map over the returned cats and display their info as assigned in CatCard Comp------------------- */
/*                return <Route key={route.id} route={route} difficultyLevel={route.difficultyLevel} />
            })}
        </CardBody>
    </Card>
    <h2>Hakunah Matata</h2>
    <Card>
        <CardBody>

            {easyRoutes.map(route => {
                /* -------------------- Map over the returned cats and display their info as assigned in CatCard Comp------------------- */
/*              return <Route key={route.id} route={route} difficultyLevel={route.difficultyLevel} />
          })}
      </CardBody>
  </Card>
  <h2>Hakunah Matata</h2>
  <Card>
      <CardBody>

          {easyRoutes.map(route => {
              /* -------------------- Map over the returned cats and display their info as assigned in CatCard Comp------------------- */
/*            return <Route key={route.id} route={route} difficultyLevel={route.difficultyLevel} />
        })}
    </CardBody>
</Card>
<h2>Meh Youre Good Kid</h2>
<Card>
    <CardBody>

        {mediumRoutes.map(route => {
            /* -------------------- Map over the returned cats and display their info as assigned in CatCard Comp------------------- */
/*          return <Route key={route.id} route={route} difficultyLevel={route.difficultyLevel} />
      })}
  </CardBody>
</Card>

</>
)
}

/*
export default RouteDifficulty;
*/