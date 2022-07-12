const Home = () => {
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
          <img src="/images/banker.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Welcome! to the most secure bank there is in the virtual world. We
              promise you that we will
              <span className="bad-policy-practice">not</span> secure your data.
            </p>
          </div>
        </div>
        <hr />
        <div>
          <h2>What is Bad Bank?</h2>
          <p>
            Bad Bank is the Capstone Project for Module 2 in the{" "}
            <a href="https://executive-ed.xpro.mit.edu/professional-certificate-coding?utm_source=Google&utm_network=g&utm_medium=c&utm_term=mit%20full%20stack%20developer&utm_location=9011929&utm_campaign_id=17059210457&utm_adset_id=135511781189&utm_ad_id=594862351424">
              MIT - Fullstack Development with MERN
            </a>
            . It is called Bad Bank due to the user data exposured in the UI
            (intentionally).
            <br />
            It consists of a simple React application where the student apply
            conceps like hooks, context, routing, and form validations. As well,
            for the first attempt from the students to deploy a React
            application using AWS S3 Buckets.
          </p>
          <h5>Author: Kevin Grimaldi</h5>
          <h7>Student</h7>
          <h6>
            <a href="https://github.com/anthgrim/BadBank">GitHub Repo</a>
          </h6>
        </div>
      </div>
    </>
  );
};

export default Home;
