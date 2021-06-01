const initial_state = {
  email: "",
  password: ""
}

export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload }
    case "SET_PASSWORD":
      return { ...state, password: action.payload }
    case "RESET_REGISTER":
      return { ...state, email: "", password: "" }
    default:
      return state;
  }
}
