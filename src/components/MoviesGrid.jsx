import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import { get } from "./../utils/httpCliente";
import { Spinner } from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "./MoviesGrid.module.css";


export function MoviesGrid({ search }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      const searchUrl = search
        ? "/search/movie?query=" + search + "&page=" + page
        : "/discover/movie?page=" + page;
      get(searchUrl).then((data) => {
        setMovies((prevMovies) => prevMovies.concat(data.results));
        setHasMore(data.page < data.total_pages);
        setLoading(false);  
      });
    }, 1500);
  }, [search, page]);

  return (
    <InfiniteScroll
      dataLength={movies.length}
      hasMore={hasMore}
      next={() => setPage((prevPage) => prevPage + 1)}
      loader={<Spinner />}
    >
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}
