import projects from "./projects";
import users from "./users";

export default app => {
  projects(app);
  users(app);
};
