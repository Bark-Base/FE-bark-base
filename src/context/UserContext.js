import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getUser } from "../services/barkBaseClient";
import { getPets } from "../services/pets";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [allPets, setAllPets] = useState([]);
  const [loading, setLoading] = useState(true);

  const value = useMemo(
    () => ({ user, setUser, allPets, setAllPets, loading }),
    [user, allPets, loading]
  );

  useEffect(() => {
    async function getAndSetUser() {
      try {
        setLoading(true);
        const currentUser = await getUser();
        setUser(currentUser);
        const pets = await getPets(currentUser.ownerId);
        setAllPets(pets);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
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