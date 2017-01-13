import React, { Component } from 'react'
import UsersList from './users_list'
import {connect} from 'react-redux'
import {fetchUsers} from '../../actions/users'

class UsersIndex extends Component {
  componentWillMount () {
    if(this.props.users.length === 0){
      this.props.fetchUsers()
    }
  }

  render () {
    return (
      <div>
        {this.props.users.length === 0 ?
          <p>Loading...</p> :
          <UsersList users={this.props.users}/>
        }
      </div>
    )
  }
}
export default connect(({users}) => {
  return {users}
}, {fetchUsers})(UsersIndex)
