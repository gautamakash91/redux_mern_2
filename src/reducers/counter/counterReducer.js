import {
  INCREASE_COUNTER,
  SET_USERS
} from "../../constants/counter/counterConstants";

let initial_state = {
  count: 0,
  users: []
}

export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case INCREASE_COUNTER:
      return { ...state, count: initial_state.count++ }
    case SET_USERS:
      return { ...state, users: action.payload }
    default:
      return state;
  }
}