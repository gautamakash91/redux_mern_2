import {
  INCREASE_COUNTER,
  SET_USERS
} from "../../constants/counter/counterConstants";

export function increaseCount() {
  return {
    type: INCREASE_COUNTER
  }
}

export function setUsers(users) {
  return {
    type: SET_USERS,
    payload: users
  }
}

export function getUsers() {
  return (dispatch)=>{
    return fetch("https://reqres.in/api/users?page=1")
    .then(res => res.json())
    .then((resJson) => {
      dispatch(setUsers(resJson.data));
    })
  }
}