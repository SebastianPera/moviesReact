import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "./../utils/httpCliente";
import styles from "./MovieDetails.module.css";
import { Spinner } from "../components/Spinner";

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

  const imagenUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imagenUrl}
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
