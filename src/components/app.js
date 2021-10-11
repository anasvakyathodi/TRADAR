import React, { useState, useEffect } from "react";
import "./../assets/scss/app.scss";
import { Switch, Route, Redirect } from "react-router-dom";
import TargetCalc from "./Pages/TargetCalc";
import Home from "./Pages/Home";
import AnnualProfit from "./Pages/AnnualProfit";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Switch>
      <Route path="/annual">
        <AnnualProfit darkMode={darkMode} setDarkMode={setDarkMode} />
      </Route>
      <Route path="/intra">
        <TargetCalc darkMode={darkMode} setDarkMode={setDarkMode} />
      </Route>
      <Route path="/" exact>
        <Home darkMode={darkMode} setDarkMode={setDarkMode} />
      </Route>
    </Switch>
  );
};

export default App;
