import React from 'react'
import styles from './pagination.css'

const Pagination = ({users}) => {
  const renderItem = () => {
    console.log(users.length)
  }
  return (
    <ul className={styles.root}>
      <li className={styles.item}><a href="#">Previus</a></li>
        {renderItem()}
      <li className={styles.item}><a href="#">Next</a></li>
    </ul>
  )
}
export default Pagination
