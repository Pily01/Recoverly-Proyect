import React, { Component } from 'react'
import Navbar from '../helpers/Navbar.js';
import electronicItems from "../../Jsons/electronics.json"
import schoolItems from "../../Jsons/schoolSupplies.json"
import kitchenItems from "../../Jsons/kitchen.json"
import bedroomItems from "../../Jsons/bedroom.json"
import bathroomItems from "../../Jsons/bathroom.json"
import Table from '../helpers/Table.js';

export default class TableInvStudent extends Component {
  state = {
    electronicItems: [],
    schoolItems: [],
    kitchenItems: [],
    bedroomItems: [],
    bathroomItems:[],
  }

  componentDidMount = () => {
    this.setState({electronicItems, schoolItems, kitchenItems,
    bedroomItems, bathroomItems})
  }

  drawBedroomItem = () => {
    const {bedroomItems} = this.state
    return bedroomItems.map((item, index) => <Table arrayPos={index} key={index} {...item}/> )
  }

  drawBathroomItem = () => {
    const {bathroomItems} = this.state
    return bathroomItems.map((item, index) => <Table arrayPos={index} key={index} {...item}/> )
  }

  drawKitchenItem = () => {
    const {kitchenItems} = this.state
    return kitchenItems.map((item, index) => <Table arrayPos={index} key={index} {...item}/> )
  }

  drawElectronicItem = () => {
    const {electronicItems} = this.state
    return electronicItems.map((item, index) => <Table arrayPos={index} key={index} {...item}/> )
  }

  drawSchoolItem = () => {
    const {schoolItems} = this.state
    return schoolItems.map((item, index) => <Table arrayPos={index} key={index} {...item}/> )
  }

  render() {
    const {drawBedroomItem, drawBathroomItem, drawKitchenItem, drawElectronicItem, drawSchoolItem} = this
    return (
      <div>
        <Navbar main="student" link1="PROFILE" link2="SAVE" link3="INVENTORY" link4="CENTERS"/>
        <div className="inventoryTableBanner">
          <p className="hugeLetter">INVENTORY</p>
        </div>
        <h3 class="ui block header">
          BEDROOM
        </h3>
        <table className="ui selectable celled red table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>USD saved</th>
              <th>Status</th>
              <th>Edit or Delete</th>
            </tr>
          </thead>
          <tbody>
            {drawBedroomItem()}
          </tbody>
        </table>

        <br/>
        <h3 class="ui block header">
          BATHROOM
        </h3>
        <table className="ui selectable celled yellow table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>USD saved</th>
              <th>Status</th>
              <th>Edit or Delete</th>
            </tr>
          </thead>
          <tbody>
            {drawBathroomItem()}
          </tbody>
        </table>

        <br/>
        <h3 class="ui block header">
          KITCHEN
        </h3>
        <table className="ui selectable celled green table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>USD saved</th>
              <th>Status</th>
              <th>Edit or Delete</th>
            </tr>
          </thead>
          <tbody>
            {drawKitchenItem()}
          </tbody>
        </table>

        <br/>
        <h3 class="ui block header">
          ELECTRONICS
        </h3>
        <table className="ui selectable celled blue table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>USD saved</th>
              <th>Status</th>
              <th>Edit or Delete</th>
            </tr>
          </thead>
          <tbody>
            {drawElectronicItem()}
          </tbody>
        </table>

        <br/>
        <h3 class="ui block header">
          SCHOOL SUPPLIES
        </h3>
        <table className="ui selectable celled pink table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>USD saved</th>
              <th>Status</th>
              <th>Edit or Delete</th>
            </tr>
          </thead>
          <tbody>
            {drawSchoolItem()}
          </tbody>
        </table>
        <button className="fluid ui yellow button mediumLetter">Pick Up</button>



      </div>
    )
  }
}
