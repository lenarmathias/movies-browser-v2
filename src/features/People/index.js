import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeopleListLoad } from "./peopleSlice";
import {
    selectPeopleList,
    selectStatus
} from "./peopleSlice";
import { PeopleList } from "./styled";
import {
    MovieDetailsPhotoTile,
    MovieDetailsActorsPhoto,
    MovieDetailsActorsName
} from "../../common/styled";
import { ContentLink } from "../../common/styled";

const People = () => {
    const dispatch = useDispatch();
    const status = useSelector(selectStatus);

    useEffect(() => {
        if (status !== "success") {
            dispatch(fetchPeopleListLoad());
        }
    }, [dispatch, status]);

    const popularPeople = useSelector(selectPeopleList);

    const photoUrl = "https://image.tmdb.org/t/p/original";

    return (
        <PeopleList>
            {popularPeople.map((person) => (
                <MovieDetailsPhotoTile key={person.id}>
                    <ContentLink to={`/people/${person.id}`}>
                        <MovieDetailsActorsPhoto
                            src={photoUrl + person.profile_path}
                            alt="Profile Photo"
                        />
                        <MovieDetailsActorsName>
                            {person.name}
                        </MovieDetailsActorsName>
                    </ContentLink>
                </MovieDetailsPhotoTile>
            ))}
        </PeopleList>
    )
};

export default People;