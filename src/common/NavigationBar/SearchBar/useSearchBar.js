import { useRouteMatch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchQueryParamName } from "./searchQueryParamName";
import {
    useQueryParameter,
    useReplaceQueryParameter
} from "../../queryParameter";
import { resetPage } from "../../Pagination/paginationSlice";

export const useSearchBar = () => {
    const dispatch = useDispatch();
    const moviesMatch = useRouteMatch("/movies");
    const peopleMatch = useRouteMatch("/people");
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