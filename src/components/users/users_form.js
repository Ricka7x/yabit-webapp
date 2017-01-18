import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createUser} from '../../actions/users'

class UsersForm extends Component {
  constructor (props) {
    super (props)

    this.state = {
      name: '',
      email: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.createUser(this.state)
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} type="text" placeholder='name' value={this.state.name} name='name'/>
        <input onChange={this.handleChange} type="text" placeholder='email' value={this.state.email} name='email'/>
        <select onChange={this.handleChange} name="role" id="name">
          <option value="normal">normal</option>
          <option value="admin">admin</option>
        </select>
        <button>Submit</button>
      </form>
    )
  }
}

export default connect(null, {createUser})(UsersForm)
