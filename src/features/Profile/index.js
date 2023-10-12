import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    getPersonId,
    selectPersonId,
    resetPeopleDetails,
    selectDetailsStatus,
    selectPeopleDetails,
    selectGenresDetails,
    selectPeopleCast,
    selectPeopleCrew,
    fetchPeopleDetailsLoad
} from "./peopleDetailsSlice";
import PersonInfo from "./PersonInfo";
import PersonMovies from "./PersonMovies";
import Loading from "../Actions/Loading";

const Profile = () => {
    const dispatch = useDispatch();
    const { personId } = useParams();

    const status = useSelector(selectDetailsStatus);
    const currentPersonId = useSelector(selectPersonId);
    const personDetails = useSelector(selectPeopleDetails);
    const movieGenres = useSelector(selectGenresDetails);
    const personCast = useSelector(selectPeopleCast);
    const personCrew = useSelector(selectPeopleCrew);

    useEffect(() => {
        dispatch(fetchPeopleDetailsLoad());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getPersonId((personId)));
    }, [dispatch, status, personId]);

    useEffect(() => {
        if (personId !== currentPersonId && currentPersonId !== 0) {
            dispatch(resetPeopleDetails());
        }
    }, [dispatch, personId, currentPersonId]);

    return status === "success" ? (
        <>
            <PersonInfo personDetails={personDetails} />
            {personCast.length > 0 && (
                <PersonMovies
                    title="cast"
                    movieGenres={movieGenres}
                    personMovieList={personCast}
                />
            )}
            {personCrew.length > 0 && (
                <PersonMovies
                    title="crew"
                    movieGenres={movieGenres}
                    personMovieList={personCrew}
                />
            )}
        </>
    ) : (
        <Loading $titleHidden />
    )
};

export default Profile;