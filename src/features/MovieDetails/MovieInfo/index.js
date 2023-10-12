import Rating from "../../../common/Rating";
import {
  Countries,
  Description,
  GenresContainer,
  Info,
  Poster,
  ProductionDiv,
  Release,
  ReleaseDiv,
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
        <ProductionDiv>
          Production:
          <Countries> {countries}</Countries>
        </ProductionDiv>
        <ReleaseDiv>
          Release date:
          <Release> {release}</Release>
        </ReleaseDiv>
        <GenresContainer>{genres}</GenresContainer>
        <Rating votes={votes} rating={rating} $movieInfo />
      </Info>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default MovieInfo;
