import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    page: 1,
    totalPages: null,
  },
  reducers: {
    changePage: (state, { payload: action }) => {
      state.page = action.payload;
    },
    resetPage: (state) => {
      state.page = 1;
    },
  },
});
export const { changePage, resetPage } = paginationSlice.actions;

export const selectPaginationState = (state) => state.pagination;
export const selectPage = (state) => selectPaginationState(state).page;

export default paginationSlice.reducer;