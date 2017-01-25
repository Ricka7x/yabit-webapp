import React, { Component } from 'react'
import UsersList from './users_list'
import Pagination from '../pagination/pagination'
import {connect} from 'react-redux'
import {getUsers, searchUser, getPaginatedUsers} from '../../actions/users'
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
    this.props.getPaginatedUsers(1)
  }

  handleChange (e) {
    console.log(e.target.value)
    this.setState({
      search: e.target.value
    })
    this.props.searchUser(this.state.search)
  }

  render () {
    if (this.props.users === undefined) {
      return <p>Loading...</p>
    }
    return (
      <div>
        <Search
          onChange={this.handleChange}
          value={this.state.search}
        />
        {
          this.props.users.length < 1 ?
            <p>There are currently no users</p> :
            <div>
              <UsersList users={this.props.users} />
              <Pagination users={this.props.users}/>
            </div>
        }
      </div>
    )
  }
}
export default connect(({users}) => {
  return {users: users.all}
}, {getUsers, searchUser, getPaginatedUsers})(UsersIndex)
