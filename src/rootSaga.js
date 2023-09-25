import { all } from "redux-saga/effects";

import { watchFetchMovieDetails } from "./features/MovieDetails/movieDetailsSaga";
import { watchFetchMoviesList } from "./features/MovieList/movieListSaga";
import { watchFetchPeopleDetails } from "./features/PeopleDetails/peopleDetailsSaga";
import { watchFetchPeopleList } from "./features/PeopleList/peopleSaga";

export default function* rootSaga() {
    yield all([
        watchFetchMovieDetails(),
        watchFetchMoviesList(),
        watchFetchPeopleDetails(),
        watchFetchPeopleList()
    ]);
}