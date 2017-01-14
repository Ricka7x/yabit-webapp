import React, { Component } from 'react'
import UsersForm from './users_form'

class UsersNew extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {
        name: '',
        email: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    console.log(e)
  }

  render () {
    return (
      <div>
        <UsersForm/>
      </div>
    )
  }
}
export default UsersNew
