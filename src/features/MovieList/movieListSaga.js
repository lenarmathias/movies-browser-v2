import { call, delay, put, select, takeLatest, debounce } from "redux-saga/effects";
import {
  fetchMoviesListLoad,
  fetchMoviesListSuccess,
  fetchMoviesListError,
  fetchSearchMoviesLoad,
  fetchSearchMoviesSuccess
} from "./movieListSlice";
import { getGenres, getPopularMovies, getSearch } from "../getData";

function* getPopularMoviesHandler() {
  try {
    const page = yield select((state) => state.moviesList.currentPage);
    const genres = yield call(getGenres);
    const data = yield call(getPopularMovies, page);
    yield delay(1000);
    yield put(fetchMoviesListSuccess({ data, genres }));
  } catch (error) {
    yield put(fetchMoviesListError());
  }
}

function* getSearchMoviesHandler({ payload: query }) {
  try {
    yield delay(800);
    const page = yield select((state) => state.moviesList.currentPage);
    const genres = yield call(getGenres);
    const data = yield call(getSearch, { query, page });
    yield put(fetchSearchMoviesSuccess(data, genres));
  } catch (error) {
    yield put(fetchMoviesListError());
  }
}

export function* watchFetchMoviesList() {
  yield takeLatest(fetchMoviesListLoad.type, getPopularMoviesHandler);
  yield debounce(2000, fetchSearchMoviesLoad.type, getSearchMoviesHandler);
}