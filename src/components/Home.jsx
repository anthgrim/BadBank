import { useState } from "react";
import AboutPopUp from "./popups/AboutPopUp";

const Home = () => {
  const [isAboutPopUp, setIsAboutPopUp] = useState(false);

  const toggleAboutPopUp = () => {
    setIsAboutPopUp(!isAboutPopUp);
  };

  const customStyles = {
    width: "25rem",
    padding: "10px",
    zIndex: "-1",
  };

  return (
    <>
      <div className="card-container">
        <div className="card" style={customStyles}>
          <h5 className="card-title">Bad Bank</h5>
          <img src="/images/money.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Welcome! to the safest bank in the virtual world. We promise you
              that we will
              <span className="bad-policy-practice">not</span> secure your data.
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="card-container">
        <button onClick={toggleAboutPopUp} className="btn btn-primary">
          Learn About Bad Bank
        </button>
      </div>

      {isAboutPopUp && <AboutPopUp handleClose={toggleAboutPopUp} />}
    </>
  );
};

export default Home;
