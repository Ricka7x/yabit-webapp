import React, {PropTypes} from 'react'

const Select = ({children, name, value, onChange}) => {
  return (
    <div>
      <select
        name={name}
        value={value}
        onChange={onChange}>
        {children}
      </select>
    </div>
  )
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired
}
export default Select
