import {FETCH_USERS, SHOW_USER, CREATE_USER} from './types'
import {browserHistory} from 'react-router'
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

export function showUser (id) {
  return dispatch => {
    axios.get(`${ROOT_URL}/users/${id}`)
    .then(response => {
      dispatch({
        type: SHOW_USER,
        payload: response
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

export function createUser (newUser) {
  return dispatch => {
    axios.post(`${ROOT_URL}/users`, newUser)
    .then(response => {
      dispatch({
        type: CREATE_USER,
        payload: response
      })
      browserHistory.push('/users')
    })
    .catch((err) => {
      console.log(err)
    })
  }
}
