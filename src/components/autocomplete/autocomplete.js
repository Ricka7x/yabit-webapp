import React, {PropTypes} from 'react'
import styles from './autocomplete.css'

const AutoComplete = ({name, list, onChange, onFocus, value, placeholder}) => {
  return (
    <div className={styles.wrapper}>
      <input
        name={name}
        className={styles.root}
        type="text"
        placeholder={placeholder || 'Autocomplete'}
        value={value}
      />
      <ul className={styles.dropdown}>
        {list.map(item => <li className={styles.listItems}key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  )
}

AutoComplete.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  name: PropTypes.string
}
export default AutoComplete
