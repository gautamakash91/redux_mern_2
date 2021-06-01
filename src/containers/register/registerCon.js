import React from "react";
import { connect } from "react-redux";
import Register from "../../components/register/register";
import {
  setEmail,
  setPassword,
  registerUser
} from "../../actions/register/registerAction";

const mapStateToProps = (store) => {
  return {
    register: store.register
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setEmail: (email) => {
      dispatch(setEmail(email))
    },
    setPassword: (password) => {
      dispatch(setPassword(password))
    },
    registerUser: (email, password) => {
      dispatch(registerUser(email, password))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);