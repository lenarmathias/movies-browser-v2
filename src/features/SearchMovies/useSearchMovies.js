import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQueryParameter } from "../../common/NavigationBar/SearchBar/queryParameter";
import {
    fetchSearchMoviesLoad,
    selectSearchResults,
    selectStatus
} from "../MovieList/movieListSlice";
import { selectPage } from "../../common/Pagination/paginationSlice";

export const useSearchMovies = () => {
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

    return {
        status,
        query,
        searchedMovies,
        resultCurrentPage,
        resultTotalPages,
        totalResults
    };
};