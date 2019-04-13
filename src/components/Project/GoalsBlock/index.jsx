import React from "react";
import { Container } from "./style";

export default ({ project, gridArea }) => {
  const { goals } = project;
  return (
    <Container gridArea={gridArea}>
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
