import './App.css';
import Home from './pages/Home'
import Track from './pages/Track'
import Login from './pages/Login'
import Admin from './pages/Admin'
import React from 'react';
import {
  BrowserRouter, Switch, Route
} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/track" component={Track}/>
        <Route path="/login" component={Login}/>
        <Route path="/admin" component={Admin}/>

      </Switch>
 </BrowserRouter>
  )
}

export default App;
