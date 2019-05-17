import { createAction } from "redux-starter-kit";
import AT from "./actionsTypes";

export const profilesReadRequest = createAction(AT.PROFILE_READ_REQUEST);
export const profilesReadSuccess = createAction(AT.PROFILE_READ_SUCCESS);
export const profilesReadFailure = createAction(AT.PROFILE_READ_FAILURE);

export const profileReadRequest = createAction(AT.PROFILE_READ_REQUEST);
export const profileReadSuccess = createAction(AT.PROFILE_READ_SUCCESS);
export const profileReadFailure = createAction(AT.PROFILE_READ_FAILURE);

export const profileCreateRequest = createAction(AT.PROFILE_CREATE_REQUEST);
