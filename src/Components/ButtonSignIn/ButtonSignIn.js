import "./button-sign-in.scss";
import { NavLink } from "react-router-dom";
import { login } from "../../services/api-services";
// import { useState, } from "react";


function ButtonSignIn(props) {
  // const [user, setUser] = useState({});



  async function loginOnSubmit() {
  
    let user = {
      email: 'tony@stark.com',
      password: 'password123',
    };
    login(user);
    console.log(user);
  }

  return (
    <NavLink to="/User" className="sign-in-button" onClick={loginOnSubmit}>
      {props.text}
    </NavLink>
    /* // -- SHOULD BE THE BUTTON BELOW*/
    /* <button class="sign-in-button">Sign In</button> --> */
  );
}

export default ButtonSignIn;
