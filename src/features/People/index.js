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
import { useQueryParameter } from "../../common/NavigationBar/Search/queryParameter";
import PeopleTile from "../../common/Tiles/PeopleTile";
import Pagination from "../../common/Pagination";
import Loading from "../Actions/Loading";
import SearchPeople from "../SearchPeople";
import Error from "../Actions/Error";
import { PeopleList } from "./styled";
import { SectionHeading } from "../../common/styled";

const People = () => {
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
