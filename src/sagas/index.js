import { all } from "redux-saga/effects";
import { watchProjectsRequests } from "./projects";
import { watchTeamsRequests } from "./teams";
import { watchUsersRequests } from "./users";

export default function* rootSaga() {
  yield all([
    watchProjectsRequests(),
    watchTeamsRequests(),
    watchUsersRequests()
  ]);
}
