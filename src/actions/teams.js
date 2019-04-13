import { createAction } from "redux-starter-kit";
import AT from "./actionsTypes";

export const teamsReadRequest = createAction(AT.TEAMS_READ_REQUEST);
export const teamsReadSuccess = createAction(AT.TEAMS_READ_SUCCESS);
export const teamsReadFailure = createAction(AT.TEAMS_READ_FAILURE);

export const teamCreateRequest = createAction(AT.TEAM_CREATE_REQUEST);
