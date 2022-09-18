import no_poster from "../img/no_poster.jpg"

export function getMovieImg(path, width) {
  return path ? `https://image.tmdb.org/t/p/w${width}${path}` : no_poster;
}