import { FETCH_USERS, FETCH_USER } from '../actions/types'

const initialState = {
  all: [],
  current: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { all: [...action.payload.data]}
    case FETCH_USER:
      return { current: action.payload.data}
    default:
      return state
  }
}
