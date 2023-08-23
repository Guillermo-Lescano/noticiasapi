import axios from "axios";
import { useState, useEffect, createContext } from "react";

const NoticiasContex = createContext();

const NoticiasProvider = ({ children }) => {
  const [categoria, setCategoria] = useState("general");
  const [noticias, setNoticias] = useState([])

  useEffect(() =>{
    const consultaAPI = async() => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&pageSize=34&apiKey=${import.meta.env.VITE_API_KEY}`
      
      const {data} = await axios(url)
      setNoticias(data.articles)
    }
    consultaAPI()
  },[categoria])

  const handleChangeCategoria = (e) => {
    setCategoria(e.target.value);
  };

  return (
    <NoticiasContex.Provider
      value={{
        categoria,
        handleChangeCategoria,
        noticias
      }}
    >
      {children}
    </NoticiasContex.Provider>
  );
};

export { NoticiasProvider };

export default NoticiasContex;
