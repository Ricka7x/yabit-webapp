import { FETCH_USERS, SHOW_USER, CREATE_USER } from '../actions/types'

const initialState = {
  all: [],
  current: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, all: [...action.payload.data]}
    case SHOW_USER:
      return { ...state, current: action.payload.data}
    case CREATE_USER:
      return state   
    default:
      return state
  }
}
