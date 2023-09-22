import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectMoviesList } from "../features/MovieList/movieListSlice";
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
    const moviesPromise = useSelector(state => selectMoviesList(state));
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        async function fetchPopularMovies() {
            try {
                const movies = await moviesPromise;
                setPopularMovies(movies.results);
            } catch (error) {
                console.error(error);
            }
        }

        fetchPopularMovies();
    }, [moviesPromise]);

    const getReleaseYear = (releaseDate) => {
        const dateParts = releaseDate.split("-");
        return dateParts[0];
    };

    return (
        <MoviesTilesWrapper>
            {popularMovies.map(movie => (
                <MovieTile key={movie.id}>
                    <ContentLink to={"/movies/:id"}>
                        {/* place for proper poster with condition: if missing, replace with below */}
                        <MissingMoviePoster>
                            <MissingMoviePosterIcon />
                        </MissingMoviePoster>
                    </ContentLink>
                    <MovieInfoContainer>
                        <ContentLink to={"/movies/:id"}>
                            <MovieTitle>
                                {movie.title}
                            </MovieTitle>
                        </ContentLink>
                        <SmallGreyText>
                            {getReleaseYear(movie.release_date)}
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
                                {movie.vote_average}
                            </RatingNumber>
                            <SmallGreyText>
                                {/* example number of votes */}
                                {movie.vote_count} votes
                            </SmallGreyText>
                        </RatingContainer>
                    </MovieInfoContainer>
                </MovieTile>
            ))};
        </MoviesTilesWrapper>
    )
};

export default MoviesTiles;