import { createSlice } from "@reduxjs/toolkit";

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState: {
    repositories: [],
    status: "loading",
  },
  reducers: {
    fetchRepositories: (state) => {
      state.status = "loading";
    },
    fetchRepositoriesSuccess: (state, { payload: repositories }) => {
      state.status = "success";
      state.repositories = repositories;
    },
    fetchRepositoriesError: (state) => {
      state.status = "error";
    },
  },
});

export const {
  fetchRepositories,
  fetchRepositoriesSuccess,
  fetchRepositoriesError,
} = portfolioSlice.actions;

const selectPortfolioState = (state) => state.portfolio;

export const selectRepositories = (state) =>
  selectPortfolioState(state).repositories;
export const selectRepositoriesStatus = (state) =>
  selectPortfolioState(state).status;

export default portfolioSlice.reducer;
