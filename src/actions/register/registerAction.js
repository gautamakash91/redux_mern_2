import UNIVERSAL from "../../config/config";

export function setEmail(email) {
  return {
    type: "SET_EMAIL",
    payload: email
  }
}


export function setPassword(password) {
  return {
    type: "SET_PASSWORD",
    payload: password
  }
}

export function resetRegister(){
  return {
    type: "RESET_REGISTER"
  }
}

export function registerUser(email, password) {
  return (dispatch) => {
    return fetch(UNIVERSAL.BASEURL+"/register", {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(res => res.json())
      .then((resJson) => {
        console.log(resJson);
        if (resJson.token) {
          alert("registration successful");
        } else {
          alert("registration failed");
        }
        dispatch(resetRegister())
      })
  }
}