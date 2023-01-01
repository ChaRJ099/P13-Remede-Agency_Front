// import React, { useState } from "react";
import "./profile.scss";
import NavLogged from "../../Components/Nav-logged/navLogged";
import ProfileForm from "../../Components/UpdateProfileForm/updateProfileForm";
import AccountBloc from "../../Components/AccountBloc/AccountBloc";
import Footer from "../../Components/Footer/Footer";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.user);

  return (
    <div className="profile-container">
      <NavLogged firstName={user.firstName} />
      <main className="profile-main profile-main--bg-dark">
        <div className="profile-header">
          <h1>
            Welcome back
            <br />
            {user.firstName} {user.lastName}
          </h1>
          <ProfileForm />
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
