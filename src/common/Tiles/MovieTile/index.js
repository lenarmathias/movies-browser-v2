import Rating from "../../Rating/index";
import {
    MovieTileContainer,
    MoviePoster,
    MissingMoviePoster,
    MissingMoviePosterIcon,
    SeparateFlexContainer,
    MovieInfoContainer,
    MovieTitle,
    GenresContainer
} from "./styled";
import {
    ContentLink,
    SmallGreyText,
    SmallTile
} from "../../styled";

const MovieTile = ({ movie, movieGenres }) => {
    const posterUrl = "https://image.tmdb.org/t/p/original";

    const getReleaseYear = (releaseDate) => {
        const dateParts = releaseDate.split("-");
        return dateParts[0];
    };

    const mapGenreIdToNames = (genreId) => {
        const genre = movieGenres.find((genre) => genre.id === genreId);
        return genre ? genre.name : "Unknown";
    };

    return (
        <MovieTileContainer>
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
                    <SmallGreyText>
                        {getReleaseYear(movie.release_date)}
                    </SmallGreyText>
                    <GenresContainer>
                        {movie.genre_ids &&
                            movie.genre_ids.map((genreId) => (
                                <SmallTile key={genreId}>
                                    {mapGenreIdToNames(genreId)}
                                </SmallTile>
                            ))}
                    </GenresContainer>
                </MovieInfoContainer>
                <Rating
                    votes={movie.vote_count}
                    rating={movie.vote_average}
                    $movieTileDetails
                />
            </SeparateFlexContainer>
        </MovieTileContainer>
    )
};

export default MovieTile;