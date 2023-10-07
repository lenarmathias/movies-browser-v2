import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectMoviesList, selectGenres } from "../MovieList/movieListSlice";
import {
    MoviesTilesWrapper,
    MovieTile,
    MoviePoster,
    MissingMoviePoster,
    MissingMoviePosterIcon,
    SeparateFlexContainer,
    MovieInfoContainer,
    MovieTitle,
    GenresContainer,
    RatingContainer,
    RatingStarIcon,
    RatingNumber,
} from "./styled";
import { ContentLink } from "../../common/styled";
import { SmallGreyText, SmallTile } from "../../common/styled";

const MoviesTiles = () => {
    const moviesPromise = useSelector((state) => selectMoviesList(state));
    const [popularMovies, setPopularMovies] = useState([]);

    const genresPromise = useSelector(state => selectGenres(state));
    const [movieGenres, setMovieGenres] = useState([]);

    const posterUrl = "https://image.tmdb.org/t/p/original";

    useEffect(() => {
        async function fetchPopularMovies() {
            try {
                const movies = await moviesPromise;
                setPopularMovies(movies.results);

                const genres = await genresPromise;
                setMovieGenres(genres);
            } catch (error) {
                console.error(error);
            }
        }

        fetchPopularMovies();
    }, [moviesPromise, genresPromise]);

    const getReleaseYear = (releaseDate) => {
        const dateParts = releaseDate.split("-");
        return dateParts[0];
    };

    const mapGenreIdToNames = (genreId) => {
        const genre = movieGenres.find((genre) => genre.id === genreId);
        return genre ? genre.name : "Unknown";
    };

    return (
        <MoviesTilesWrapper>
            {popularMovies.map((movie) => (
                <MovieTile key={movie.id}>
                    <ContentLink to={`/movies/${movie.id}`}>
                        {movie.poster_path ? (
                            <MoviePoster
                                src={posterUrl + movie.poster_path}
                                alt="Movie Poster"
                            />
                        ) : (
                            <MissingMoviePoster as="div">
                                <MissingMoviePosterIcon />
                            </MissingMoviePoster>
                        )}
                    </ContentLink>
                    <SeparateFlexContainer>
                        <MovieInfoContainer>
                            <ContentLink to={`/movies/${movie.id}`}>
                                <MovieTitle>{movie.title}</MovieTitle>
                            </ContentLink>
                            <SmallGreyText>{getReleaseYear(movie.release_date)}</SmallGreyText>
                            <GenresContainer>
                                {movie.genre_ids && (
                                    movie.genre_ids.map(genreId => (
                                        <SmallTile key={genreId}>
                                            {mapGenreIdToNames(genreId)}
                                        </SmallTile>
                                    ))
                                )}
                            </GenresContainer>
                        </MovieInfoContainer>
                        <RatingContainer>
                            <RatingStarIcon />
                            <RatingNumber>{movie.vote_average}</RatingNumber>
                            <SmallGreyText>{movie.vote_count} votes</SmallGreyText>
                        </RatingContainer>
                    </SeparateFlexContainer>
                </MovieTile>
            ))}
        </MoviesTilesWrapper>
    );
};

export default MoviesTiles;