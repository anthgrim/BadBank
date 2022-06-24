import { useContext } from "react";
import UserContext from "../context/UserContext";

const AllData = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <h1>AllData</h1>
      <br />
      <p>{JSON.stringify(user)}</p>
    </>
  );
};

export default AllData;
