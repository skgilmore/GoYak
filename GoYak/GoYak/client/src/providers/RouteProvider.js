import React, { useState, createContext, useContext } from "react";
import "firebase/auth";
import { UserProfileContext } from "./UserProfileProvider";
import { useHistory } from "react-router-dom";

export const RouteContext = createContext();

export const RouteProvider = (props) => {
    const [routes, setRoutes] = useState([]);
    const { getToken } = useContext(UserProfileContext);
    const history = useHistory();

    const getAllRoutesByAmmenity = () => {
        return getToken().then((token) =>
            fetch("/api/route/routeAmmenities", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((res) => res.json())
                .then((routes) => {
                    setRoutes(routes)
                    return routes
                })
        );
    };

    const getAllRoutesByDistance = () => {
        return getToken().then((token) =>
            fetch("/api/route/distance", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((res) => res.json())
                .then((routes) => {
                    setRoutes(routes)
                    return routes
                })
        );
    };
    const getAllRoutes = () => {
        return getToken()
            .then(token => fetch("/api/route", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(res => res.json())
            )
    };
    /*
    .then(setRoutes));
//adding a new post
const addPost = (post) => {
    return getToken().then((token) => {
        return fetch(`/api/post`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(post), //this stringifies our post object meaning it changes our object into string object
        })
            .then((res) => {
                const response = res.json();
                return response;
            }) //then send the stringified object(res), and we will use this in our PostForm after we add new object
            .then((postObject) => history.push(`/post/${postObject.id}`));
    });
};
 
const getPostById = (postId) => {
    return getToken().then((token) =>
        fetch(`/api/post/${postId}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((res) => res.json())
    );
};
 
const getPostsByUser = () => {
    return getToken().then((token) =>
        fetch("/api/post/user-posts", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => res.json())
            .then(setPosts)
    );
};
 
const updatePost = (post) => {
    return getToken().then((token) =>
        fetch(`/api/post/${post.id}`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        }).then(history.push(`/post/${post.id}`))
    );
};
 
const deletePost = (postId) =>
    getToken().then((token) =>
        fetch(`/api/post/${postId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        }).then(history.push("/my-posts"))
    );
*/
    return (
        <RouteContext.Provider
            value={{
                routes,
                setRoutes,
                getAllRoutesByAmmenity,
                getAllRoutesByDistance,
                getAllRoutes

            }}
        >
            {props.children}
        </RouteContext.Provider>
    );
};

//getAllRoutes,