import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { Container, Img } from "./style";

import { LoginForm } from "../../components/Form";

import { readProjects } from "../../api/projects";

const logos = ["samsung", "comarch", "nokia", "comarch", "tieto", "dolby"];

class Welcome extends Component {
  onSubmit = event => {
    event.preventDefault();
    this.props.history.push("/topic");
  };

  render() {
    return (
      <Container>
        <LoginForm onSubmit={this.onSubmit} />
        {logos.map((element, index) => (
          <Img
            className="Logo"
            src={`photos/${element}.png`}
            key={index}
            index={index}
            amount={logos.length}
          />
        ))}
      </Container>
    );
  }
}

export default withRouter(Welcome);
