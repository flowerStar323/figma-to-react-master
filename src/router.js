import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";

/****site route*****/
//  Home page
const Home = lazy(() => import("./pages/index"));

//  category
const Category = lazy(() => import("./pages"));



const AppRouter = () => {

  return (
    <React.Fragment>
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/" component={Category} />
      </Switch>
    </React.Fragment>
  );
};



export default AppRouter;
