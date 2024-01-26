import { useProfile } from "./useProfile";
import PersonInfo from "./PersonInfo";
import PersonMovies from "./PersonMovies";
import Loading from "../Actions/Loading";
import Error from "../Actions/Error";

const Profile = () => {
    const {
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
    } = useProfile();

    if (status === "error") {
        return <Error />;
    }

    return status === "success" ? (
        <>
            <PersonInfo
                personPhotoPath={personPhotoPath}
                personName={personName}
                personBirthday={personBirthday}
                formatDate={formatDate}
                personPlaceOfBirth={personPlaceOfBirth}
                personBiography={personBiography}
            />
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