import React, { useState } from "react";
import { AccountCircle } from "@material-ui/icons";
import TextField from "@material-ui/core/TextField";

import { withSnackbar } from "notistack";

import { ProfileForm } from "../../../components";
import { readUser } from "../../../api/users";

const Profile = props => {
    const { id } = props;
    const user = readUser(id);

    return(
        <ProfileForm props={user} />
    );
};

export default Profile;
