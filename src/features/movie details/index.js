import {
  MovieDetailsCharacter,
  MovieDetailsContainer,
  MovieDetailsDiv,
  MovieDetailsRate,
  MovieDetailsRateScale,
  MovieDetailsRatesNumber,
  MovieDetailsRatingDiv,
  MovieDetailsRatingStar,
  MovieDetailsSection,
  MovieDetailsTileDiv,
  MovieDetailsTileTittle,
  MovieDetailsTittle,
} from "./styled";
import {
  MovieDetailsPhotoTile,
  MovieDetailsActorsPhoto,
  MovieDetailsActorsName,
} from "../../common/styled";
import { ReactComponent as StarIcon } from "../../images/shape-star.svg";
import actorsPhoto from "../../images/actorsPhoto.svg";

const MovieDetails = () => {
  return (
    <>
      <MovieDetailsWrapper>
        <MovieTopInfo title="Mulan Longer Title" />
        <MoviePeople />
        <MoviePeople />
      </MovieDetailsWrapper>
    </>
  );
};

export default MovieDetails;
