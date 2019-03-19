import React, { Component } from "react";

import TextField from "@material-ui/core/TextField";
import ChipInput from "material-ui-chip-input";
import MenuItem from "@material-ui/core/MenuItem";

import { Form, Container } from "./style";
import Button from "../../Button";

import { createProject } from "../../../api/projects";

import { textFieldValidator } from "../../../utils/validators";

const contacts = [
  "College Worker",
  "College Worker",
  "College Worker",
  "College Worker",
  "College Worker",
  "College Worker"
];

class TopicForm extends Component {
  state = {
    name: {
      value: "",
      error: false
    },
    contact: {
      value: "",
      error: false
    },
    number: {
      value: "",
      error: false
    },
    desc: {
      value: "",
      error: false
    },
    tags: {
      value: [],
      error: false
    }
  };

  handleChange = name => value => {
    this.setState({
      [name]: { value: value, error: textFieldValidator(value) }
    });
  };

  handleAddChip = chip =>
    this.setState(prevState => ({
      tags: {
        value: [...prevState.tags.value, chip]
      }
    }));

  handleDeleteChip = (chip, index) => {
    this.setState(prevState => ({
      tags: {
        value: prevState.tags.value.filter((e, i) => i !== index)
      }
    }));
  };

  handleSubmit = async event => {
    event.preventDefault();
    await Object.keys(this.state).map(element =>
      this.handleChange(element)(this.state[element].value)
    );
    if (await Object.values(this.state).every(element => !element.error)) {
      const { name, contact, number, desc, tags } = this.state;
      const project = {
        name: name.value,
        academic_contact: contact.value,
        num_of_members: number.value,
        description: desc.value,
        tags: tags.value
      };
      createProject(project);
    }
  };

  render() {
    const { name, contact, number, desc, tags } = this.state;
    return (
      <Container>
        <div className="Panel" />
        <div className="FormContainer">
          <Form onSubmit={this.handleSubmit} gridArea={this.props.gridArea}>
            <div className="Title">Topic Details</div>
            {[
              {
                label: "Name",
                value: name.value,
                onChange: event =>
                  this.handleChange("name")(event.target.value),
                error: name.error,
                style: { gridArea: "name" }
              },
              {
                label: "College contact",
                select: true,
                value: contact.value,
                onChange: event =>
                  this.handleChange("contact")(event.target.value),
                style: { gridArea: "contact" },
                error: contact.error,
                children: contacts.map((option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                ))
              },
              {
                label: "Number of Students",
                value: number.value,
                onChange: event =>
                  this.handleChange("number")(event.target.value),
                error: number.error,
                type: "number",
                style: { gridArea: "number" }
              },
              {
                label: "Short description",
                value: desc.value,
                onChange: event =>
                  this.handleChange("desc")(event.target.value),
                error: desc.error,
                multiline: true,
                style: { gridArea: "desc" }
              }
            ].map((props, index) => {
              return <TextField {...props} key={index} />;
            })}
            <ChipInput
              key={"chipsinput"}
              value={tags.value}
              onAdd={chip => this.handleAddChip(chip)}
              onDelete={(chip, index) => this.handleDeleteChip(chip, index)}
              style={{ gridArea: "chips" }}
              label="Tags"
            />
            <Button
              key={"button"}
              size="small"
              label="Submit"
              gridArea="button"
              style={{ justifySelf: "end", alignSelf: "end" }}
            />
          </Form>
        </div>
      </Container>
    );
  }
}
export { TopicForm };
