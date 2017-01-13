import React, { Component } from 'react'
// import UsersForm from './users_form'

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
        <form>
          <input  name='name' onChange={this.handleChange} type="text" placeholder='name' value={this.state.user.name}/>
          <input name='email' onChange={this.handleChange} type="text" placeholder='email' value={this.state.user.email}/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
export default UsersNew
