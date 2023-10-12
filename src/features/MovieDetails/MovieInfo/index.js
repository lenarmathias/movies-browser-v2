import {
  Description,
  GreyData,
  Info,
  Poster,
  Production,
  Title,
  Wrapper,
  Year,
} from "./styled";

const MovieInfo = ({ smallImgUrl, title, year, release }) => {
  return (
    <Wrapper>
      <Poster src={smallImgUrl} />
      <Info>
        <Title>{title}</Title>
        <Year>{year}</Year>
        <GreyData>Release day: </GreyData>
        <Production>{release}</Production>
      </Info>
      <Description></Description>
    </Wrapper>
  );
};

export default MovieInfo;
