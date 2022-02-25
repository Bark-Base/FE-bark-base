import { createContext, useContext, useMemo, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
//   const session = supabase.auth.session();
  const [user, setUser] = useState(
    // session ? { id: session.user.id, email: session.user.email } : {}
  );
  

  const value = useMemo(
    () => ({ user, setUser }),
    [user]
  );

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