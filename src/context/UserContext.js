import { createContext, useState } from "react";
import users from "../data/user";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(users);
  const [loggedInUser, setLoggedInUser] = useState("");

  return (
    <>
      <UserContext.Provider
        value={{ user, setUser, loggedInUser, setLoggedInUser }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};

export default UserContext;
