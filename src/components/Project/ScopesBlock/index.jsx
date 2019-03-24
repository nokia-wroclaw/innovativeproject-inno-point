import React from "react";
import { Container, Panel } from "./style";

export default ({ project }) => {
  const { scopes, theme_color } = project[0];
  console.log(project[0]);
  return (
    <Container>
      <Panel theme_color={theme_color} />
      <div className="Main">
        <div className="Label">Scopes</div>
        {scopes.split(",").map((scope, index) => (
          <div className="Scope" key={index}>
            <span className="Index">{index + 1}</span>
            <span className="Title"> {scope}</span>
          </div>
        ))}
      </div>
    </Container>
  );
};
