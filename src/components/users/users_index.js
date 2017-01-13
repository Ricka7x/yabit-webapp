import React, { Component } from 'react'
import UsersList from './users_list'
import {connect} from 'react-redux'
import {fetchUsers} from '../../actions/users'

class UsersIndex extends Component {
  componentWillMount () {
    this.props.fetchUsers()
  }

  render () {
    return (
      <div>
        {this.props.users === undefined ? <p>Loading...</p> : <UsersList users={this.props.users} />}
      </div>
    )
  }
}
export default connect(({users}) => {
  return {users: users.all}
}, {fetchUsers})(UsersIndex)
