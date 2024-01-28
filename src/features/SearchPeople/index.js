import { useSearchPeople } from "./useSearchPeople";
import PeopleTile from "../../common/Tiles/PeopleTile";
import Pagination from "../../common/Pagination";
import Loading from "../Actions/Loading";
import NotFound from "../Actions/NotFound";
import Error from "../Actions/Error";
import { PeopleList } from "../People/styled";
import { SectionHeading } from "../../common/styled";

const SearchPeople = () => {
    const {
        status,
        query,
        searchedPeople,
        resultCurrentPage,
        resultTotalPages,
        totalResults
    } = useSearchPeople();

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