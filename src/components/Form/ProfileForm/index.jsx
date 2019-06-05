import React, { useState } from "react";
import { connect } from "react-redux";
import { AccountCircle } from "@material-ui/icons";
import TextField from "@material-ui/core/TextField";

import { withSnackbar } from "notistack";

import { MainContainer, Form, StyledSpinner, Picture, iconStyle, Title } from "./style";
import Button from "../../Button";

import { updateUsers } from "../../../api/users";
import { textFieldValidator } from "../../../utils/validators";

const ProfileForm1 = props => { 
    const [name, setName] = useState({
      value: props.name,
      error: false
    });

    const [surname, setSurname] = useState({
      value: props.surname,
      error: false
    });

    const [email, setEmail] = useState({
      value: props.email,
      error: false
    });

    const [waiting, setWaiting] = useState(false);

    const returnValue = (value, validator) => ({
      value,
      error: validator ? validator(value) : false
    });

    const handleSubmit = async event => {
      const fields = [name, surname, email];
      const mathods = [setName, setSurname, setEmail];
      event.preventDefault();
      if (fields.every(e => !e.error && e.value)) {
        const user = {
          name: name.value,
          surname: surname.value,
          email: email.value
        };
        setWaiting(true);
        updateUsers(user).then(() => {
        const { setUpdate, update } = props;
        setUpdate(!update);
        props.handleClose();
        props.enqeueSnackbar("Data updated successfully", {
          variant: "info"
        });
      });
      } else {
        mathods.map((e, i) => 
          e(returnValue(fields[i].value, textFieldValidator))
        );
      }
    };

    return(
      <div class="Profile">
        <MainContainer>
          <div className="Panel">
          <Title>User Profile</Title>
          { props.github_picture ? (
            <Picture src={props.github_picture} gridArea="picture" />
          ) : (
            <AccountCircle style={iconStyle} gridArea="picture"  />
          )}
            <Form onSubmit={handleSubmit} gridArea="form">
                {[
                  {
                    label: "Name",
                    value: name.value,
                    onChange: event => 
                      setName(returnValue(event.target.value, textFieldValidator)),
                    error: name.error,
                    style: { gridArea: "name" }
                  },
                  {
                    label: "Surname",
                    value: surname.value,
                    onChange: event => 
                      setSurname(returnValue(event.target.value, textFieldValidator)),
                    error: surname.error,
                    style: { gridArea: "surname" }
                  },
                  {
                    label: "Email",
                    value: email.value,
                    onChange: event => 
                      setEmail(returnValue(event.target.value, textFieldValidator)),
                    error: email.error,
                    style: { gridArea: "email" }
                  }
                ].map((props, index) => (
                  <TextField {...props} key={index} variant="outlined" />
                ))}
                {waiting ? (
                  <StyledSpinner size={30} gridArea="button" style={{
                    justifySelf: "end",
                    alignSelf: "end",
                    marginRight: "70px"
                    }}
                  />
                ) : (
                  <Button key="button" size="small" label="Submit" gridArea="button"
                    color={"true"} style={{ justifySelf: "end", alignSelf: "end" }}
                  />
                )}
            </Form>
            </div>
          </MainContainer>
        </div>
  );
};

const mapStateToProps = state => {
  const projects = state.projects.items;
  return {
    projects
  };
};

const ProfileForm = withSnackbar(ProfileForm1);

export default connect(mapStateToProps)(ProfileForm);
