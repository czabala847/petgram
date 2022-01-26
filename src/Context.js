import React from "react";
import { useApolloClient } from "@apollo/client";

const Context = React.createContext();

const Provider = ({ children }) => {
  const clientApollo = useApolloClient();

  const [isAuth, setIsAuth] = React.useState(() => {
    return sessionStorage.getItem("token");
  });

  const activeAuth = (token) => {
    setIsAuth(true);
    sessionStorage.setItem("token", token);
  };

  const removeAuth = () => {
    setIsAuth(false);
    sessionStorage.removeItem("token");
    clientApollo.resetStore();
  };

  return (
    <Context.Provider value={{ isAuth, activeAuth, removeAuth }}>
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
