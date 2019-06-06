import { GET, PUT, POST, DELETE } from "../utils/constants";
import createApiRequest from "../utils/createApiRequest";

export const readUsers = () =>
  createApiRequest(PUT, "/users", { token: localStorage.getItem("token") });

export const readUser = () => {
  return createApiRequest(PUT, "/user", {
    token: localStorage.getItem("token")
  });
};

export const createUsers = user =>
  createApiRequest(POST, "/users", {
    user
  });

export const updateUsers = user =>
  createApiRequest(PUT, "/users", {
    user
  });

export const deleteUsers = id => createApiRequest(DELETE, `/users/${id}`);

export const changeUserTeam = (id, team_id) =>
  createApiRequest(PUT, `/users/${id}`, team_id);
