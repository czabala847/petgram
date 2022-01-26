import React from "react";

const Context = React.createContext();

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = React.useState(() => {
    return sessionStorage.getItem("token");
  });

  const activeAuth = (token) => {
    setIsAuth(true);
    sessionStorage.setItem("token", token);
  };

  return (
    <Context.Provider value={{ isAuth, activeAuth }}>
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
