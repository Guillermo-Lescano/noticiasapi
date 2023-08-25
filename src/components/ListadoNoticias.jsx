import { Grid, Typography, Pagination, Stack } from "@mui/material";
import useNoticias from "../Hooks/useNoticias";
import Noticia from "./Noticia";
import React from "react";

const ListadoNoticias = () => {
  const { noticias, cantNoticias, handleChangePagination, paginacion } = useNoticias();
  console.log(cantNoticias)
  const totalPaginas = Math.ceil(cantNoticias / 20)

  return (
    <>
      <Typography textAlign={"center"} marginY={5} variant="h3" component={"h2"}>
        Ultimas Noticias
      </Typography>
      <Grid container spacing={2}>
        {noticias.map(noticia =>(
            <Noticia 
                key={noticia.url}
                noticia={noticia}
            />
        ))}     
      </Grid>

          <Stack spacing={3}
            direction={'row'}
            justifyContent={'center'}
            alignItems={'center'}
            sx={{marginY:5}}
            >
            <Pagination 
              count={totalPaginas}
              color="primary"
              onChange={handleChangePagination}
              page={paginacion}
            />
          </Stack>
    </>
  );
};

export default ListadoNoticias;
