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
          <h5 className="card-title">C-Ash Bad Bank</h5>
          <img src="images/cashbank.jpg" className="card-img-top" alt="logo" />
          <div className="card-body">
            <p className="card-text">
              Welcome to C-Ash bank,  this is not the place to stash your cash but there are some fun things to click on!
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
