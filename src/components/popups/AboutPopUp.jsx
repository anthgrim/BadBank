import { Button, Box } from "@mui/material";

const AboutPopUp = ({ handleClose }) => {
  return (
    <>
      <div className="popup-box">
        <div className="box">
          <div className="card">
            <div className="card-body">
              <span className="">About Bad Bank</span>
              <hr />
              <div>
                <Box m={2} className="custom-btn-group">
                  <div>
                    <h2>What is Bad Bank?</h2>
                    <p>
                      Bad Bank is the Capstone Project for Module 2 in the{" "}
                      <a href="https://executive-ed.xpro.mit.edu/professional-certificate-coding?utm_source=Google&utm_network=g&utm_medium=c&utm_term=mit%20full%20stack%20developer&utm_location=9011929&utm_campaign_id=17059210457&utm_adset_id=135511781189&utm_ad_id=594862351424">
                        MIT - Fullstack Development with MERN
                      </a>
                      . It is called Bad Bank due to the users data exposured in
                      the UI (intentionally).
                      <br /> <br />
                      It consists of a simple React application where the
                      students apply concepts such as hooks, context, routing,
                      and form validations. As well, for the first attempt from
                      the students to deploy a React application using AWS S3
                      Buckets.
                      <br /> <br />
                      <div className="features">
                        <div>
                          List of technologies and libraries used:
                          <ul>
                            <li>React JS</li>
                            <li>Formik</li>
                            <li>Yup Schema Validation</li>
                            <li>React Toastify</li>
                            <li>Material UI</li>
                            <li>Bootstrap</li>
                            <li>ChartJS</li>
                          </ul>
                        </div>
                        <div>
                          Functionalities available:
                          <ul>
                            <li>Create Account</li>
                            <li>Login to Account</li>
                            <li>Edit Account</li>
                            <li>Transactions List</li>
                            <li>Deposit</li>
                            <li>Withdraw</li>
                            <li>Totals Charts</li>
                          </ul>
                        </div>
                      </div>
                    </p>
                    <h5>
                      Kevin Grimaldi <h6>MIT Student</h6>
                    </h5>

                    <h6>
                      <a href="https://github.com/anthgrim/BadBank">
                        GitHub Repo
                      </a>
                    </h6>
                  </div>
                </Box>

                <Box m={2} className="custom-btn-group">
                  <Button
                    variant="contained"
                    type="submit"
                    onClick={handleClose}
                  >
                    Close
                  </Button>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPopUp;
