import "./contact-form.scss";
// import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
// import { NavLink } from "react-router-dom";
import ButtonSignIn from "../ButtonSignIn/ButtonSignIn";

function ContactForm() {
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
        {
          /* /*PLACEHOLDER DUE TO STATIC SITE*/
          <ButtonSignIn to="/User" className="sign-in-button" text="Sign In" />
          //   <!-- SHOULD BE THE BUTTON BELOW
          //   <!-- <button class="sign-in-button">Sign In</button> -->
        }
      </form>
    </div>
  );
}

export default ContactForm;
