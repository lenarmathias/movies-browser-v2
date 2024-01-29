import { useSearchMovies } from "./useSearchMovies";
import MovieTile from "../../common/Tiles/MovieTile";
import Pagination from "../../common/Pagination";
import Loading from "../Actions/Loading";
import NotFound from "../Actions/NotFound";
import Error from "../Actions/Error";
import { MovieListOrganizer } from "../MovieList/styled";
import { SectionHeading } from "../../common/styled";

const SearchMovies = ({ movieGenres }) => {
    const {
        status,
        query,
        searchedMovies,
        resultCurrentPage,
        resultTotalPages,
        totalResults
    } = useSearchMovies();

    if (status === "error") {
        return <Error />;
    }

    return (
        status === "loading" ? (
            <Loading query={query} />
        ) : (
            searchedMovies.length > 0 ? (
                <>
                    <SectionHeading>
                        {
                            query
                                ? `Search results for "${query}"`
                                : ""
                        }
                    </SectionHeading>
                    <MovieListOrganizer>
                        {searchedMovies.map((movie) => (
                            <MovieTile key={movie.id}
                                movie={movie}
                                movieGenres={movieGenres}
                            />
                        ))}
                    </MovieListOrganizer>
                    {totalResults > 20 &&
                        <Pagination
                            totalPages={resultTotalPages}
                            currentPage={resultCurrentPage}
                        />
                    }
                </>
            ) : (
                <NotFound query={query} />
            )
        )
    )
};

export default SearchMovies;