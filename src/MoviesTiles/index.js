import {
    MoviesTilesWrapper,
    ContentLink,
    MovieTile,
    MissingMoviePoster,
    MissingMoviePosterIcon,
    MovieInfoContainer,
    MovieTitle,
    GenresContainer,
    RatingContainer,
    RatingStarIcon,
    RatingNumber,
} from "./styled";
import { SmallGreyText, SmallTile } from "../common/styled";

const MoviesTiles = () => {
    return (
        <MoviesTilesWrapper>
            {/* place to implement .map with api */}
            <ContentLink to={"/movies/:id"}>
                {/* linking tile to movie details */}
                <MovieTile>
                    {/* place for proper poster with condition: if missing, replace with below */}
                    <MissingMoviePoster>
                        <MissingMoviePosterIcon />
                    </MissingMoviePoster>
                    <MovieInfoContainer>
                        <MovieTitle>
                            {/* to be replaced with proper movie title from API */}
                            Movie Title
                        </MovieTitle>
                        <SmallGreyText>
                            {/* to be replaced with proper movie year from API */}
                            2023
                        </SmallGreyText>
                        <GenresContainer>
                            {/* place to implement .map to generate movie genres with GenreTile */}
                            {/* examples below */}
                            <SmallTile>
                                Action
                            </SmallTile>
                            <SmallTile>
                                Adventure
                            </SmallTile>
                            <SmallTile>
                                Drama
                            </SmallTile>
                        </GenresContainer>
                        <RatingContainer>
                            <RatingStarIcon />
                            <RatingNumber>
                                {/* example rating */}
                                8,7
                            </RatingNumber>
                            <SmallGreyText>
                                {/* example number of votes */}
                                123 votes
                            </SmallGreyText>
                        </RatingContainer>
                    </MovieInfoContainer>
                </MovieTile>
            </ContentLink>
        </MoviesTilesWrapper>
    )
};

export default MoviesTiles;