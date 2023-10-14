import { createSlice } from "@reduxjs/toolkit";

const moviesListSlice = createSlice({
  name: "moviesList",
  initialState: {
    movies: [],
    genres: [],
    currentPage: 1,
    totalPages: 1,
    totalResults: "",
    status: "loading",
    searchResults: {
      results: [],
      page: 1,
      total_pages: 1,
      total_results: "",
    },
  },
  reducers: {
    fetchMoviesListSuccess: (state, { payload: movies }) => {
      state.movies = movies.data.results;
      state.genres = movies.genres;
      state.totalResults = movies.data.total_results;
      state.totalPages = movies.data.total_pages;
      state.status = "success";
    },

    fetchMoviesListLoad: (state, { payload: { page } }) => {
      state.currentPage = page;
      state.status = "loading";
    },

    fetchMoviesListError: (state) => {
      state.status = "error";
    },

    fetchSearchMoviesLoad: (state) => {
      state.status = "loading";
    },

    fetchSearchMoviesSuccess: (state, { payload: searchResults }) => {
      state.searchResults = searchResults;
      state.status = "success";
    },
  },
});
export const {
  fetchMoviesListSuccess,
  fetchMoviesListError,
  fetchMoviesListLoad,
  fetchSearchMoviesLoad,
  fetchSearchMoviesSuccess,
} = moviesListSlice.actions;

export const selectMoviesListState = (state) => state.moviesList;
export const selectMoviesList = (state) => selectMoviesListState(state).movies;
export const selectGenres = (state) => selectMoviesListState(state).genres;
export const selectTotalResult = (state) =>
  selectMoviesListState(state).totalResults;
export const selectStatus = (state) => selectMoviesListState(state).status;
export const selectTotalPages = (state) =>
  selectMoviesListState(state).totalPages;
export const selectSearchResults = (state) => state.moviesList.searchResults;
export default moviesListSlice.reducer;
