import axios from "axios";
import { useState, useEffect, createContext } from "react";

const NoticiasContex = createContext();

const NoticiasProvider = ({ children }) => {
  const [categoria, setCategoria] = useState("general");
  const [noticias, setNoticias] = useState([])
  const [paginacion, setPaginacion] = useState(1)
  const [cantNoticias, setCantNoticias] = useState(0)


  useEffect(() =>{
    const consultaAPI = async() => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&pageSize=20&apiKey=${import.meta.env.VITE_API_KEY}`
      
      const {data} = await axios(url)
      setNoticias(data.articles)
      setCantNoticias(data.totalResults)
      setPaginacion(1)
    }
    consultaAPI()
  },[categoria])

  useEffect(() =>{
    const consultaAPI = async() => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&page=${paginacion}category=${categoria}&pageSize=20&apiKey=${import.meta.env.VITE_API_KEY}`
      
      const {data} = await axios(url)
      setNoticias(data.articles)
      setCantNoticias(data.totalResults)
    }
    consultaAPI()
  },[paginacion])



  const handleChangeCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const handleChangePagination = (e, valor) =>{
    setPaginacion(valor)
  }

  return (
    <NoticiasContex.Provider
      value={{
        categoria,
        handleChangeCategoria,
        noticias,
        cantNoticias,
        handleChangePagination,
        paginacion
      }}
    >
      {children}
    </NoticiasContex.Provider>
  );
};

export { NoticiasProvider };

export default NoticiasContex;
