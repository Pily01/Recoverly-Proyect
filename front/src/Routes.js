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
import CentersStudents from './components/studentView/CentersStudents';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/student/profile" component = {Profile}/>
      <Route exact path="/student/save" component = {InventoryStudent}/>
      <Route exact path="/student/inventory" component = {TableInvStudent}/>
      <Route exact path="/inventory/bedroom" component={BedroomStudent}/>
      <Route exact path="/inventory/bathroom" component={BathroomStudent}/>
      <Route exact path="/inventory/kitchen" component={KitchenStudent}/>
      <Route exact path="/inventory/electronics" component={ElectronicsStudent}/>
      <Route exact path="/inventory/school" component={SchoolSupliesStudent}/>
      <Route exact path="/student/centers" component={CentersStudents}/>
    </Switch>
  )
}

export default Routes
