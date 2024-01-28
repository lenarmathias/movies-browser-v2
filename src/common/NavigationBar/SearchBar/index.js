import { useRouteMatch } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  SearchContainer,
  SearchIcon,
  SearchInput
} from "./styled";
import { searchQueryParamName } from "./searchQueryParamName";
import {
  useQueryParameter,
  useReplaceQueryParameter
} from "./queryParameter";
import { resetPage } from "../../Pagination/paginationSlice";

const SearchBar = () => {
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

  return (
    <SearchContainer>
      <SearchIcon />
      <SearchInput
        placeholder={placeholder}
        value={query || ""}
        onChange={onInputChange}
      />
    </SearchContainer>
  );
};

export default SearchBar;