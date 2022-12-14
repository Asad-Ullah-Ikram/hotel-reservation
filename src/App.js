import React from 'react'
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "../src/pages/home/Home"
import List from "../src/pages/list/List"
import Hotel from "../src/pages/hotel/Hotel"
import Login from './pages/Auth/Login/Login';


const App = () => {
  return (
    <div>  <Router>
    <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/hotels" component={List}/>
       <Route path="/hotels/:id" component={Hotel}/>
       <Route path="/login" component={Login}/>
       </Switch>
    </Router></div>
  )
}

export default App