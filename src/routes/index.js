import React from "react";
import { Route } from "react-router-dom";
import ContentPage from "../views/ContentPage";
import Home from "../views/Home";
import NotFound from "../views/404";

export default [
  <Route
    exact
    key='question'
    path="/question/:id"
    component={ContentPage}
  />,
  <Route exact key="home" path="/" component={Home} />,
  <Route key="404" path="*" component={NotFound} />,
];