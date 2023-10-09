import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesListLoad } from "./movieListSlice";
import { selectMoviesList, selectStatus, selectGenres } from "./movieListSlice";
import {
  MoviesTilesWrapper,
  MovieTile,
  MoviePoster,
  MissingMoviePoster,
  MissingMoviePosterIcon,
  SeparateFlexContainer,
  MovieInfoContainer,
  MovieTitle,
  GenresContainer,
  RatingContainer,
  RatingStarIcon,
  RatingNumber,
} from "./styled";
import { ContentLink } from "../../common/styled";
import { SmallGreyText, SmallTile } from "../../common/styled";
import Rating from "../../common/Rating";

const MoviesTiles = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);

  useEffect(() => {
    if (status !== "success") {
      dispatch(fetchMoviesListLoad());
    }
  }, [dispatch, status]);

  const moviesList = useSelector(selectMoviesList);
  const movieGenres = useSelector(selectGenres);

  const posterUrl = "https://image.tmdb.org/t/p/original";

  const getReleaseYear = (releaseDate) => {
    const dateParts = releaseDate.split("-");
    return dateParts[0];
  };

  const mapGenreIdToNames = (genreId) => {
    const genre = movieGenres.find((genre) => genre.id === genreId);
    return genre ? genre.name : "Unknown";
  };

  return (
    <MoviesTilesWrapper>
      {moviesList.map((movie) => (
        <MovieTile key={movie.id}>
          <ContentLink to={`/movies/${movie.id}`}>
            {movie.poster_path ? (
              <MoviePoster
                src={posterUrl + movie.poster_path}
                alt="Movie Poster"
              />
            ) : (
              <MissingMoviePoster as="div">
                <MissingMoviePosterIcon />
              </MissingMoviePoster>
            )}
          </ContentLink>
          <SeparateFlexContainer>
            <MovieInfoContainer>
              <ContentLink to={`/movies/${movie.id}`}>
                <MovieTitle>{movie.title}</MovieTitle>
              </ContentLink>
              <SmallGreyText>
                {getReleaseYear(movie.release_date)}
              </SmallGreyText>
              <GenresContainer>
                {movie.genre_ids &&
                  movie.genre_ids.map((genreId) => (
                    <SmallTile key={genreId}>
                      {mapGenreIdToNames(genreId)}
                    </SmallTile>
                  ))}
              </GenresContainer>
            </MovieInfoContainer>
            <Rating
              votes={movie.vote_count}
              rating={movie.vote_average}
              movieTileDetails
            />
          </SeparateFlexContainer>
        </MovieTile>
      ))}
    </MoviesTilesWrapper>
  );
};

export default MoviesTiles;
