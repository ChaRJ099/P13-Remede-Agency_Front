import "./button-sign-in.scss";
// import { NavLink } from "react-router-dom";
// import {
//   userSignUp,
//   userLogin,
//   userProfile,
// } from "../../services/api-services";
// import { useState, useEffect } from "react";

function ButtonSignIn(props) {
  //   const [token, setToken] = useState(null);
  //   const [isLoged, setIsloged] = useState(false);

  //   function login() {
  //     loginUser();
  //     console.log("token", token);
  //     getUser();
  //   }

  //     async function loginUser() {

  //       let user = {
  //         email: 'tony@stark.com',
  //         password: 'password123',
  //       };
  //       await userLogin(user).then((value) => {
  //         console.log('test', value.body.token ? value.body.token : null)
  //         const status = value.status === 200 ? true : false;
  //         const token = value.body.token ? value.body.token : null;
  //         setIsloged(status);
  //         setToken(token);
  //         console.log('isLoged',isLoged,"token", token);
  //       })
  // return (isLoged, token);

  //     }

  //   async function createUser() {

  //     let user = {
  //       email: "test3@test.com",
  //       password: "testpass",
  //       firstName: "Test",
  //       lastName: "TestTrois",
  //     };
  //     userSignUp(user);
  //     console.log("new user", user);
  //   }

  //   async function getUser() {

  //     userProfile(token);
  //     console.log("new user",  userProfile(token));
  //   }

  return (
    // <NavLink to="/User" className="sign-in-button">

    // </NavLink>
    /* // -- SHOULD BE THE BUTTON BELOW*/
    <button type="button" className="sign-in-button">
      {props.text}
    </button>
  );
}

export default ButtonSignIn;
