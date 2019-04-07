import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as api from "../api/users";
import {
  usersReadRequest,
  usersReadSuccess,
  usersReadFailure,
  userReadRequest,
  userReadSuccess,
  userReadFailure
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

function* fetchUser({ payload: { id } }) {
  try {
    console.log(id);
    const { data } = yield call(api.readUser, id);
    yield put(userReadSuccess(data[0]));
  } catch (e) {
    console.log(e);
    yield put(userReadFailure());
  }
}

function* watchUsersRequests() {
  yield takeEvery(usersReadRequest, fetchUsers);
  yield takeEvery(userReadRequest, fetchUser);
}

export { watchUsersRequests };
