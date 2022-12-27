import "./contact-form.scss";
// import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
// import { NavLink } from "react-router-dom";
import ButtonSignIn from "../ButtonSignIn/ButtonSignIn";
import React, { useEffect, useState } from "react";
import { store } from "../../Utils/store";
import { loginAction, loginResolvedAction } from "../../Utils/reducer";
import { userLogin } from "../../services/api-services";

function ContactForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const getUser = async (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    console.log("user", user);
    // utile ?
    store.dispatch(loginAction(user));
    //@TODO : useFetch to resolve and reject, useEffect

    const response = await userLogin(user);
    console.log("response", response);

    if (response.status === 200) {
      localStorage.setItem("isConnected", "True");
      localStorage.setItem("token", response.body.token);
      store.dispatch(loginResolvedAction(response.body.token));
    } else {
      localStorage.setItem("isConnected", "False");
      localStorage.removeItem("token");
    }
  };

  return (
    <div className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={getUser}>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
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

        <button type="submit" className="sign-in-button">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
