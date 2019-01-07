import React from 'react'
import {Route, Switch} from "react-router-dom"
import Home from "./components/Home"
import Signup from './components/auth/Signup';
import Profile from './components/studentView/Profile';

const Routes = () => {
  return (
    <Switch>
      <Route path="/home" component={Home}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/student/profile" component = {Profile}/>
    </Switch>
  )
}

export default Routes
