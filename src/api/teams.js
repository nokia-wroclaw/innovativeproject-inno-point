import { GET, PUT, POST, DELETE } from "../utils/constants";
import createApiRequest from "../utils/createApiRequest";

export const readTeams = () => createApiRequest(GET, "/teams");

export const readTeamsById = id => createApiRequest(GET, `/teams/${id}`);

export const createTeams = team =>
  createApiRequest(POST, "/teams", {
    team
  });

export const updateTeams = team =>
  createApiRequest(PUT, "/teams", {
    team
  });

export const deleteTeams = id => createApiRequest(DELETE, `/teams/${id}`);