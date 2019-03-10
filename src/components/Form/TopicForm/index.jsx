import React, { Component } from "react";

import TextField from "@material-ui/core/TextField";

import { Form, Container } from "./style";
import Button from "../../Button";

import { textFieldValidator } from "../../../utils/validators";

class TopicForm extends Component {
  state = {
    name: {
      value: "",
      error: false
    },
    company: {
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
    }
  };

  handleChange = name => value => {
    this.setState({
      [name]: { value: value, error: textFieldValidator(value) }
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    await Object.keys(this.state).map(element =>
      this.handleChange(element)(this.state[element].value)
    );
    if (await Object.values(this.state).every(element => !element.error)) {
      this.props.onSubmit();
    }
  };

  render() {
    const { name, company, contact, number, desc } = this.state;
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
                label: "Name of Company",
                value: company.value,
                onChange: event =>
                  this.handleChange("company")(event.target.value),
                error: company.error,
                style: { gridArea: "company" }
              },
              {
                label: "College contact",
                value: contact.value,
                onChange: event =>
                  this.handleChange("contact")(event.target.value),
                error: contact.error,
                style: { gridArea: "contact" }
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
                rows: "3",
                style: { gridArea: "desc" }
              }
            ].map((props, index) => {
              return <TextField {...props} key={index} />;
            })}
            <Button
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
