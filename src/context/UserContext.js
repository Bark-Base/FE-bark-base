import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getUser } from "../services/barkBaseClient";
import { getPets } from "../services/pets";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [allPets, setAllPets] = useState([{}]);

  const value = useMemo(
    () => ({ user, setUser, allPets, setAllPets }),
    [user, allPets]
  );

  useEffect(() => {
    async function getAndSetUser() {
      const currentUser = await getUser();
      setUser(currentUser);
      const pets = await getPets(currentUser.ownerId);
      setAllPets(pets);
    }
    getAndSetUser();
  }, []);
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
