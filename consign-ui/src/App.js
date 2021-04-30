import './App.css';
import Home from './pages/Home'
import Track from './pages/track/Track'
import Login from './pages/login/Login'
import Admin from './pages/admin/Admin'
import React from 'react';
import { Provider } from 'react-redux';
import store from './saga/createStore'
import axios from 'axios'
import {
  HashRouter, Switch, Route
} from 'react-router-dom'


axios.defaults.baseURL = 'https://consign-server.herokuapp.com/'
// axios.defaults.baseURL = 'http://localhost:8080/'


function App() {
  return (
    <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/track" component={Track}/>
            <Route path="/login" component={Login}/>
            <Route path="/admin" component={Admin}/>
          </Switch>
    </HashRouter>
  </Provider>
  )
}

export default App;
