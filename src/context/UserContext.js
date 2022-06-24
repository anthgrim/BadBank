import { createContext, useState } from "react";
import users from "../data/user";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ users });

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    </>
  );
};

export default UserContext;
