import React from "react";
import { Container, Panel } from "./style";

export default ({ project }) => {
  const { goals, theme_color } = project[0];
  console.log(project[0]);
  return (
    <Container>
      <Panel theme_color={theme_color} />
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
