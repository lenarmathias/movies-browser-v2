import { createSlice } from "@reduxjs/toolkit";

const peopleListSlice = createSlice({
  name: "peopleList",
  initialState: {
    people: [],
    currentPage: 1,
    totalPages: 0,
    totalResults: 1,
    status: "loading",
    searchResults: {
      results: [],
      page: 1,
      total_pages: 1,
      total_results: "",
    },
  },
  reducers: {
    fetchPeopleListSuccess: (state, { payload: people }) => {
      state.people = people.data.results;
      state.totalResults = people.data.total_results;
      state.totalPages = people.data.total_pages;
      state.status = "success";
    },

    fetchPeopleListLoad: (state, { payload: { page } }) => {
      state.currentPage = page;
      state.status = "loading";
    },

    fetchPeopleListError: (state) => {
      state.status = "error";
    },

    fetchSearchPeopleLoad: (state) => {
      state.status = "loading";
    },

    fetchSearchPeopleSuccess: (state, { payload: searchResults }) => {
      state.searchResults = searchResults;
      state.status = "success";
    },
  },
});
export const {
  fetchPeopleListSuccess,
  fetchPeopleListLoad,
  fetchPeopleListError,
  fetchSearchPeopleLoad,
  fetchSearchPeopleSuccess,
} = peopleListSlice.actions;

export const selectPeopleListState = (state) => state.peopleList;
export const selectPeopleList = (state) => selectPeopleListState(state).people;
export const selectTotalResult = (state) =>
  selectPeopleListState(state).totalResults;
export const selectStatus = (state) => selectPeopleListState(state).status;
export const selectTotalPeoplePages = (state) =>
  selectPeopleListState(state).totalPages;
export const selectSearchResults = (state) => selectPeopleListState(state).searchResults;
export default peopleListSlice.reducer;