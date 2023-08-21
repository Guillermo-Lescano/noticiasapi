import { useContext } from "react";
import NoticiasContex from "../Context/NoticiasProvider";

const useNoticias = () => {
  return useContext(NoticiasContex);
};

export default useNoticias;
