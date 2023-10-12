import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeopleListLoad } from "./peopleSlice";
import { selectPeopleList, selectStatus } from "./peopleSlice";
import PeopleTile from "../../common/Tiles/PeopleTile";
import Pagination from "../../common/Pagination";
import Loading from "../Actions/Loading";
import { PeopleList } from "./styled";

const People = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const popularPeople = useSelector(selectPeopleList);

  useEffect(() => {
    dispatch(fetchPeopleListLoad());
  }, [dispatch]);

  return status === "success" ? (
    <>
      <PeopleList>
        {popularPeople.map((person) => (
          <PeopleTile key={person.id} person={person} />
        ))}
      </PeopleList>
      <Pagination $peoplePagination />
    </>
  ) : (
    <Loading $titleHidden />
  );
};

export default People;
