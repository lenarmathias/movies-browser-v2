import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQueryParameter } from "../../common/NavigationBar/SearchBar/queryParameter";
import {
    fetchSearchPeopleLoad,
    selectSearchResults,
    selectStatus
} from "../People/peopleSlice";
import { selectPage } from "../../common/Pagination/paginationSlice";
import PeopleTile from "../../common/Tiles/PeopleTile";
import Pagination from "../../common/Pagination";
import Loading from "../Actions/Loading";
import NotFound from "../Actions/NotFound";
import Error from "../Actions/Error";
import { PeopleList } from "../People/styled";
import { SectionHeading } from "../../common/styled";

const SearchPeople = () => {
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

    if (status === "error") {
        return <Error />;
    }

    return (
        status === "loading" ? (
            <Loading query={query} />
        ) : (
            searchedPeople.length > 0 ? (
                <>
                    <SectionHeading>
                        {
                            query
                                ? `Search results for "${query}"`
                                : ""
                        }
                    </SectionHeading>
                    <PeopleList>
                        {searchedPeople.map((person) => (
                            <PeopleTile
                                key={person.id}
                                person={person}
                            />
                        ))}
                    </PeopleList>
                    {totalResults > 20 &&
                        <Pagination
                            $peoplePagination
                            totalPages={resultTotalPages}
                            currentPage={resultCurrentPage}
                        />
                    }
                </>
            ) : (
                <NotFound query={query} />
            )
        )
    )
};

export default SearchPeople;