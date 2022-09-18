import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "./../utils/httpCliente";
import { Spinner } from "../components/Spinner";
import { getMovieImg } from './../utils/getMovieImg';
import styles from "./MovieDetails.module.css";

export function MovieDetails() {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      get("/movie/" + movieId).then((data) => {
        setMovie(data);
        setLoading(false);
      });
    }, 1000);
  }, [movieId]);

  if (loading) {
    return <Spinner />;
  }
  
  const imageUrl = getMovieImg(movie.poster_path, 500);

  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}>
          <strong>Title:</strong> {movie.title}
        </p>
        <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
        <p>
          <strong>Description:</strong> {movie.overview}
        </p>
      </div>
    </div>
  );
}
