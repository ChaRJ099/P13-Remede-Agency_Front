import React from "react";
import "./user.scss";
// import { NavLink } from "react-router-dom";
import NavHome from "../../Components/Nav-home/Nav-home";
import AccountBloc from "../../Components/AccountBloc/AccountBloc";
import Footer from "../../Components/Footer/Footer";

function User() {
  return (
    <div className="Home">
      <NavHome />
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <button className="edit-button">Edit Name</button>
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

export default User;
