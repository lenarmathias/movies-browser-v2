import { call, delay, put, select, takeLatest, debounce } from "redux-saga/effects";
import {
  fetchPeopleListSuccess,
  fetchPeopleListLoad,
  fetchPeopleListError,
  fetchSearchPeopleLoad,
  fetchSearchPeopleSuccess,
} from "./peopleSlice";
import { getPopularPeople, getSearchPeople } from "../getData";

function* getPopularPeopleHandler() {
  try {
    const page = yield select((state) => state.peopleList.currentPage);
    const data = yield call(getPopularPeople, page);
    yield delay(1000);
    yield put(fetchPeopleListSuccess({ data }));
  } catch (error) {
    yield put(fetchPeopleListError());
  }
}

function* getSearchPeopleHandler({ payload: query }) {
  try {
    yield delay(800);
    const page = yield select((state) => state.peopleList.currentPage);
    const data = yield call(getSearchPeople, { query, page });
    yield put(fetchSearchPeopleSuccess(data));
  } catch (error) {
    yield put(fetchPeopleListError());
  }
}

export function* watchFetchPeopleList() {
  yield takeLatest(fetchPeopleListLoad.type, getPopularPeopleHandler);
  yield debounce(1000, fetchSearchPeopleLoad.type, getSearchPeopleHandler);
}