import "./App.css";
import React from "react";
import { Navbar } from "./componets/Navbar";
import { Rickandmorty } from "./componets/Rickandmorty";
import { Libreta } from "./componets/Libreta";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Rickandmorty} />
          <Route path="/rickandmorty" exact component={Rickandmorty} />
          <Route path="/libreta" exact component={Libreta} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
