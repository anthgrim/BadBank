import { useState } from "react";
import RegisterPopUp from "./popups/RegisterPopUp";
import LoginPopUp from "./popups/LoginPopup";

const Home = () => {
  const [isRegisterPopUp, setIsRegiterPopUp] = useState(false);
  const [isLoginPopUp, setIsLoginPopUp] = useState(false);

  const toggleRegisterPopUp = () => {
    setIsRegiterPopUp(!isRegisterPopUp);
  };
  const toggleLoginPopUp = () => {
    setIsLoginPopUp(!isLoginPopUp);
  };

  return (
    <>
      <h1>Home</h1>
      <br />
      <button
        type="button"
        className="btn btn-primary"
        onClick={toggleRegisterPopUp}
      >
        Register
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={toggleLoginPopUp}
      >
        Login
      </button>

      {isRegisterPopUp && <RegisterPopUp handleClose={toggleRegisterPopUp} />}
      {isLoginPopUp && <LoginPopUp handleClose={toggleLoginPopUp} />}
    </>
  );
};

export default Home;
