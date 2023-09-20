import {
  MovieDetailsActorsName,
  MovieDetailsActorsPhoto,
  MovieDetailsCharacter,
  MovieDetailsContainer,
  MovieDetailsDiv,
  MovieDetailsPhotoTile,
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
import { ReactComponent as StarIcon } from "../../images/shape-star.svg";
import actorsPhoto from "../../images/actorsPhoto.svg";

const MovieDetails = () => {
  return (
    <>
      <MovieDetailsContainer>
        <MovieDetailsSection>
          <MovieDetailsDiv>
            <MovieDetailsTittle>Mulan long tittle</MovieDetailsTittle>
            <MovieDetailsRatingDiv>
              <MovieDetailsRatingStar>
                <StarIcon width="40px" height="40px" />
              </MovieDetailsRatingStar>
              <MovieDetailsRate>7.8</MovieDetailsRate>
              <MovieDetailsRateScale>/10</MovieDetailsRateScale>
            </MovieDetailsRatingDiv>
            <MovieDetailsRatesNumber>335 votes</MovieDetailsRatesNumber>
          </MovieDetailsDiv>

          {/* space to tile with good props */}
        </MovieDetailsSection>
        <MovieDetailsTileDiv>
          <MovieDetailsTileTittle>Cast</MovieDetailsTileTittle>
          <MovieDetailsPhotoTile>
            <MovieDetailsActorsPhoto
              src={actorsPhoto}
              alt="actors photo"
            ></MovieDetailsActorsPhoto>
            <MovieDetailsActorsName>Liu Yifei</MovieDetailsActorsName>
            <MovieDetailsCharacter>Mulan</MovieDetailsCharacter>
          </MovieDetailsPhotoTile>
        </MovieDetailsTileDiv>
        <MovieDetailsTileDiv>
          <MovieDetailsTileTittle>Crew</MovieDetailsTileTittle>
          <MovieDetailsPhotoTile>
            <MovieDetailsActorsPhoto
              src={actorsPhoto}
              alt="actors photo"
            ></MovieDetailsActorsPhoto>
            <MovieDetailsActorsName>Liu Yifei</MovieDetailsActorsName>
            <MovieDetailsCharacter>Mulan</MovieDetailsCharacter>
          </MovieDetailsPhotoTile>
        </MovieDetailsTileDiv>
      </MovieDetailsContainer>
    </>
  );
};

export default MovieDetails;
