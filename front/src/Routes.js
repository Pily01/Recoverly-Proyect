import React from 'react'
import {Route, Switch} from "react-router-dom"
import Home from "./components/Home"
import Signup from './components/auth/Signup';

const Routes = () => {
  return (
    <Switch>
      <Route path="/home" component={Home}/>
      <Route path="/signup" component={Signup}/>
    </Switch>
  )
}

export default Routes
