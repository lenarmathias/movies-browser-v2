import { MaxRate, Rate, Star, Votes, RatingWrapper, Container } from "./styled";

const Rating = ({ rating, votes, $movieTileDetails }) => {
  return (
    <Container $movieTileDetails={$movieTileDetails}>
      <RatingWrapper>
        <Star $movieTileDetails={$movieTileDetails}></Star>
        <Rate $movieTileDetails={$movieTileDetails}>{rating}</Rate>
        {!$movieTileDetails && <MaxRate>/10</MaxRate>}
      </RatingWrapper>
      <Votes $movieTileDetails={$movieTileDetails}>{votes} votes</Votes>
    </Container>
  );
};

export default Rating;
