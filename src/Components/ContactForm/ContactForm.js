import "./contact-form.scss";
// import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
// import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { getUser } from "../../services/user-services";
import { store } from "../../Utils/store";
import { selectLoginState } from "../../Utils/selectors";
import { useNavigate } from "react-router";

function ContactForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const initialLoggedStatus = selectLoginState(store.getState()).logged;
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    getUser({ email, password });
  };

  store.subscribe(() => {
    const loggedStatus = selectLoginState(store.getState()).logged;
    if (initialLoggedStatus !== loggedStatus && email && password) {
      console.log("subscribeBis", loggedStatus);

      navigate("/profile");
    }
    console.log("subscribe", loggedStatus);
  });
  // const goToProfile = store.subscribe(
  //   selectLoginState(store.getState()).logged
  // );
  // goToProfile();

  return (
    <div className="form-container">
      <i className="fa fa-user-circle form__icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={submitForm}>
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
