import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components/macro";

import { getUserById } from "../../../store/selectors";
import { usersReadRequest } from "../../../actions";

import {
    ProfileForm,
    PictureBlock,
    DeleteProfileBlock
  } from "../../../components";
  
  import { MainContainer, StyledSpinner } from "./style";

const Profile = props => {
    useEffect(() => {}, []);

    const { user } = props;
    if (!user || Object.keys(user).length === 0) {
        return <StyledSpinner />;
    } 
    const {
        id,
        name,
        surname,
        email,
        github_picture
    } = user;
    return (
        <MainContainer>
            <ProfileForm props={user} gridArea="input" /> { }
            {github_picture && <PictureBlock user={user} gridArea="picture" />}
            <DeleteProfileBlock id={id} gridArea="delete" />
        </MainContainer>
    );
};

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const userProfile = getUserById(state, id);
    return {
        user: userProfile
    };
};

const mapDispatchToProps = dispatch => ({
    readProfile: () => dispatch(usersReadRequest())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);
