import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    fetchPeopleListLoad,
    selectPeopleList,
    selectStatus,
    selectPeopleListState
} from "./peopleSlice";
import {
    selectPage,
    resetPage
} from "../../common/Pagination/paginationSlice";
import { useQueryParameter } from "../../common/queryParameter";

export const usePeople = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const status = useSelector(selectStatus);
    const popularPeople = useSelector(selectPeopleList);

    const totalPages = 500;
    const { currentPage } = useSelector(selectPeopleListState);
    const selectedPage = useSelector(selectPage);

    useEffect(() => {
        navigate(() => {
            dispatch(resetPage());
        });
    }, [dispatch, navigate]);

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