
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">

        <Link className="navbar-brand logo" to="/">
          AKSHARA
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarMenu"
        >
          <div className="navbar-nav ms-auto">

            <Link className="nav-link" to="/">
              Home
            </Link>

            <Link className="nav-link" to="/about">
              About
            </Link>

            <Link className="nav-link" to="/contact">
              Contact
            </Link>

            <Link className="nav-link" to="/login">
              Login
            </Link>

            <Link className="nav-link register-link" to="/register">
              Register
            </Link>

          </div>
        </div>

      </div>
    </nav>
  );
}

export default Header;
