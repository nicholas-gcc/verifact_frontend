import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "../views/LandingPage";
import NotFound from "../views/404";

export default [
  <Route exact key="home" path="/" component={LandingPage} />,
  <Route key="404" path="*" component={NotFound} />,
];