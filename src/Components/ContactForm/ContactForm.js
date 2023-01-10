import "./contact-form.scss";
import React, { useState } from "react";
import { getUser } from "../../services/user-services";
import { store } from "../../Utils/store";
import { selectLoginState } from "../../Utils/selectors";
import { selectInvalidMsgState } from "../../Utils/selectors";
import { useNavigate } from "react-router";

function ContactForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const initialLoggedStatus = selectLoginState(store.getState()).logged;
  const navigate = useNavigate();
  const invalidLoginMsg = selectInvalidMsgState(store.getState()).loginStatus
    .valid;

  /**
   * @param { HTMLElement } element
   * @returns style display flex or none
   */
  function toogleInvalidAlert(element) {
    return element.style.display === "flex"
      ? (element.style.display = "none")
      : (element.style.display = "flex");
  }

  /**
   * When sending form :
   * - If API response is OK -> get user's token and navigate to profile page;
   * - Update the loginStatus validity's state -> If false, display error message;
   */
  const submitForm = (e) => {
    e.preventDefault();
    getUser({ email, password });
    const currentInvalidMsgStatus = selectInvalidMsgState(store.getState())
      .loginStatus.valid;

    if (currentInvalidMsgStatus === invalidLoginMsg && email && password) {
      const invalidMsg = document.querySelector(".form-error-msg");
      toogleInvalidAlert(invalidMsg);
    }
  };
  store.subscribe(() => {
    const loggedStatus = selectLoginState(store.getState()).logged;
    if (initialLoggedStatus !== loggedStatus && email && password) {
      navigate("/profile");
    }
  });

  return (
    <div className="form-container">
      <i className="fa fa-user-circle form__icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={submitForm}>
        <div className="form-error-msg">
          <i
            className="fa fa-exclamation-circle form-error-msg__icon"
            aria-hidden="true"
          ></i>
          <span className="form-error-msg__text">
            Email or password is invalid!
          </span>
        </div>
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
