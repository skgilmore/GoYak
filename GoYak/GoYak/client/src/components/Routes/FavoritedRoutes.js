import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FavoriteContext } from '../../providers/FavoriteProvider';
import { RouteContext } from '../../providers/RouteProvider';
import Route from "./Route";
import { Button, Modal, Card, Row, Col, CardDeck, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CardBody } from 'reactstrap';



const Favorites = () => {
    console.log("are you getting to this page?")
    const { getAllRoutes } = useContext(RouteContext)
    const { deleteFavorite, favorites, getFavoritesByUserProfileId } = useContext(FavoriteContext);

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


    // Modal - Setting states
    /// const [show, setShow] = useState(false);
    //const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true);

    /*   // Function for the 'Delete Favorite' button
       const handleDeleteFavorite = () => {
           deleteFavorite(favorite.id)
               .then(getFavoritesByUserProfileId(userId))
               handleClose();


               <Modal.Footer>
    
                   {currentUser.id === userId ?
                       <><Button onClick={handleDeleteFavorite}>Delete Favorite</Button></> :
                       <> </>
                   }
               </Modal.Footer>
       };
       */
    return (
        <>
            <CardBody>

                <div className="faveCards">
                    <CardBody>
                        <CardDeck>
                            <br></br>
                            <br></br>

                            <h3>Your Favorites:</h3>

                            <br></br>
                            <br></br>

                            {
                                faveRoutes.map(route => {
                                    /* -------------------- Map over the returned routes and display their info as assigned in RouteCard Comp------------------- */
                                    return <Route key={route.id} route={route} user={route.user.id} />
                                })

                            }
                        </CardDeck>
                    </CardBody>
                </div >
            </CardBody>


        </>
    )
}
export default Favorites
    //</Modal >
    //</Modal.Body >
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