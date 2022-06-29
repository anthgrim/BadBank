import { useState } from "react";
import useUserContext from "../hooks/useUserContext";
import { Button } from "@mui/material";
import Avatar from "./Avatar";
import Transactions from "./Transactions";

import UpdateProfilePopUp from "./popups/UpdateProfilePopUp";

const UserAccount = () => {
  const { loggedInUser } = useUserContext();
  const [isUpdatePopUpOpen, setIsUpdatePopUpOpen] = useState(false);

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
        <Button onClick={toggleUpdate}>Edit Profile Info</Button>
      </div>
      <Transactions />
      {isUpdatePopUpOpen && <UpdateProfilePopUp handleClose={toggleUpdate} />}
    </>
  );
};

export default UserAccount;
