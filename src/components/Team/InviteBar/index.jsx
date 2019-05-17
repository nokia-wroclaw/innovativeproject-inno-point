import React, { Component, useState, useEffect } from 'react';
import Select from "react-select";
import { connect } from "react-redux";

import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

import { usersReadRequest } from "../../../actions";

import {Container } from "./style";
import { Button } from "../../Button";
import { StyledSpinner } from '../../Form/TeamForm/style';

const InviteBar = props => {

    const [usersList, setUsersList] = useState("");
    const [inviteUser, setInviteUser] = useState("");
    const [inputValue, setInputValue] = useState("");

    function handleClickInvite(event, newInput) {
        setInviteUser(newInput);
    }

    useEffect(() => {
        props.readUsers();

    }, [usersList]);
    
    if (!usersList || usersList.length === 0) {
        return <StyledSpinner/>;
    }

    if (inputValue) {
        usersList = usersList.filter(user => user.name.includes(inputValue));    
    }

    return (
        <Container>
            <InputBase
                placeholder="Search group-mates"
                style={{ width: "100%" }}
                onChange={e => setInputValue(e.target.value)}
            />
            <SearchIcon/>
            <Button
                key="button"
                size="small"
                placeholder="Invite"
                color={"true"}
            />
        </Container>
    );
};

const mapStateToProps = state => {
    const members = state.usersList.items;
    return {
        members
    };
};

const mapDispatchToProps = dispatch => ({
    readUsers: () => dispatch(usersReadRequest())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InviteBar);