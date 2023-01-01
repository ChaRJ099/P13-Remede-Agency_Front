import "./nav-visitor.scss";
import BankLogo from "../../Assets/argentBankLogo.png";
import { NavLink } from "react-router-dom";

function NavVisitor() {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav__logo-container">
        <img className="nav__logo" src={BankLogo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        <NavLink to="/Sign-in" className="nav__login">
          <i className="fa fa-user-circle nav__icon"></i>
          Sign In
        </NavLink>
      </div>
    </nav>
  );
}

export default NavVisitor;
