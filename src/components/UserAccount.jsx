import { useState } from "react";
import useUserContext from "../hooks/useUserContext";
import { Button } from "@mui/material";
import Avatar from "./Avatar";
import Transactions from "./Transactions";

import getTotal from "../helpers/getTotal";

import UpdateProfilePopUp from "./popups/UpdateProfilePopUp";
import Chart from "./Chart";

const UserAccount = () => {
  const { loggedInUser } = useUserContext();
  const [isUpdatePopUpOpen, setIsUpdatePopUpOpen] = useState(false);

  const totalDeposits = getTotal("Deposit", loggedInUser.transactionHistory);
  const totalWithdraws = getTotal("Withdraw", loggedInUser.transactionHistory);

  const [transactionData, setTransactionData] = useState({
    labels: ["Total Amount Deposits", "Total Amount Withdraws"],
    datasets: [
      {
        label: "Total",
        data: [totalDeposits, totalWithdraws],
        backgroundColor: ["rgba(75, 192, 192, 0.5)", "rgba(255, 99, 132, 0.5)"],
        borderColor: ["rgb(75, 192, 192)", "rgb(255, 99, 132)"],
        borderWith: 2,
      },
    ],
  });

  const toggleUpdate = () => {
    setIsUpdatePopUpOpen((prev) => !prev);
  };

  return (
    <>
      <Avatar image={loggedInUser.userPic} />
      <div className="userInfo-container">
        <h5>{loggedInUser.name}</h5>
        <h6>Current Balance</h6>
        <h6>${loggedInUser.balance}</h6>
        <Button style={{ position: "static" }} onClick={toggleUpdate}>
          Edit Profile Info
        </Button>
      </div>
      <div className="report-container">
        <div>
          <h5>Transactions</h5>
          <Transactions />
        </div>

        <div className="chart-container">
          <Chart chartData={transactionData} />
        </div>
      </div>

      {isUpdatePopUpOpen && <UpdateProfilePopUp handleClose={toggleUpdate} />}
    </>
  );
};

export default UserAccount;
