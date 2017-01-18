import React, { Component } from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {deleteUser} from '../../actions/users'
import {browserHistory} from 'react-router'
import styles from './users.css'

class UsersListItem extends Component {
  render () {
    const path = `/users/${this.props.user.id}`
    return (
      <li className={styles.listItem}>
        <Link to={path}>{this.props.user.name}</Link>
        <button onClick={() => browserHistory.push(`${path}/edit`)}>Edit</button>
        <button onClick={() => this.props.deleteUser(this.props.user.id)}>Delete</button>
      </li>
    )
  }
}
export default connect(null, { deleteUser })(UsersListItem)
