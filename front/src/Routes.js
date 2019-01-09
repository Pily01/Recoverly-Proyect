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
import SchoolSupliesStudent from './components/studentView/SchoolSupliesStudent';
import TableInvStudent from './components/studentView/TableInvStudent';

const Routes = () => {
  return (
    <Switch>
      <Route path="/home" component={Home}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/student/profile" component = {Profile}/>
      <Route path="/student/save" component = {InventoryStudent}/>
      <Route path="/student/inventory" component = {TableInvStudent}/>
      <Route path="/inventory/bedroom" component={BedroomStudent}/>
      <Route path="/inventory/bathroom" component={BathroomStudent}/>
      <Route path="/inventory/kitchen" component={KitchenStudent}/>
      <Route path="/inventory/electronics" component={ElectronicsStudent}/>
      <Route path="/inventory/school" component={SchoolSupliesStudent}/>
    </Switch>
  )
}

export default Routes
