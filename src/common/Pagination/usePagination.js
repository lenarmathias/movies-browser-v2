import { useDispatch } from "react-redux";
import {
    resetPage,
    changePage
} from "./paginationSlice";

export const usePagination = ({
    currentPage,
    totalPages
}) => {
    const dispatch = useDispatch();

    const goToFirstPage = () => {
        if (currentPage !== 1) {
            dispatch(resetPage());
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            dispatch(changePage({ payload: currentPage - 1 }));
        }
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            dispatch(changePage({ payload: currentPage + 1 }));
        }
    };

    const goToLastPage = () => {
        if (currentPage !== totalPages) {
            dispatch(changePage({ payload: totalPages }));
        }
    };

    return {
        goToFirstPage,
        goToPreviousPage,
        goToNextPage,
        goToLastPage
    };
};