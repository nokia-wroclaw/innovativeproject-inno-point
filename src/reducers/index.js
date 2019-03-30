import projectsReducer from "./projects";
import teamsReducer from "./teams";
import usersReducer from "./users";

const rootReducer = {
  projects: projectsReducer,
  teams: teamsReducer,
  users: usersReducer
};

export default rootReducer;
