import { createAction } from "redux-starter-kit";
import AT from "./actionsTypes";

export const projectCreateRequest = createAction(AT.PROJECT_CREATE_REQUEST);
// projectCreateRequest({ text: "Nowy projekt" });
