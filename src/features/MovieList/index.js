import { useMovieList } from "./useMovieList";
import MovieTile from "../../common/Tiles/MovieTile";
import Pagination from "../../common/Pagination";
import Loading from "../Actions/Loading";
import SearchMovies from "../SearchMovies";
import Error from "../Actions/Error";
import { MovieListOrganizer } from "./styled";
import { SectionHeading } from "../../common/styled";

const MovieList = () => {
  const {
    status,
    moviesList,
    movieGenres,
    totalPages,
    currentPage,
    query
  } = useMovieList();

  if (query) {
    return <SearchMovies movieGenres={movieGenres} />;
  }

  if (status === "error") {
    return <Error />;
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