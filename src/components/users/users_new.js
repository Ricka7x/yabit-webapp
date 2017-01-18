import React, { Component } from 'react'
import Form from '../form/form'
import Input from '../form/input'
import Select from '../form/select'
import Button from '../button/button'
import {connect} from 'react-redux'
import {createUser} from '../../actions/users'

class UsersNew extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      role: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.createUser(this.state)
  }

  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input name='name' value={this.state.name} onChange={this.handleChange} />
        <Input name='email' value={this.state.email} onChange={this.handleChange} />
        <Select name='role' value={this.state.role} onChange={this.handleChange}>
          <option value=''>Choose a role</option>
          <option value='normal'>Normal</option>
          <option value='admin'>Admin</option>
        </Select>
        <Button text='Save' />
      </Form>
    )
  }
}
export default connect(null, {createUser})(UsersNew)
