import React, { useState } from "react";
import SearchParams from "./SearchParams";
import Details from "./components/Details";
import { StrictMode } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ThemeContext from "./components/ThemeContext";

const App = () => {
  const theme = useState("darkblue");
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <div className="bg-repeat bg-pets-wallpaper">
          <Router>
            <header>
              <div className="flex flex-wrap justify-center my-4">
                <Link to="/">
                  <img
                    src="http://static.frontendmasters.com/resources/2019-05-02-complete-intro-react-v5/image-logo.png"
                    alt="logo"
                  />
                </Link>
              </div>
            </header>

            <Switch>
              <Route path="/details/:id">
                <Details />
              </Route>
              <Route path="/">
                <SearchParams />
              </Route>
            </Switch>
          </Router>
        </div>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

export default App;
