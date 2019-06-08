import { GET, PUT, POST, DELETE } from "../utils/constants";
import createApiRequest from "../utils/createApiRequest";
import axios from "axios";
import config from "../config";

const readProjects = () => {
  return axios.put(`${config.api}/projects`, {
    token: localStorage.getItem("token")
  });
};

const readProjectsById = id => createApiRequest(GET, `/projects/${id}`);

const createProject = project =>
  createApiRequest(POST, "/projects", {
    project
  });

const updateProject = (id, project) =>
  createApiRequest(PUT, `/projects/${id}`, {
    token: localStorage.getItem("token"),
    project
  });

const deleteProject = id => createApiRequest(DELETE, `/projects/${id}`);

const verifyProject = id => createApiRequest(PUT, `/projects/verify/${id}`);

export {
  readProjects,
  readProjectsById,
  createProject,
  updateProject,
  deleteProject,
  verifyProject
};
