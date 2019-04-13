import projectsReducer from "./projects";
import teamsReducer from "./teams";
import usersReducer from "./users";
import userReducer from "./user";

const rootReducer = {
  projects: projectsReducer,
  teams: teamsReducer,
  users: usersReducer,
  user: userReducer
};

export default rootReducer;
