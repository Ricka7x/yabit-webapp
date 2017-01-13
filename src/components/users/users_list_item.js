import React, { Component } from 'react'
import {Link} from 'react-router'
import styles from './users.css'

class UsersListItem extends Component {
  render () {
    const path = `/users/${this.props.user.id}`
    return (
      <li className={styles.listItem}>
        <Link to={path}>{this.props.user.name}</Link>
      </li>
    )
  }
}
export default UsersListItem
