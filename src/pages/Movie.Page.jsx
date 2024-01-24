import React,  { useEffect, useState,  } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";

//HOC
import MovielayoutHoc from '../layot/Movie.layout'


  const MoviePage = () => {
    const { id } = useParams();
    const [cast, setCast] = useState([]);
  

    useEffect(() => {
      const requestCast = async () => {
        const getCast = await axios.get(`/movie/${id}/credits`);
        setCast(getCast.data.results);
      };
      requestCast();
    }, [id]);
  

  return (
    <div>MoviePage</div>
  )
  
}

export default MovielayoutHoc(MoviePage)