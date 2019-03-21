import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Container, Img } from "./style";

import { LoginForm } from "../../components/Form";

const logos = ["samsung", "comarch", "nokia", "comarch", "tieto", "dolby"];

class Welcome extends Component {
  onSubmit = event => {
    event.preventDefault();
    // this.props.history.push("/dashboard/manager");
    window.location.assign(
      "https://github.com/login/oauth/authorize?client_id=cb8b7f9b4e0a03ead294"
    );
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
