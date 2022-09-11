import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { get } from './../utils/httpCliente';
import { Spinner } from './Spinner';
import { useSearchParams } from 'react-router-dom';

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
 

  const[ searchParams ] = useSearchParams();
  const search = searchParams.get("search")


  useEffect(() => {
    setLoading(true);
    const searchUrl = search ? "/search/movie?query=" + search : "/discover/movie";
    get(searchUrl)
      .then((data) => {
        setMovies(data.results);
        setLoading(false)
      });
  }, [search]);

  if (loading) {
    return <Spinner/>
  }

  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
