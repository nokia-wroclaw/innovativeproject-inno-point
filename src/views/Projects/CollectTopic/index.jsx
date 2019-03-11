import React, { Component } from "react";

import { TopicForm } from "../../../components";

import { Container } from "./style";

class CollectTopic extends Component {
  onSubmit = () => {
    alert("submit!");
  };

  render() {
    return (
      <Container>
        <TopicForm onSubmit={this.onSubmit} />
      </Container>
    );
  }
}

export default CollectTopic;
