import './App.css';
import Home from './pages/Home'
import Track from './pages/Track'
import Login from './pages/Login'

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

      </Switch>
 </BrowserRouter>
  )
}

export default App;
