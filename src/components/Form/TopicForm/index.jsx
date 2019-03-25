import React, { Component } from "react";

import TextField from "@material-ui/core/TextField";
import ChipInput from "material-ui-chip-input";
import MenuItem from "@material-ui/core/MenuItem";

import { Form, Container } from "./style";
import Button from "../../Button";
import ColorPicker from "../../ColorPicker";

import { createProject } from "../../../api/projects";

import {
  textFieldValidator,
  textAreaValidator
} from "../../../utils/validators";

class TopicForm extends Component {
  state = {
    name: {
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
    },
    theme_color: {
      value: [],
      error: false
    }
  };

  handleChange = (name, value, validator) => {
    this.setState({
      [name]: { value: value, error: validator ? validator(value) : false }
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
    if (Object.keys(this.state).every(element => this.state[element].value)) {
      if (Object.values(this.state).every(element => !element.error)) {
        const { name, number, desc, tags, theme_color } = this.state;
        const project = {
          name: name.value,
          number_of_members: number.value,
          short_description: desc.value,
          tags: tags.value,
          theme_color: theme_color.value
        };
        createProject(project);
        this.props.close(false);
        this.props.refresh();
      }
    }
  };

  render() {
    const { name, number, desc, tags, theme_color } = this.state;
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
                  this.handleChange(
                    "name",
                    event.target.value,
                    textFieldValidator
                  ),
                error: name.error,
                style: { gridArea: "name" }
              },
              {
                label: "Number of Students",
                value: number.value,
                onChange: event =>
                  this.handleChange(
                    "number",
                    event.target.value,
                    textFieldValidator
                  ),
                error: number.error,
                type: "number",
                style: { gridArea: "number" }
              },
              {
                label: "Short description",
                value: desc.value,
                onChange: event =>
                  this.handleChange(
                    "desc",
                    event.target.value,
                    textAreaValidator
                  ),
                error: desc.error,
                multiline: true,
                rows: 6,
                style: { gridArea: "desc" }
              }
            ].map((props, index) => (
              <TextField {...props} key={index} variant="outlined" />
            ))}
            <ChipInput
              key="chipsinput"
              value={tags.value}
              onAdd={chip => this.handleAddChip(chip)}
              onDelete={(chip, index) => this.handleDeleteChip(chip, index)}
              style={{ gridArea: "chips" }}
              label="Tags"
              variant="outlined"
            />
            <ColorPicker
              gridArea={"colors"}
              color={theme_color.value}
              onChange={color => this.handleChange("theme_color", color.hex)}
            />
            <Button
              key="button"
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
