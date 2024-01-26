import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import {
    getMovieId,
    selectDetails,
    selectStatus,
    selectCredits,
    fetchMovieDetailsLoad,
} from "./movieDetailsSlice";

export const useMovieDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const status = useSelector(selectStatus);
    const {
        title,
        backdrop_path,
        vote_average,
        vote_count,
        poster_path,
        release_date,
        production_countries,
        genres,
        overview
    } = useSelector(selectDetails) ?? {};
    const selectedMoviePeople = useSelector(selectCredits);

    const movieCast = selectedMoviePeople.cast;
    const movieCrew = selectedMoviePeople.crew;

    useEffect(() => {
        dispatch(fetchMovieDetailsLoad());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getMovieId(id));
    }, [status, dispatch, id]);

    const getReleaseYear = (releaseDate) => {
        const dateParts = releaseDate.split("-");
        return dateParts[0];
    };

    const getFullReleaseDate = (releaseDate) => {
        const dateParts = releaseDate.split("-");
        const fullDate = dateParts.join(".");
        return fullDate;
    };

    const getProductionCountries = (production_countries) => {
        return production_countries.map((country) => country.name).join(", ");
    };

    return {
        status,
        title,
        backdrop_path,
        vote_average,
        vote_count,
        poster_path,
        release_date,
        production_countries,
        genres,
        overview,
        movieCast,
        movieCrew,
        getReleaseYear,
        getFullReleaseDate,
        getProductionCountries
    };
};