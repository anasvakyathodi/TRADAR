import React, { useState, useEffect } from "react";
import "./../assets/scss/app.scss";
import { Switch, Route, Redirect } from "react-router-dom";
import TargetCalc from "./Pages/TargetCalc";
import Home from "./Pages/Home";
import AnnualProfit from "./Pages/AnnualProfit";

const App = () => {
  return (
    <Switch>
      <Route path="/annual" component={AnnualProfit} />
      <Route path="/intra" component={TargetCalc} />
      <Route path="/" exact component={Home} />
    </Switch>
  );
};

export default App;
