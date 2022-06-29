import useUserContext from "../hooks/useUserContext";
import Avatar from "./Avatar";

const UserAccount = ({ handleClose }) => {
  const { loggedInUser } = useUserContext();

  return (
    <>
      <Avatar image={loggedInUser.userPic} />
      <div>{loggedInUser.name}</div>
    </>
  );
};

export default UserAccount;
