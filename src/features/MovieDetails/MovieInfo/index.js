import Rating from "../../../common/Rating";
import {
  Countries,
  Description,
  GenresContainer,
  Info,
  Poster,
  ProductionSpan,
  Release,
  ReleaseSpan,
  Title,
  Wrapper,
  Year,
} from "./styled";

const MovieInfo = ({
  smallImgUrl,
  title,
  year,
  release,
  countries,
  genres,
  votes,
  rating,
  $movieInfo,
  description,
}) => {
  return (
    <Wrapper>
      <Poster src={smallImgUrl} />
      <Info>
        <Title>{title}</Title>
        <Year>{year}</Year>
        <ProductionSpan>{`Production: `}</ProductionSpan>
        <Countries>{countries}</Countries>
        <ReleaseSpan>Release date:</ReleaseSpan>
        <Release>{` ${release}`}</Release>
        <GenresContainer>{genres}</GenresContainer>
        <Rating votes={votes} rating={rating} $movieInfo />
      </Info>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default MovieInfo;
