import useUserContext from "../hooks/useUserContext";
import { useEffect } from "react";

const AllData = () => {
  const { user } = useUserContext();

  useEffect(() => {
    console.log("refresh");
  }, [user]);

  return (
    <>
      <h1>AllData</h1>
      <br />
      <p>{JSON.stringify(user)}</p>
    </>
  );
};

export default AllData;
