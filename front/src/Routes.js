///////////////////////////////////////////////////////////////////////////////
///////////////////////////  R O U T E S /////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

import React from 'react'
import {Route, Switch} from "react-router-dom"
import Home from "./components/Home"
import Signup from './components/auth/Signup';
import Profile from './components/studentView/Profile';
import InventoryStudent from './components/studentView/InventoryStudent';
import BedroomStudent from "./components/studentView/BedroomStudent"
import BathroomStudent from "./components/studentView/BathroomStudent"
import KitchenStudent from './components/studentView/KitchenStudent';
import ElectronicsStudent from './components/studentView/ElectronicsStudent';

const Routes = () => {
  return (
    <Switch>
      <Route path="/home" component={Home}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/student/profile" component = {Profile}/>
      <Route path="/student/save" component = {InventoryStudent}/>
      <Route path="/inventory/bedroom" component={BedroomStudent}/>
      <Route path="/inventory/bathroom" component={BathroomStudent}/>
      <Route path="/inventory/kitchen" component={KitchenStudent}/>
      <Route path="/inventory/electronics" component={ElectronicsStudent}/>
    </Switch>
  )
}

export default Routes
