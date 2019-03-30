import { GET, PUT, POST, DELETE } from "../utils/constants";
import createApiRequest from "../utils/createApiRequest";

const readProjects = () => createApiRequest(GET, "/projects");

const readProjectsById = id => createApiRequest(GET, `/projects/${id}`);

const createProject = project =>
  createApiRequest(POST, "/projects", {
    project
  });

const updateProject = project =>
  createApiRequest(PUT, "/projects", {
    project
  });

const deleteProject = id => createApiRequest(DELETE, `/projects/${id}`);

export {
  readProjects,
  readProjectsById,
  createProject,
  updateProject,
  deleteProject
};
