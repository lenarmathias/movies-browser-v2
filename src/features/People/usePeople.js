import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
    fetchPeopleListLoad,
    selectPeopleList,
    selectStatus,
    selectTotalPeoplePages,
    selectPeopleListState
} from "./peopleSlice";
import {
    selectPage,
    resetPage
} from "../../common/Pagination/paginationSlice";
import { useQueryParameter } from "../../common/queryParameter";

export const usePeople = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const status = useSelector(selectStatus);
    const popularPeople = useSelector(selectPeopleList);

    const totalPages = useSelector(selectTotalPeoplePages);
    const { currentPage } = useSelector(selectPeopleListState);
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
        dispatch(fetchPeopleListLoad({ page: currentPage }));
    }, [dispatch, currentPage]);

    useEffect(() => {
        if (currentPage !== selectedPage) {
            dispatch(fetchPeopleListLoad({ page: selectedPage }));
        }
    }, [dispatch, currentPage, selectedPage]);

    const query = useQueryParameter("search");

    return {
        status,
        popularPeople,
        totalPages,
        currentPage,
        query
    };
};