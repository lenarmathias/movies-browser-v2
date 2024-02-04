import { useMatch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchQueryParamName } from "./searchQueryParamName";
import {
    useQueryParameter,
    useReplaceQueryParameter
} from "../../../common/queryParameter";
import { resetPage } from "../../../common/Pagination/paginationSlice";

export const useSearchBar = () => {
    const dispatch = useDispatch();
    const moviesMatch = useMatch("/movies");
    const peopleMatch = useMatch("/people");
    const placeholder = moviesMatch
        ? "Search for movies..."
        : "Search for people...";

    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter(
            searchQueryParamName,
            target.value.trim() !== "" ? target.value : undefined,
            peopleMatch ? "people" : undefined,
            moviesMatch ? "movies" : undefined
        );
        dispatch(resetPage());
    };

    return {
        placeholder,
        query,
        onInputChange
    };
};