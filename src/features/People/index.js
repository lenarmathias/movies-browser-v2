import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPeopleListLoad,
  selectPeopleList,
  selectStatus,
  selectTotalPeoplePages,
  selectPeopleListState
} from "./peopleSlice";
import { selectPage } from "../../common/Pagination/paginationSlice";
import PeopleTile from "../../common/Tiles/PeopleTile";
import Pagination from "../../common/Pagination";
import Loading from "../Actions/Loading";
import { PeopleList } from "./styled";

const People = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const popularPeople = useSelector(selectPeopleList);

  const totalPages = useSelector(selectTotalPeoplePages);
  const { currentPage } = useSelector(selectPeopleListState);
  const selectedPage = useSelector(selectPage);

  useEffect(() => {
    dispatch(fetchPeopleListLoad({ page: currentPage }));
  }, [dispatch, currentPage]);

  useEffect(() => {
    if (currentPage !== selectedPage) {
      dispatch(fetchPeopleListLoad({ page: selectedPage }));
    }
  }, [dispatch, currentPage, selectedPage]);

  return status === "success" ? (
    <>
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
    <Loading $titleHidden />
  )
};

export default People;
