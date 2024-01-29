import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
    getPersonId,
    selectDetailsStatus,
    selectPeopleDetails,
    selectGenresDetails,
    selectPeopleCast,
    selectPeopleCrew,
    fetchPeopleDetailsLoad
} from "./peopleDetailsSlice";

export const useProfile = () => {
    const dispatch = useDispatch();
    const { personId } = useParams();

    const status = useSelector(selectDetailsStatus);
    const personDetails = useSelector(selectPeopleDetails);
    const movieGenres = useSelector(selectGenresDetails);
    const personCast = useSelector(selectPeopleCast);
    const personCrew = useSelector(selectPeopleCrew);

    const personName = personDetails.name;
    const personPhotoPath = personDetails.profile_path;
    const personBirthday = personDetails.birthday;
    const personPlaceOfBirth = personDetails.place_of_birth;
    const personBiography = personDetails.biography;

    useEffect(() => {
        dispatch(fetchPeopleDetailsLoad(personId));
    }, [dispatch, personId]);

    useEffect(() => {
        dispatch(getPersonId((personId)));
    }, [dispatch, status, personId]);

    const formatDate = (personBirthday) => {
        const [year, month, day] = personBirthday.split('-');
        return `${day}.${month}.${year}`;
    };

    return {
        status,
        movieGenres,
        personCast,
        personCrew,
        personName,
        personPhotoPath,
        personBirthday,
        personPlaceOfBirth,
        personBiography,
        formatDate
    };
};