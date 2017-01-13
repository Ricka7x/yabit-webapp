import React, { Component } from 'react'

class UsersShow extends Component {
  render () {
    return (
      <h1>User id:{this.props.params.userId}</h1>
    )
  }
}
export default UsersShow
