import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProfileProvider } from "./providers/UserProfileProvider";
import ApplicationViews from "./components/ApplicationViews";
import Header from "./components/Header";
import './App.css';
import { RouteProvider } from "./providers/RouteProvider";
import { ReviewProvider } from "./providers/ReviewProvider";
import { FavoriteProvider } from "./providers/FavoriteProvider";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function App() {

  library.add(faHeart)

  return (
    <Router>
      <UserProfileProvider>
        <RouteProvider>
          <ReviewProvider>
            <FavoriteProvider>
              <Header />
              <ApplicationViews />
            </FavoriteProvider>
          </ReviewProvider>
        </RouteProvider >
      </UserProfileProvider>
    </Router>
  );
}
export default App;
