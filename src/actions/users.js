import {FETCH_USERS, FETCH_USER} from './types'
import axios from 'axios'

const ROOT_URL = 'http://localhost:4000'

export function fetchUsers () {
  return dispatch => {
    axios.get(`${ROOT_URL}/users`)
    .then(response => {
      dispatch({
        type: FETCH_USERS,
        payload: response
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

export function fetchUser (id) {
  return dispatch => {
    axios.get(`${ROOT_URL}/users/${id}`)
    .then(response => {
      dispatch({
        type: FETCH_USER,
        payload: response
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }
}
