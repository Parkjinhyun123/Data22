import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import Logo_main from "../assets/logo/Logo_main.svg";

function getLinkStyle({ isActive }) {
  return {
    textDecoration: isActive ? "underline" : undefined,
  };
}

function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo-container">
          <Link to="/" className="nav-link">
            <div style={{ display: "inline-block" }}>
              <img src={Logo_main} alt="Hospetal logo" className="logo-img" />
            </div>
          </Link>
        </div>
        <ul className="nav-ul">
          <li className="nav-item">
            <NavLink to="/disease" className="nav-link" style={getLinkStyle}>
              Disease
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/hospital" className="nav-link" style={getLinkStyle}>
              Hospital
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/mbti" className="nav-link" style={getLinkStyle}>
              MBTI
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/article" className="nav-link" style={getLinkStyle}>
              Community
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/mypage" className="nav-link" style={getLinkStyle}>
              My Page
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/login" className="nav-link" style={getLinkStyle}>
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
