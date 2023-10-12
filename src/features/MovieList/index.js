import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMoviesListLoad,
  selectMoviesListState,
  selectMoviesList,
  selectStatus,
  selectGenres
} from "./movieListSlice";
import { selectPage } from "../../common/Pagination/paginationSlice";
import MovieTile from "../../common/Tiles/MovieTile";
import Pagination from "../../common/Pagination";
import Loading from "../Actions/Loading";
import { MovieListOrganizer } from "./styled";

const MovieList = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const moviesList = useSelector(selectMoviesList);
  const movieGenres = useSelector(selectGenres);

  const totalPages = 500;
  const { currentPage } = useSelector(selectMoviesListState);
  const selectedPage = useSelector(selectPage);

  useEffect(() => {
    dispatch(fetchMoviesListLoad({ page: currentPage }));
  }, [dispatch, currentPage]);

  useEffect(() => {
    if (currentPage !== selectedPage) {
      dispatch(fetchMoviesListLoad({ page: selectedPage }));
    }
  }, [dispatch, currentPage, selectedPage]);

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
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </>
  ) : (
    <Loading $titleHidden />
  );
};

export default MovieList;