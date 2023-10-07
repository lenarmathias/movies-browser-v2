import { all } from "redux-saga/effects";

import { watchFetchMovieDetails } from "./features/MovieDetails/movieDetailsSaga";
import { watchFetchMoviesList } from "./features/MoviesTiles/movieListSaga";
import { watchFetchPeopleDetails } from "./features/PeopleDetails/peopleDetailsSaga";
import { watchFetchPeopleList } from "./features/People/peopleSaga";

export default function* rootSaga() {
    yield all([
        watchFetchMovieDetails(),
        watchFetchMoviesList(),
        watchFetchPeopleDetails(),
        watchFetchPeopleList()
    ]);
}