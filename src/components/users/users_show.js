import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getCurrentUser} from '../../actions/users'

class UsersShow extends Component {

  componentWillMount(){
    this.props.getCurrentUser(this.props.params.userId)
  }

  render () {
    return (
      <div>
        {this.props.currentUser === undefined ?
          <p>Loading...</p> :
          (<div>
            <h1>{this.props.currentUser.name}</h1>
            <p>{this.props.currentUser.email}</p>
            <p>{this.props.currentUser.role}</p>
          </div>)}
      </div>
    )
  }
}
export default connect(({users}) => {
  return {currentUser: users.currentUser}
}, {getCurrentUser}) (UsersShow)
