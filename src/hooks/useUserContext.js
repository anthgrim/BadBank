import { useContext } from "react";
import UserContext from "../context/UserContext";

const useUserContext = () => {
  return useContext(UserContext);
};

export default useUserContext;
