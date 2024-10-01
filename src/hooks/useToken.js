import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth";

const useToken = () => {
  const { token, setToken } = useContext(AuthContext);
  const [isTokenLoading, setIsTokenLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("_token");
    if (storedToken) {
      setToken(storedToken);
    }
    setIsTokenLoading(false);
  }, [setToken]);

  const saveToken = (newToken) => {
    localStorage.setItem("_token", newToken);
    setToken(newToken);
  };

  const removeToken = () => {
    localStorage.removeItem("_token");
    setToken(null);
  };

  return { token, saveToken, removeToken, isTokenLoading };
};

export default useToken;
