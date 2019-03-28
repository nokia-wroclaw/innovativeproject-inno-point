import { createReducer } from "redux-starter-kit";
import AT from "../actions/actionsTypes";

const projectsReducer = createReducer([], {
  [AT.PROJECT_CREATE_REQUEST]: (state, action) => {
    console.log(action.payload);
  }
});

export default projectsReducer;
