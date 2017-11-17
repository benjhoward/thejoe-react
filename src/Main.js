import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Team from './Team';
import Players from './Players';
import Matchup from './Matchup';
import League from './League';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/team' component={Team}/>
          <Route path='/players' component={Players}/>
          <Route path='/matchup' component={Players}/>
          <Route path='/league' component={Players}/>
        </Switch>
      </main>
    );
  }
}

export default Main;
