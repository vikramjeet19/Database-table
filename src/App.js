import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Detail from './Components/Detail';
import List from './Components/List';

class App extends Component {
  render() {
    return (
      <div >
        <Switch>
        <Route path="/users/:id" component={Detail} />
          <Route  path='/users' component={List} />
          <Redirect to = '/users'/>
        </Switch>
       
      </div>
        );
      }
    }
    
    export default App;
