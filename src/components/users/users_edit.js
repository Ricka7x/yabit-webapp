import React, { Component } from 'react'
import {connect} from 'react-redux'
import Form from '../form/form'
import Input from '../form/input'
import Select from '../form/select'
import Button from '../button/button'
import {getCurrentUser, updateUser} from '../../actions/users'

class UsersEdit extends Component {
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

  componentWillMount () {
    this.props.getCurrentUser(this.props.params.userId)
  }

  componentWillReceiveProps ({currentUser}) {
    this.setState({
      ...currentUser
    })
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.updateUser(this.props.currentUser.id, this.state)
  }

  render () {
    return (
      <div>
        {
          this.props.currentUser === undefined ?
          <p>Loading...</p> :
          (<Form onSubmit={this.handleSubmit}>
            <Input name='name' value={this.state.name} onChange={this.handleChange} />
            <Input name='email' value={this.state.email} onChange={this.handleChange} />
            <Select name='role' value={this.state.role} onChange={this.handleChange}>
              <option value=''>Choose a role</option>
              <option value='normal'>Normal</option>
              <option value='admin'>Admin</option>
            </Select>
            <Button text='Update'/>
          </Form>)
        }
      </div>
    )
  }
}
export default connect(({users}) => {
  return {currentUser: users.currentUser}
}, {getCurrentUser, updateUser})(UsersEdit)
