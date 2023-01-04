import "./nav-logged.scss";
import BankLogo from "../../Assets/argentBankLogo.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import { resetOnLogout } from "../../services/user-services";

function NavLogged({ firstName }) {
  const navigate = useNavigate();

  async function logOut() {
    await resetOnLogout();
    navigate("/");
  }
  return (
    <nav className="nav">
      <NavLink to="/" className="nav__logo-container">
        <img className="nav__logo" src={BankLogo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        <NavLink to="" className="nav__username">
          <i className="fa fa-user-circle nav__username-icon"></i>
          <span>{firstName}</span>
        </NavLink>
        <NavLink to="" className="nav__logout" onClick={logOut}>
          <i className="fa fa-sign-out nav__logout-icon"></i>
          Sign Out
        </NavLink>
      </div>
    </nav>
  );
}

export default NavLogged;
