import React, { Component } from 'react'
import {connect} from 'react-redux'
import {showUser} from '../../actions/users'

class UsersShow extends Component {
  componentWillMount () {
      this.props.showUser(this.props.params.userId)
}
  render () {
    return (
      <div>
        {this.props.current === undefined ?
          <p>Loading...</p> :
          (<div>
            <h1>{this.props.current.name}</h1>
            <p>{this.props.current.email}</p>
            <p>{this.props.current.role}</p>
          </div>)}
      </div>
    )
  }
}
export default connect(({users}) => {
  return {current: users.current}
}, {showUser}) (UsersShow)
