import { Grid, Typography } from "@mui/material";
import useNoticias from "../Hooks/useNoticias";
import Noticia from "./Noticia";
import React from "react";

const ListadoNoticias = () => {
  const { noticias } = useNoticias();

  return (
    <>
      <Typography textAlign={"center"} marginY={5} variant="h3" component={"h2"}>
        Ultimas Noticias
      </Typography>
      <Grid>
        {noticias.map(noticia =>(
            <Noticia 
                key={noticia.url}
                noticia={noticia}
            />
        ))}     
      </Grid>
    </>
  );
};

export default ListadoNoticias;
