import React, { Component } from 'react'
import { Link } from 'react-router'

import styles from './nav.css'

class Nav extends Component {
  render () {
    return (
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <ul className={styles.menu}>
            <li className={styles.menuItem}>
              <Link className={styles.link} to='/'>Home</Link>
            </li>
            <li className={styles.menuItem}>
              <Link className={styles.link} to='/users'>Users</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
export default Nav
