import './App.css';
import Home from './pages/Home'
import Login from './pages/Login'
import {
  BrowserRouter, Switch, Route
} from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login}/>
      </Switch>
 </BrowserRouter>
  )
}

export default App;
