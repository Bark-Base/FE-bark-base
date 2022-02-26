import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getUser } from "../services/barkBaseClient";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const value = useMemo(() => ({ user, setUser }), [user]);

useEffect(() => {
  async function getAndSetUser() {
    const currentUser = await getUser()
    console.log(currentUser)
    setUser(currentUser)
  }
getAndSetUser()
}, [])


  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export { UserProvider, useUser };
