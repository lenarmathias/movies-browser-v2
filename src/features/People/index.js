import { usePeople } from "./usePeople";
import PeopleTile from "../../common/Tiles/PeopleTile";
import Pagination from "../../common/Pagination";
import SearchPeople from "../SearchPeople";
import Loading from "../Actions/Loading";
import Error from "../Actions/Error";
import { PeopleList } from "./styled";
import { SectionHeading } from "../../common/styled";

const People = () => {
  const {
    status,
    popularPeople,
    totalPages,
    currentPage,
    query
  } = usePeople();

  if (query) {
    return <SearchPeople />;
  }

  if (status === "error") {
    return <Error />;
  }

  return status === "success" ? (
    <>
      <SectionHeading>
        Popular people
      </SectionHeading>
      <PeopleList>
        {popularPeople.map((person) => (
          <PeopleTile
            key={person.id}
            person={person}
          />
        ))}
      </PeopleList>
      <Pagination
        $peoplePagination
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </>
  ) : (
    <>
      <SectionHeading>
        Popular people
      </SectionHeading>
      <Loading $titleHidden />
    </>
  )
};

export default People;