import React from 'react'
import {Route, Switch} from "react-router-dom"
import Home from "./components/Home"
import Signup from './components/auth/Signup';
import Profile from './components/studentView/Profile';
import InventoryStudent from './components/studentView/InventoryStudent';
import BedroomStudent from "./components/studentView/BedroomStudent"

const Routes = () => {
  return (
    <Switch>
      <Route path="/home" component={Home}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/student/profile" component = {Profile}/>
      <Route path="/student/save" component = {InventoryStudent}/>
      <Route path="/inventory/bedroom" component={BedroomStudent}/>
    </Switch>
  )
}

export default Routes
