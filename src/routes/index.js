import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "../views/LandingPage";
import ContentPage from "../views/ContentPage";
import NotFound from "../views/404";

export default [
  <Route exact key="home" path="/" component={LandingPage} />,
  <Route
    exact
    key='question'
    path="/question/:id"
    component={ContentPage}
  />,
  <Route key="404" path="*" component={NotFound} />,
];