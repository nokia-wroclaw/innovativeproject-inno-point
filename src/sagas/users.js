import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as api from "../api/users";
import {
  usersReadRequest,
  usersReadSuccess,
  usersReadFailure
} from "../actions";

function* fetchUsers() {
  try {
    const { data } = yield call(api.readUsers);
    yield put(usersReadSuccess([...data]));
  } catch (e) {
    console.log(e);
    yield put(usersReadFailure());
  }
}

function* watchUsersRequests() {
  yield takeEvery(usersReadRequest, fetchUsers);
}

export { watchUsersRequests };
