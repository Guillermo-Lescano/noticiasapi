import { useState, useEffect, createContext } from "react";

const NoticiasContex = createContext();

const NoticiasProvider = ({ children }) => {
  return (
    <NoticiasContex.Provider value={{}}>
        {children}
    </NoticiasContex.Provider>
  );
};

export { NoticiasProvider };

export default NoticiasContex;
