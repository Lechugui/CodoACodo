import React from 'react'
import { getPopularMovies } from '../services/getPopular'
import useFetch from '../../hooks/useFetch';

const Peliculas = () => {
    const {
      data: movies1,
      error: error1,
      isLoading: isLoading1,
    } = useFetch(getPopularMovies);
  
    console.log(movies1);
    
    return (
      
      <>
        {isLoading1 ||  (
        <div>Cargando</div>
      )  (
        <>
          
        </>
      )}
      </>
      
    );
  };

export default Peliculas