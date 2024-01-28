import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQueryParameter } from "../../common/NavigationBar/SearchBar/queryParameter";
import {
    fetchSearchMoviesLoad,
    selectSearchResults,
    selectStatus
} from "../MovieList/movieListSlice";
import { selectPage } from "../../common/Pagination/paginationSlice";
import MovieTile from "../../common/Tiles/MovieTile";
import Pagination from "../../common/Pagination";
import Loading from "../Actions/Loading";
import NotFound from "../Actions/NotFound";
import Error from "../Actions/Error";
import { MovieListOrganizer } from "../MovieList/styled";
import { SectionHeading } from "../../common/styled";

const SearchMovies = ({ movieGenres }) => {
    const dispatch = useDispatch();
    const query = useQueryParameter("search");

    const status = useSelector(selectStatus);
    const selectedPage = useSelector(selectPage);
    const searchedResult = useSelector(selectSearchResults);

    const searchedMovies = searchedResult.results;

    const resultCurrentPage = searchedResult.page;
    const resultTotalPages = searchedResult.total_pages;
    const totalResults = searchedResult.total_results;

    useEffect(() => {
        if (query) {
            dispatch(fetchSearchMoviesLoad(query, { page: selectedPage }));
        }
    }, [dispatch, query, selectedPage]);

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