import { takeLatest, call, put, delay } from "redux-saga/effects";
import {
  fetchRepositories,
  fetchRepositoriesSuccess,
  fetchRepositoriesError,
} from "./portfolioSlice";
import { getRepositories } from "./getRepositories";

function* fetchRepositoriesHandler() {
  try {
    yield delay(1000);

    const repositories = yield call(getRepositories);

    yield put(fetchRepositoriesSuccess(repositories));
  } catch (error) {
    yield put(fetchRepositoriesError());
  }
}

export function* portfolioSaga() {
  yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
}
