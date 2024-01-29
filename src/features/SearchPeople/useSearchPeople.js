import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQueryParameter } from "../../common/queryParameter";
import {
    fetchSearchPeopleLoad,
    selectSearchResults,
    selectStatus
} from "../People/peopleSlice";
import { selectPage } from "../../common/Pagination/paginationSlice";

export const useSearchPeople = () => {
    const dispatch = useDispatch();
    const query = useQueryParameter("search");

    const status = useSelector(selectStatus);
    const selectedPage = useSelector(selectPage);
    const searchedResult = useSelector(selectSearchResults);

    const searchedPeople = searchedResult.results;

    const resultCurrentPage = searchedResult.page;
    const resultTotalPages = searchedResult.total_pages;
    const totalResults = searchedResult.total_results;

    useEffect(() => {
        if (query) {
            dispatch(fetchSearchPeopleLoad(query, { page: selectedPage }));
        }
    }, [dispatch, query, selectedPage]);

    return {
        status,
        query,
        searchedPeople,
        resultCurrentPage,
        resultTotalPages,
        totalResults
    };
};