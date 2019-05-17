import { GET, PUT, POST, DELETE } from "../utils/constants";
import createApiRequest from "../utils/createApiRequest";

export const readProfiles = () => createApiRequest(GET, "/profile");

export const readProfileById = id => {
   return createApiRequest(GET, `/profile/${id}`);
};

export const updateProfile = profile => 
    createApiRequest(PUT, "/profile", {
        profile
    });

export const deleteProfile = id => createApiRequest(DELETE, `/profile/${id}`);