import React, { useContext, useEffect, useState } from 'react';
import { HeartFill } from 'react-bootstrap-icons';
import { useParams } from 'react-router';
import { CardDeck, Card, Row } from 'reactstrap';
import { RouteContext } from '../../providers/RouteProvider';
import Route from "./Route";


const Favorites = () => {
    console.log("are you getting to this page?")
    const { getAllRoutes } = useContext(RouteContext)
    const [routes, setRoutes] = useState([])
    const [faveRoutes, setFaveRoutes] = useState([])
    //const { routeId } = useParams();
    let currentUser = JSON.parse(sessionStorage.getItem("userProfile"));

    useEffect(() => {
        getAllRoutes()
            .then(setRoutes)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const faveRoutes = routes.filter(route => route.user?.id === currentUser.id)
        console.log(faveRoutes, "routes work?")
        setFaveRoutes(faveRoutes)
        console.log("fave routes pg routes?", faveRoutes, routes, "gimme routes")
    }, [routes])
    //                 <button onClick={() => removeFavorite(index)}>
    //                   <HeartFill size="20" />
    //             </button>

    return (
        <CardDeck>
            <Row>
                <Card className="faveCards">
                    <Row>
                        <div class="card bg-dark text-blue">
                            < ul className="favorite-routes" >
                                {
                                    faveRoutes.map(route => {
                                        /* -------------------- Map over the returned routes and display their info as assigned in RouteCard Comp------------------- */
                                        return <Route key={route.id} route={route} user={route.user.id} />
                                    })

                                }


                            </ul >
                        </div>
                    </Row>
                </Card>
            </Row>

        </CardDeck>
    )
}
export default Favorites
/*import { analytics } from "firebase";
import { useContext, useEffect, useState } from "react";
import React from 'react';
import { Heart, HeartFill } from "react-bootstrap-icons";
import { RouteContext } from "../../providers/RouteProvider";



const Favorites = () => {
    var favList = [{}]

    const { routes, getAllRoutes, setRoutes } = useContext(RouteContext);

    const [favorites, setFavorites] = useState([])
    const getArray = JSON.parse(localStorage.getItem('favorites') || '0');
    for (var i = 0; i < getArray.length; i++) {
        let x = getArray[i]
        favList[i] = JSON.parse(localStorage.getItem('faveItem' + [x]) || '')
    }

    useEffect(() => {
        getAllRoutes()

    }, [])

    const titles = Object.keys(favList[0]);

    useEffect(() => {
        if (getArray !== 0) {
            setFavorites([...getArray])
        }
    }, [])

    favorites.includes(i)

    const addFav = (props) => {
        let array = favorites;
        let addArray = true;
        array.map((titles, key) => {
            if (route === props.i) {
                array.splice(key, 1);
                addArray = false;
            }
        });
        if (addArray) {
            array.push(props.i)
        }
        setFavorites([...array])
    }
    return (
        <div><h5>Your Favorite Routes </h5>
            <td>
                {
                    favorites.includes(i) ? (
                        <HeartFill
                            onclick={() => addFav({ route, i })}
                            style={{ color: 'red' }}
                        />
                    ) : (
                        <Heart
                            onclick={() => addFav({ route, i })}
                            style={{ color: 'red' }}
                        />
                    )}


            </td>
            < table >
                <thead>
                    <tr>
                        {
                            titles.map((title, key) => (
                                <th key={key} > { title} </th>
                            ))
                        }
                    </tr>
                </thead>
                < tbody >
                    {
                        favList.map((items, i) => (
                            <tr key={i} >
                                {(Object.values(favList[i])).map((value, key) => (
                                    <td key={key} > { value} </td>
                                ))
                                }
                            </tr>
                        )
                        )}
                </tbody>
            </table>

        </div>
    )
}
export default Favorites
*/