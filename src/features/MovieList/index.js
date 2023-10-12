import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesListLoad } from "./movieListSlice";
import {
  selectMoviesList,
  selectStatus,
  selectGenres
} from "./movieListSlice";
import MovieTile from "../../common/Tiles/MovieTile";
import Pagination from "../../common/Pagination";
import Loading from "../Actions/Loading";
import { MovieListOrganizer } from "./styled";

const MovieList = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const moviesList = useSelector(selectMoviesList);
  const movieGenres = useSelector(selectGenres);

  useEffect(() => {
    dispatch(fetchMoviesListLoad());
  }, [dispatch]);

  return status === "success" ? (
    <>
      <MovieListOrganizer>
        {moviesList.map((movie) => (
          <MovieTile key={movie.id}
            movie={movie}
            movieGenres={movieGenres}
          />
        ))}
      </MovieListOrganizer>
      <Pagination />
    </>
  ) : (
    <Loading $titleHidden />
  );
};

export default MovieList;
