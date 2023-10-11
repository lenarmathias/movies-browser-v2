import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesListLoad } from "./movieListSlice";
import {
  selectMoviesList,
  selectStatus,
  selectGenres
} from "./movieListSlice";
import MovieTile from "../../common/Tiles/MovieTile";
import Loading from "../Actions/Loading";
import { MovieListOrganizer } from "./styled";

const MovieList = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const moviesList = useSelector(selectMoviesList);
  const movieGenres = useSelector(selectGenres);

  useEffect(() => {
    if (status !== "success") {
      dispatch(fetchMoviesListLoad());
    }
  }, [dispatch, status]);

  return (
    status === "success" ? (
      <MovieListOrganizer>
        {moviesList.map((movie) => (
          <MovieTile
            key={movie.id}
            movie={movie}
            movieGenres={movieGenres}
          />
        ))}
      </MovieListOrganizer>
    ) : (
      <Loading $titleHidden />
    )
  );
};

export default MovieList;
