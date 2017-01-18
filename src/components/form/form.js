import React, {PropTypes} from 'react'

const Form = ({children, onSubmit}) => {
  return (
    <form onSubmit={onSubmit}>
      {children}
    </form>
  )
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
export default Form
