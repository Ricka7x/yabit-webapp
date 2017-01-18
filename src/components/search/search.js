import React, {PropTypes} from 'react'
import styles from './search.css'

const Search = ({placeholder, onChange, value}) => {
  return (
    <input
      className={styles.root}
      type='text'
      placeholder={placeholder || 'Search'}
      onChange={onChange}
      value={value}
    />
  )
}

Search.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}
export default Search
