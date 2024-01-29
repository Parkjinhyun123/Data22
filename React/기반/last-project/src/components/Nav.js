import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Nav.css";
import Logo from "../assets/Logo_main.svg";

function getLinkStyle({ isActive }) {
  return {
    textDecoration: isActive ? "underline" : undefined,
  };
}

function Nav() {
  const isLogined = JSON.parse(localStorage.getItem("member"));
  const navigate = useNavigate();

  const handleRemoveLocal = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      localStorage.removeItem("member");
      localStorage.removeItem("user.name");
      localStorage.removeItem("user.nickname");
      localStorage.removeItem("user.email");
      localStorage.removeItem("email");
      localStorage.removeItem("profileImg");
      localStorage.removeItem("nickname");
      navigate("/");
    }
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="logo-container">
          <Link to="/" className="nav-link">
            <div style={{ display: "inline-block" }}>
              <img src={Logo} alt="Hospetal logo" className="logo-img" />
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
            {!isLogined ? (
              <NavLink to="/login" className="nav-link" style={getLinkStyle}>
                Login
              </NavLink>
            ) : (
              <NavLink
                to="/"
                className="nav-link"
                style={getLinkStyle}
                onClick={handleRemoveLocal}
              >
                Logout
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
