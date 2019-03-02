import { GET, PUT, POST, DELETE } from "../utils/constants";
import createApiRequest from "../utils/createApiRequest";

export const readProjects = () => createApiRequest(GET, "/projects");

export const createProject = (
  name,
  description,
  goals,
  scopes,
  requirements,
  mentor,
  company
) =>
  createApiRequest(POST, "/projects", {
    name,
    description,
    goals,
    scopes,
    requirements,
    mentor,
    company
  });

export const updateProject = (
  name,
  description,
  goals,
  scopes,
  requirements,
  mentor,
  company
) =>
  createApiRequest(PUT, "/projects", {
    name,
    description,
    goals,
    scopes,
    requirements,
    mentor,
    company
  });

export const deleteProject = id =>
  createApiRequest(DELETE, "/projects", { id });
