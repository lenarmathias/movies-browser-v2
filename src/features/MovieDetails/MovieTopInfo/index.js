import Rating from "../../../common/Rating";
import { Details, Poster, Title, Wrapper } from "./styled";

const MovieTopInfo = ({ title, background, votes, rating }) => {
  return (
    <Wrapper>
      <Poster background={background}>
        <Details>
          <Title>{title}</Title>
          <Rating votes={votes} rating={rating} />
        </Details>
      </Poster>
    </Wrapper>
  );
};

export default MovieTopInfo;