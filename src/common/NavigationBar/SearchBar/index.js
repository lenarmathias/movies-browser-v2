import { useSearchBar } from "./useSearchBar";
import {
  SearchContainer,
  SearchIcon,
  SearchInput
} from "./styled";

const SearchBar = () => {
  const {
    placeholder,
    query,
    onInputChange
  } = useSearchBar();

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