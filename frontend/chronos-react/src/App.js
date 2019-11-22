import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css';
import TimeContainer from './Components/TimeContainer'
import NavBar from './Components/NavBar'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" />
          <Route exact path="/timelines" />
          <Route exact path="/" />
          <Route exact path="/" />
          <Route exact path="/" />
          
        </Switch>
        
        <TimeContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
