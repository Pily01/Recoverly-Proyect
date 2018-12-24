import React, { Component } from 'react'
import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd';
import {signup} from "../../services/auth"

const FormItem = Form.Item;

export default class Signup extends Component {
  state = {
    user: {}
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {user} = this.state
    signup(user)
    .then(user => console.log(user))
    .catch(err => console.log(err))

  }

  handleInputs = (e) => {
    const {user} = this.state
    let value = e.target.value
    let input = e.target.name
    user[input] = value
    console.log(user)
    this.setState({user})
  }

  render() {
    return (
      <div>
         <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          
            <Input onChange={this.handleInputs} name="email" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
          
        </FormItem>
        <FormItem>
          
            <Input onChange={this.handleInputs}  name="password" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Password" />
          
        </FormItem>
        
        
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        
      </Form>
      </div>
    )
  }
}
