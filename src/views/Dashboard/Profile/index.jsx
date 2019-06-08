import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled, { keyframes } from "styled-components";
import { getUnverifiedProjects } from "../../../store/selectors";
import { projectsReadRequest } from "../../../actions";

import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { AccountCircle } from "@material-ui/icons";

import { ProjectCard } from "../../../components";

export const Label = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  margin-left: 50px;
  margin-top: 60px;
  color: #00336e !important;
  font-size: 24px;
  border-radius: 8px;
  padding: 7px;
  padding-bottom: 10px;

  > span {
    margin-left: 10px;
  }

  transition: all 0.2s ease-in-out;
`;

export const TopBar = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 5px;

  > div.Searchbar {
    margin-top: 50px;
    margin-right: 60px;
    display: flex;
    align-items: center;
    width: 250px;
    height: 25px;
    background-color: rgba(255, 255, 255, 70%);
    border-radius: 50px;
    padding: 8px 15px;
    justify-self: end;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
    transition: all 0.1s ease-in-out;

    @media (max-width: 500px) {
      width: 150px;
    }

    > input {
      width: 250px;
      transition: all 0.1s ease-in-out;
    }
  }

  > div.Label {
    align-items: center;
    margin-top: 50px;
    margin-left: 60px;
    font-size: 20px;
    padding: 5px 15px;
    border-radius: 8px;
    color: gray;
    background: white;
  }
`;

const Profile = props => (
  <div>
    <TopBar>
      <Label>
        <AccountCircle />
        <span>Profile</span>
      </Label>
      <div className="Searchbar">
        <InputBase placeholder="Search…" style={{ width: "100%" }} />
        <SearchIcon />
      </div>
    </TopBar>
  </div>
);

export default Profile;
