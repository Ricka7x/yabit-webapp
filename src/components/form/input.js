import React, { PropTypes } from 'react'
import styles from './input.css'
import classnames from 'classnames'

const Input = ({type, name, placeholder, onChange, value}) => {
    return (
      <div className={styles.wrapper}>
        <input
          className={classnames(styles.root, styles.hasSuccess)}
          type={type || 'text'}
          name={name}
          placeholder={placeholder || name}
          onChange={onChange}
          value={value}/>
      </div>
    )
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}
export default Input
