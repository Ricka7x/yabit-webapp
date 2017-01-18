import {GET_USERS_SUCCESS, GET_CURRENT_USER, SEARCH_USER, DELETE_USER_SUCCESS} from './types'


import {browserHistory} from 'react-router'
import axios from 'axios'

const ROOT_URL = 'http://localhost:4000'

export function getUsers () {
  return dispatch => {
    axios.get(`${ROOT_URL}/users`)
    .then(response => {
      dispatch({
        type: GET_USERS_SUCCESS,
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
      browserHistory.push('/users')
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

export function deleteUser (id) {
  return dispatch => {
    axios.delete(`${ROOT_URL}/users/${id}`)
    .then(() => {
      dispatch({
        type: DELETE_USER_SUCCESS,
        payload: id
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

export function updateUser (id, user) {
  return dispatch => {
    axios.put(`${ROOT_URL}/users/${id}`, user )
    .then(response => {
      console.log(response)
      browserHistory.push('/users')
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

export function getCurrentUser (id) {
  return dispatch => {
    axios.get(`${ROOT_URL}/users/${id}`)
    .then(response => {
      dispatch({
        type: GET_CURRENT_USER,
        payload: response
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

export function searchUser (searchParams) {
  return dispatch => {
    axios.get(`${ROOT_URL}/users/?q=${searchParams}`)
    .then(response => {
      dispatch({
        type: SEARCH_USER,
        payload: response
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }
}
