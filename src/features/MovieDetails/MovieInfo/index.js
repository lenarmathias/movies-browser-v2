import Rating from "../../../common/Rating";
import { imageUrl } from "../../../common/imageUrl";
import {
  Countries,
  Description,
  GenresContainer,
  Info,
  Poster,
  ProductionSpan,
  Release,
  ReleaseSpan,
  RowContainer,
  Title,
  Wrapper,
  Year,
} from "./styled";
import {
  MissingMoviePoster,
  MissingMoviePosterIcon
} from "../../../common/Tiles/MovieTile/styled";

const MovieInfo = ({
  poster_path,
  title,
  year,
  release,
  countries,
  genres,
  votes,
  rating,
  description,
}) => (
  <Wrapper>
    {
      poster_path ? (
        <Poster src={imageUrl + poster_path} />
      ) : (
        <MissingMoviePoster $movieDetails>
          <MissingMoviePosterIcon />
        </MissingMoviePoster>
      )
    }
    <Info>
      <Title>{title}</Title>
      <Year>{year}</Year>
      <RowContainer>
        <ProductionSpan>Production:</ProductionSpan>
        <Countries>{countries}</Countries>
      </RowContainer>
      <RowContainer>
        <ReleaseSpan>Release date:</ReleaseSpan>
        <Release>{release}</Release>
      </RowContainer>
      <GenresContainer>{genres}</GenresContainer>
      <Rating votes={votes} rating={rating} $movieInfo />
    </Info>
    <Description>{description}</Description>
  </Wrapper>
);

export default MovieInfo;