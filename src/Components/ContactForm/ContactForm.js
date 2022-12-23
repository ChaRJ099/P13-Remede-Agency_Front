import "./contact-form.scss";
// import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
// import { NavLink } from "react-router-dom";
import ButtonSignIn from "../ButtonSignIn/ButtonSignIn";
import React, { useState } from "react";
import { store } from "../../Utils/store";
import { loginFetchingAction } from "../../Utils/reducer";

function ContactForm() {
  const getUser = () => {
    if (
      document.querySelector("#username") &&
      document.querySelector("#password")
    ) {
      const user = {
        email: document.querySelector("#username").value,
        password: document.querySelector("#password").value,
      };
      console.log(user);
      store.dispatch(loginFetchingAction(user));
      //@TODO : useFetch to resolve and reject, useEffect
    }
  };

  return (
    <div className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>

        {/* <ButtonSignIn
          to="/User"
          className="sign-in-button"
          text="Sign In"
          onClick={getUser()}
        /> */}

        <button type="button" className="sign-in-button" onClick={getUser}>
          Sign In
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
