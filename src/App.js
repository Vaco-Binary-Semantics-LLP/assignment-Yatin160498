import React, { component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home.js";
import Teams from "./Components/Teams.js";
import Players from "./Components/Players.js";
import Header from "./Components/Header.js";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Teams" component={Teams} />
          <Route exact path="/Players" component={Players} />
          <Route exact path="/Header" component={Header} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
