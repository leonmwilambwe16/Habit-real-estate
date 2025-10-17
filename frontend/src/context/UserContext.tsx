import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "@clerk/clerk-react";

interface IUserContext {
  userId: string | null;
  loading: boolean;
}

const UserContext = createContext<IUserContext>({
  userId: null,
  loading: true,
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { getToken, isSignedIn } = useAuth();
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      if (!isSignedIn) {
        setUserId(null);
        setLoading(false);
        return;
      }

      try {
        const token = await getToken();
        const res = await fetch("http://localhost:8050/api/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Failed to fetch user");
        const data = await res.json();
        setUserId(data.userId);
      } catch (err) {
        console.error("User context fetch error:", err);
        setUserId(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [isSignedIn, getToken]);

  return (
    <UserContext.Provider value={{ userId, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
