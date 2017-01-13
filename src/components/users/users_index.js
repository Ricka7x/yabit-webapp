import React, { Component } from 'react'
import UsersList from './users_list'
import {connect} from 'react-redux'
import {fetchUsers} from '../../actions/users'
import {Link} from 'react-router'

class UsersIndex extends Component {
  componentWillMount () {
    this.props.fetchUsers()
  }

  render () {
    return (
      <div>
        <Link to='/users/new'>Add a user</Link>
        {this.props.users === undefined ? <p>Loading...</p> : <UsersList users={this.props.users} />}
      </div>
    )
  }
}
export default connect(({users}) => {
  return {users: users.all}
}, {fetchUsers})(UsersIndex)
