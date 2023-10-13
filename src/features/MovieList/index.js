import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  fetchMoviesListLoad,
  selectMoviesListState,
  selectMoviesList,
  selectStatus,
  selectGenres
} from "./movieListSlice";
import {
  selectPage,
  resetPage
} from "../../common/Pagination/paginationSlice";
import { useQueryParameter } from "../../common/NavigationBar/Search/queryParameter";
import MovieTile from "../../common/Tiles/MovieTile";
import Pagination from "../../common/Pagination";
import Loading from "../Actions/Loading";
import SearchMovies from "../SearchMovies";
import { MovieListOrganizer } from "./styled";
import { SectionHeading } from "../../common/styled";

const MovieList = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const status = useSelector(selectStatus);
  const moviesList = useSelector(selectMoviesList);
  const movieGenres = useSelector(selectGenres);

  const totalPages = 500;
  const { currentPage } = useSelector(selectMoviesListState);
  const selectedPage = useSelector(selectPage);

  useEffect(() => {
    const unlisten = history.listen(() => {
      dispatch(resetPage());
    });

    return () => {
      unlisten();
    };
  }, [dispatch, history]);

  useEffect(() => {
    dispatch(fetchMoviesListLoad({ page: currentPage }));
  }, [dispatch, currentPage]);

  useEffect(() => {
    if (currentPage !== selectedPage) {
      dispatch(fetchMoviesListLoad({ page: selectedPage }));
    }
  }, [dispatch, currentPage, selectedPage]);

  const query = useQueryParameter("search");
  if (query) {
    return <SearchMovies movieGenres={movieGenres} />;
  }

  return status === "success" ? (
    <>
      <SectionHeading>
        Popular movies
      </SectionHeading>
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
    <>
      <SectionHeading>
        Popular movies
      </SectionHeading>
      <Loading $titleHidden />
    </>
  );
};

export default MovieList;