import { GET, PUT, POST, DELETE } from "../utils/constants";
import createApiRequest from "../utils/createApiRequest";

export const readTeams = () =>
  createApiRequest(PUT, "/teams", { token: localStorage.getItem("token") });

export const readTeamsById = id => createApiRequest(GET, `/teams/${id}`);

export const createTeam = team =>
  createApiRequest(POST, "/teams", {
    team
  });

export const updateTeams = team =>
  createApiRequest(PUT, "/teams", {
    team
  });

export const deleteTeam = id =>
  createApiRequest(DELETE, `/teams/${id}`, {
    token: localStorage.getItem("token")
  });
