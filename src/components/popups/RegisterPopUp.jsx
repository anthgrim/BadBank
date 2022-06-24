const RegisterPopUp = ({ handleClose }) => {
  return (
    <>
      <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={handleClose}>
            x
          </span>
          <br />
          Register
        </div>
      </div>
    </>
  );
};

export default RegisterPopUp;
