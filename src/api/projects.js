import { GET, PUT, POST, DELETE } from "../utils/constants";
import createApiRequest from "../utils/createApiRequest";

export const readProjects = () => createApiRequest(GET, "/projects");

export const createProject = project =>
  createApiRequest(POST, "/projects", {
    project
  });

export const updateProject = project =>
  createApiRequest(PUT, "/projects", {
    project
  });

export const deleteProject = id =>
  createApiRequest(DELETE, "/projects", { id });
