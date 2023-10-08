import { MaxRate, Rate, Star, Votes, RatingWrapper, Container } from "./styled";

const Rating = ({ rating, votes }) => {
  return (
    <Container>
      <RatingWrapper>
        <Star></Star>
        <Rate>{rating}</Rate>
        <MaxRate>/10</MaxRate>
      </RatingWrapper>
      <Votes>{votes} votes</Votes>
    </Container>
  );
};

export default Rating;
