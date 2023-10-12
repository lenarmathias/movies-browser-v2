import { MovieDetailsWrapper } from "./styled";
import MovieTopInfo from "./MovieTopInfo";
import MoviePeople from "./MoviePeople";
import { useDispatch, useSelector } from "react-redux";
import {
  getMovieId,
  selectDetails,
  selectStatus,
  selectCredits,
  fetchMovieDetailsLoad,
} from "./movieDetailsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { imageUrl } from "../../common/imageUrl";
import Loading from "../Actions/Loading";
import MovieInfo from "./MovieInfo";
import { SmallTile } from "./MovieInfo/styled";

const MovieDetails = () => {
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    title,
    backdrop_path,
    vote_average,
    vote_count,
    poster_path,
    release_date,
    production_countries,
    genres,
    overview,
    ...state
  } = useSelector(selectDetails) ?? {};
  console.log(state);

  const selectedMoviePeople = useSelector(selectCredits);
  const movieCast = selectedMoviePeople.cast;
  const movieCrew = selectedMoviePeople.crew;

  useEffect(() => {
    dispatch(fetchMovieDetailsLoad());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getMovieId(id));
  }, [status, dispatch, id]);

  const getReleaseYear = (releaseDate) => {
    const dateParts = releaseDate.split("-");
    return dateParts[0];
  };

  const getFullReleaseDate = (releaseDate) => {
    const dateParts = releaseDate.split("-");
    const fullDate = dateParts.join(".");
    return fullDate;
  };

  const getProductionCountries = (production_countries) => {
    return production_countries.map((country) => country.name).join(", ");
  };

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
            genres && genres.map((genre) => <SmallTile key={genre.id}>{genre.name}</SmallTile>)
          }
        />
        {movieCast.length > 0 && (
          <MoviePeople
            title="Cast"
            moviePeople={movieCast}
          />
        )}
        {movieCrew.length > 0 && (
          <MoviePeople
            title="Crew"
            moviePeople={movieCrew}
          />
        )}
      </MovieDetailsWrapper>
    </>
  ) : (
    <Loading $titleHidden />
  );
};

export default MovieDetails;
