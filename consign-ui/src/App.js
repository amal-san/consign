import './App.css';
import Home from './pages/Home'
import Track from './pages/Track'
import Login from './pages/login/Login'
import Admin from './pages/admin/Admin'
import React from 'react';
import { Provider } from 'react-redux';
import store from './saga/createStore'
import axios from 'axios'
import {
  BrowserRouter, Switch, Route
} from 'react-router-dom'


axios.defaults.baseURL = 'http://localhost:4000/'


function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/track" component={Track}/>
            <Route path="/login" component={Login}/>
            <Route path="/admin" component={Admin}/>
          </Switch>
    </BrowserRouter>
  </Provider>
  )
}

export default App;
