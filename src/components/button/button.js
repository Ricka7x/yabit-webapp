import React, {PropTypes} from 'react'
import Loader from '../loader/loader'
import styles from './button.css'

const Button = ({text, children, loading, disabled, onClick}) => {
  return (
    <button
      className={styles.root}
      disabled={disabled}
      onClick={onClick}>
      {loading ? <Loader/> : text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
}
export default Button
