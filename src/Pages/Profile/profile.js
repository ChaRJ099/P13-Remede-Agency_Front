import React, { useState } from "react";
import "./profile.scss";
// import { NavLink } from "react-router-dom";
import NavHome from "../../Components/Nav-home/Nav-home";
import AccountBloc from "../../Components/AccountBloc/AccountBloc";
import Footer from "../../Components/Footer/Footer";

function Profile() {
  const [formDisplay, setFormDisplay] = useState(false);

  const toogleForm = (e) => {
    e.preventDefault();
    return setFormDisplay(!formDisplay);
  };

  function Form() {
    if (formDisplay) {
      return (
        <form className="profile-form">
          <div className="profile-form__inputs-group">
            <input placeholder="firstname"></input>
            <input placeholder="lastname"></input>
          </div>
          <div className="profile-form__buttons-group">
            <button type="button" className="profile-header__save-button">
              Save
            </button>
            <button
              onClick={toogleForm}
              type="button"
              className="profile-header__cancel-button"
            >
              Cancel
            </button>
          </div>
        </form>
      );
    } else {
      return (
        <button className="profile-header__edit-button" onClick={toogleForm}>
          Edit Name
        </button>
      );
    }
  }

  return (
    <div className="profile-container">
      <NavHome />
      <main className="profile-main profile-main--bg-dark">
        <div className="profile-header">
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <Form />
        </div>
        <h2 className="sr-only">Accounts</h2>
        <AccountBloc
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          amountDescription="Available Balance"
        />
        <AccountBloc
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          amountDescription="Available Balance"
        />
        <AccountBloc
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          amountDescription="Current Balance"
        />
      </main>
      <Footer />
    </div>
  );
}

export default Profile;
