import React from "react";

const Context = React.createContext();

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = React.useState(false);

  const activeAuth = () => setIsAuth(true);

  return (
    <Context.Provider value={{ isAuth, activeAuth }}>
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
