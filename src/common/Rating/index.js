import { MaxRate, Rate, Star, Votes, RatingWrapper, Container } from "./styled";

const Rating = ({ rating, votes, $movieTileDetails, $movieInfo }) => {
  const ratingDotReplaceWithComma = (rating) => {
    const fixedRating = rating.toFixed(1);
    const ratingString = fixedRating.toString();
    const modifiedRating = ratingString.replace(/\./g, ",");
    return modifiedRating;
  };

  return (
    <Container $movieTileDetails={$movieTileDetails} $movieInfo={$movieInfo}>
      <RatingWrapper $movieTileDetails={$movieTileDetails}>
        <Star $movieTileDetails={$movieTileDetails} $movieInfo={$movieInfo} />
        <Rate $movieTileDetails={$movieTileDetails} $movieInfo={$movieInfo}>
          {ratingDotReplaceWithComma(rating)}
        </Rate>
        {!$movieTileDetails && <MaxRate $movieInfo={$movieInfo}>/10</MaxRate>}
      </RatingWrapper>
      <Votes $movieTileDetails={$movieTileDetails} $movieInfo={$movieInfo}>
        {votes} votes
      </Votes>
    </Container>
  );
};

export default Rating;