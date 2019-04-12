import React, { useState } from "react";
import { withSnackbar } from "notistack";
import styled from "styled-components/macro";

import TextField from "@material-ui/core/TextField";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { LockOpen, Lock } from "@material-ui/icons";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";

import { Form, Container, StyledSpinner, StyledStatusOfTeam } from "./style";
import Button from "../../Button";
import ColorPicker from "../../ColorPicker";

import { createTeam } from "../../../api/teams";

import { textFieldValidator } from "../../../utils/validators";

const TopicForm1 = props => {
  const [dense, setDense] = useState(false);
  const [secondary, setSecondary] = useState(false);
  const [typeOfProject, setTypeOfProject] = useState(true);
  const [number, setNumber] = useState({
    value: "",
    error: false
  });

  const [status, setStatus] = useState({
    value: "",
    error: false
  });

  const [waiting, setWaiting] = useState(false);

  function handleTypeOfProject(event, newValue) {
    setTypeOfProject(newValue);
  }

  const returnValue = (value, validator) => ({
    value,
    error: validator ? validator(value) : false
  });

  function generate(element) {
    return [0, 1, 2].map(value =>
      React.cloneElement(element, {
        key: value
      })
    );
  }

  const handleSubmit = async event => {
    const fields = [number];
    const mathods = [setNumber];
    event.preventDefault();
    if (fields.every(e => !e.error && e.value)) {
      const team = {
        number_of_members: number.value,
        leader_id: props.user.id,
        open: typeOfProject
      };
      setWaiting(true);
      createTeam(team).then(() => {
        const { setUpdate, update } = props;
        setUpdate(!update);
        props.handleClose();
        props.enqueueSnackbar("Team has been created!", {
          variant: "success"
        });
        setWaiting(false);
      });
    } else {
      mathods.map((e, i) =>
        e(returnValue(fields[i].value, textFieldValidator))
      );
    }
  };

  return (
    <Container>
      <div className="Panel" />
      <div className="FormContainer">
        <Form onSubmit={handleSubmit} gridArea={props.gridArea}>
          <div className="Title">Team Details</div>
          <TextField
            label="Number of Students"
            value={number.value}
            onChange={event =>
              setNumber(returnValue(event.target.value, textFieldValidator))
            }
            error={number.error}
            type="number"
            style={{ gridArea: "number" }}
            variant="outlined"
          />
          <StyledStatusOfTeam
            style={{ gridArea: "status" }}
            value={typeOfProject}
            onChange={handleTypeOfProject}
          >
            <BottomNavigationAction
              label="Open"
              value={true}
              icon={<LockOpen />}
            />
            <BottomNavigationAction
              label="Close"
              value={false}
              icon={<Lock />}
            />
          </StyledStatusOfTeam>
          {/* <List
            dense={dense}
            css={`
              grid-area: list;
              border: 1px solid rgba(0, 0, 0, 0.23);
              border-radius: 8px;
            `}
          >
            {generate(
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Single-line item" />
                <ListItemSecondaryAction>
                  <IconButton aria-label="Delete">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            )}
          </List> */}
          {waiting ? (
            <StyledSpinner
              size={30}
              gridArea="button"
              style={{
                justifySelf: "end",
                alignSelf: "end",
                marginRight: "70px"
              }}
            />
          ) : (
            <Button
              key="button"
              size="small"
              label="Submit"
              gridArea="button"
              color={"true"}
              style={{ justifySelf: "end", alignSelf: "end" }}
            />
          )}
        </Form>
      </div>
    </Container>
  );
};

const TeamForm = withSnackbar(TopicForm1);

export { TeamForm };
