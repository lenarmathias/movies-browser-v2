import { Details, Poster, Rating, Title, Wrapper } from "./styled";

const MovieTopInfo = ({ title }) => {
  return (
    <Wrapper>
      <Poster>
        <Details>
          <Title>{title}</Title>
          <Rating />
        </Details>
      </Poster>
    </Wrapper>
  );
};

export default MovieTopInfo;
