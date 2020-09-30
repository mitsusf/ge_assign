import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Header from "./Components/Header/Header";
import Page from './Layout/Page/Page';
import Home from './Layout/Home/Home';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/route2">
            <Header />
            <Page />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
