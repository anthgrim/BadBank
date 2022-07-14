import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useUserContext from "../hooks/useUserContext";

import RegisterPopUp from "./popups/RegisterPopUp";
import LoginPopUp from "./popups/LoginPopup";

const Navbar = () => {
  const [isRegisterPopUp, setIsRegiterPopUp] = useState(false);
  const [isLoginPopUp, setIsLoginPopUp] = useState(false);
  const { loggedInUser, setLoggedInUser } = useUserContext();
  const navigate = useNavigate();

  const toggleRegisterPopUp = () => {
    setIsRegiterPopUp(!isRegisterPopUp);
  };

  const toggleLoginPopUp = () => {
    setIsLoginPopUp(!isLoginPopUp);
  };

  const handleLogout = () => {
    setLoggedInUser("");
    navigate("/");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/home" className="navbar-brand">
            Bad Bank
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/deposit" className="nav-link">
                  Deposit
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/withdraw" className="nav-link">
                  Withdraw
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/allData" className="nav-link">
                  All Data
                </Link>
              </li>
              {loggedInUser ? (
                <>
                  <li className="nav-item">
                    <Link to="/myAccount" className="nav-link">
                      My Account
                    </Link>
                  </li>
                  <li className="nav-item">
                    <span onClick={handleLogout} className="nav-link clickable">
                      Logout
                    </span>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <span
                      onClick={toggleRegisterPopUp}
                      className="nav-link clickable"
                    >
                      Create Account
                    </span>
                  </li>
                  <li className="nav-item">
                    <span
                      onClick={toggleLoginPopUp}
                      className="nav-link clickable"
                    >
                      Login
                    </span>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {isRegisterPopUp && <RegisterPopUp handleClose={toggleRegisterPopUp} />}
      {isLoginPopUp && <LoginPopUp handleClose={toggleLoginPopUp} />}
    </>
  );
};

export default Navbar;
