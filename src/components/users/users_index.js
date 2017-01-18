import React, { Component } from 'react'
import UsersList from './users_list'
import {connect} from 'react-redux'
import {getUsers, searchUser} from '../../actions/users'
import {Link} from 'react-router'
import Search from '../search/search'

class UsersIndex extends Component {
  constructor (props) {
    super(props)

    this.state = {
      search: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }
  componentWillMount () {
    this.props.getUsers()
  }

  handleChange (e) {
    console.log(e.target.value)
    this.setState({
      search: e.target.value
    })
    this.props.searchUser(this.state.search)
  }

  render () {
    if(this.props.users === undefined){
      return <p>Loading...</p>
    }
    return (
      <div>
        <Search
          onChange={this.handleChange}
          value={this.state.search}
        />
        <Link to='/users/new'>Add a user</Link>
        {
          this.props.users.length < 1 ?
            <p>There are currently no users</p> :
            <UsersList users={this.props.users} />
        }
      </div>
    )
  }
}
export default connect(({users}) => {
  return {users: users.all}
}, {getUsers, searchUser})(UsersIndex)
