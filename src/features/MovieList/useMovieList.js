import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
    fetchMoviesListLoad,
    selectMoviesListState,
    selectMoviesList,
    selectStatus,
    selectGenres
} from "./movieListSlice";
import {
    selectPage,
    resetPage
} from "../../common/Pagination/paginationSlice";
import { useQueryParameter } from "../../common/NavigationBar/SearchBar/queryParameter";

export const useMovieList = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const status = useSelector(selectStatus);
    const moviesList = useSelector(selectMoviesList);
    const movieGenres = useSelector(selectGenres);

    const totalPages = 500;
    const { currentPage } = useSelector(selectMoviesListState);
    const selectedPage = useSelector(selectPage);

    useEffect(() => {
        const unlisten = history.listen(() => {
            dispatch(resetPage());
        });

        return () => {
            unlisten();
        };
    }, [dispatch, history]);

    useEffect(() => {
        dispatch(fetchMoviesListLoad({ page: currentPage }));
    }, [dispatch, currentPage]);

    useEffect(() => {
        if (currentPage !== selectedPage) {
            dispatch(fetchMoviesListLoad({ page: selectedPage }));
        }
    }, [dispatch, currentPage, selectedPage]);

    const query = useQueryParameter("search");

    return {
        status,
        moviesList,
        movieGenres,
        totalPages,
        currentPage,
        query
    };
};