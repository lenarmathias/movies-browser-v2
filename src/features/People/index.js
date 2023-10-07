import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { PeopleList } from "./styled";
import { selectPeopleList } from "./peopleSlice";
import {
    MovieDetailsPhotoTile,
    MovieDetailsActorsPhoto,
    MovieDetailsActorsName
} from "../../common/styled";
import { ContentLink } from "../../common/styled";

const People = () => {
    const peoplePromise = useSelector((state) => selectPeopleList(state));
    const [popularPeople, setPopularPeople] = useState([]);

    const photoUrl = "https://image.tmdb.org/t/p/original";

    console.log(popularPeople);

    useEffect(() => {
        async function fetchPopularPeople() {
            try {
                const people = await peoplePromise;
                setPopularPeople(people.results);
            } catch (error) {
                console.error(error);
            }
        }

        fetchPopularPeople();
    }, [peoplePromise]);

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