import "./contact-form.scss";
// import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
// import { NavLink } from "react-router-dom";
import React, { useState } from "react";
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
    <div className="form-container">
      <i className="fa fa-user-circle form__icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={getUser}>
        <div className="form-group">
          <label className="form-group__label" htmlFor="email">
            Email
          </label>
          <input
            className="form-group__input"
            type="text"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-group__label">
            Password
          </label>
          <input
            className="form-group__input"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form__checkbox">
          <input type="checkbox" id="remember-me" />
          <label className="form__checkbox__label" htmlFor="remember-me">
            Remember me
          </label>
        </div>
        <button type="submit" className="form__button">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
