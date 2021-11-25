// Library
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Category from "./Pages/Categories";
import NotFound from "./Pages/404";

// Components
import Navbar from "./Components/layout/Navbar";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import Search from "./Pages/Search";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/category/:name">
            <Category />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route
            path="/admin"
            component={() => {
              window.location.href = "https://admin-pcc.herokuapp.com/admin";
              return null;
            }}
          />
          <Route exact path="/detail/:slug">
            <Detail />
          </Route>
          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
