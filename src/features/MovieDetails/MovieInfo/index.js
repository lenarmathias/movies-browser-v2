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
  RowContainer,
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
        <RowContainer>
          <ProductionSpan>{`Production: `}</ProductionSpan>
          <Countries>{countries}</Countries>
        </RowContainer>
        <RowContainer>
          <ReleaseSpan>Release date:</ReleaseSpan>
          <Release>{` ${release}`}</Release>
        </RowContainer>
        <GenresContainer>{genres}</GenresContainer>
        <Rating votes={votes} rating={rating} $movieInfo />
      </Info>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default MovieInfo;