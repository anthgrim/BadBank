import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
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
                <Link to="/createAccount" className="nav-link">
                  Create Account
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
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
                <Link to="/balance" className="nav-link">
                  Balance
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/allData" className="nav-link">
                  All Data
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
