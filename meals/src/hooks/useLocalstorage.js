import { useState } from "react";
const useLocalStorage = key => {
  const [token, setToken] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  });
  const setTokenToLocalStorage = serverToken => {
    setToken(serverToken);
    localStorage.setItem(key, serverToken);
  };
  return [token, setTokenToLocalStorage];
};

export default useLocalStorage;
