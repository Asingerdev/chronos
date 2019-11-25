import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css';
import TimeContainer from './Components/TimeContainer'
import NavBar from './Components/NavBar'
import TimeShow from './Components/TimeShow';

const App = () => {
  return (
    <div className="App" >
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={TimeContainer} />
          <Route exact path="/timelines" component={TimeContainer} />
          {/* <Route exact path="/timelines/:id" component={TimeShow} /> */}
          <Route exact path="/" />
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
