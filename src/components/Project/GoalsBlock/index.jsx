import React from "react";
import { Container } from "./style";

export default ({ project }) => {
  const { goals } = project[0];
  return (
    <Container>
      <div className="Main">
        <div className="Label">Goals</div>
        {goals.split(",").map((goal, index) => (
          <div className="Goal" key={index}>
            <span className="Index">{index + 1}</span>
            <span className="Title"> {goal}</span>
          </div>
        ))}
      </div>
    </Container>
  );
};
