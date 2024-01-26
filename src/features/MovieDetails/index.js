import { useMovieDetails } from "./useMovieDetails";
import MovieTopInfo from "./MovieTopInfo";
import MovieInfo from "./MovieInfo";
import MoviePeople from "./MoviePeople";
import Loading from "../Actions/Loading";
import Error from "../Actions/Error";
import { imageUrl } from "../../common/imageUrl";
import { MovieDetailsWrapper } from "./styled";
import { SmallTile } from "./MovieInfo/styled";

const MovieDetails = () => {
  const {
    status,
    title,
    backdrop_path,
    vote_average,
    vote_count,
    poster_path,
    release_date,
    production_countries,
    genres,
    overview,
    movieCast,
    movieCrew,
    getReleaseYear,
    getFullReleaseDate,
    getProductionCountries
  } = useMovieDetails();

  if (status === "error") {
    return <Error />;
  }

  return status === "success" ? (
    <>
      <MovieDetailsWrapper>
        <MovieTopInfo
          background={imageUrl + backdrop_path}
          title={title}
          votes={vote_count}
          rating={Number(vote_average)}
        />
        <MovieInfo
          $movieTileDetails
          description={overview}
          votes={vote_count}
          rating={Number(vote_average)}
          smallImgUrl={imageUrl + poster_path}
          title={title}
          year={getReleaseYear(release_date)}
          release={getFullReleaseDate(release_date)}
          countries={getProductionCountries(production_countries)}
          genres={
            genres &&
            genres.map((genre) => (
              <SmallTile key={genre.id}>{genre.name}</SmallTile>
            ))
          }
        />
        {movieCast.length > 0 && (
          <MoviePeople title="Cast" moviePeople={movieCast} />
        )}
        {movieCrew.length > 0 && (
          <MoviePeople title="Crew" moviePeople={movieCrew} />
        )}
      </MovieDetailsWrapper>
    </>
  ) : (
    <Loading $titleHidden />
  );
};

export default MovieDetails;