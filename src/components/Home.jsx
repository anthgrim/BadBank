import { useState } from "react";
import RegisterPopUp from "./popups/RegisterPopUp";

const Home = () => {
  const [isRegisterPopUp, setIsRegiterPopUp] = useState(false);

  const toggleRegisterPopUp = () => {
    setIsRegiterPopUp(!isRegisterPopUp);
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
      {isRegisterPopUp && <RegisterPopUp handleClose={toggleRegisterPopUp} />}
    </>
  );
};

export default Home;
