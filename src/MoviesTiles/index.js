import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectMoviesList } from "../features/MovieList/movieListSlice";
import {
    MoviesTilesWrapper,
    ContentLink,
    MovieTile,
    MoviePoster,
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
    const posterUrl = "https://image.tmdb.org/t/p/original";

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
                        {movie.poster_path
                            ?
                            <MoviePoster
                                src={posterUrl + movie.poster_path}
                                alt="Movie Poster"
                            />
                            :
                            <MissingMoviePoster as="div">
                                <MissingMoviePosterIcon />
                            </MissingMoviePoster>
                        }
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
                                {movie.vote_average}
                            </RatingNumber>
                            <SmallGreyText>
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