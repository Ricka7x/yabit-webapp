import React, { Component } from 'react'
import UsersListItem from './users_list_item'

class UsersList extends Component {
  render () {
    const users = this.props.users.map(user => <UsersListItem key={user.id} user={user} />)
    return (
      <ul>
        {users}
      </ul>
    )
  }
}
export default UsersList
