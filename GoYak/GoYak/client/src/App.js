import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProfileProvider } from "./providers/UserProfileProvider";
import ApplicationViews from "./components/ApplicationViews";
import Header from "./components/Header";
import './App.css';
import { RouteProvider } from "./providers/RouteProvider";
import { ReviewProvider } from "./providers/ReviewProvider";


function App() {

  return (
    <Router>
      <UserProfileProvider>
        <RouteProvider>
          <ReviewProvider>
            <Header />
            <ApplicationViews />
          </ReviewProvider>
        </RouteProvider >
      </UserProfileProvider>
    </Router>
  );
}
export default App;
