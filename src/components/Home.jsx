const Home = () => {
  const customStyles = {
    width: "25rem",
    padding: "10px",
    zIndex: "-1",
  };

  return (
    <>
      <div className="card" style={customStyles}>
        <h5 className="card-title">Bad Bank</h5>
        <img src="/images/Bank.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            Welcome! to the most secure bank there is in the virtual world. We
            promise you that we will
            <span className="bad-policy-practice">not</span> secure your data.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
