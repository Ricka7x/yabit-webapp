
import { GET_USERS_SUCCESS, FETCH_USER, GET_CURRENT_USER, SEARCH_USER, DELETE_USER_SUCCESS, PAGINATE_USERS } from '../actions/types'



const initialState = {
  all: [],
  current: {},
  currentUser: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return { ...state, all: [...action.payload.data]}
    case DELETE_USER_SUCCESS:
      const newState = state.all.filter((user) => user.id !== action.payload)
      return {...state, all: [...newState]}
    case FETCH_USER:
      return { ...state, current: action.payload.data}
    case PAGINATE_USERS:
      return { ...state, all: action.payload.data}
    case GET_CURRENT_USER:
      return { ...state, currentUser: action.payload.data}
    case SEARCH_USER:
      return { ...state, all: [...action.payload.data]}
    default:
      return state
  }
}
