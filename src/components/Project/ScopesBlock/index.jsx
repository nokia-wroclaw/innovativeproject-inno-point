import React from "react";
import { Container, Panel } from "./style";

export default ({ project, gridArea }) => {
  const { scopes } = project;
  return (
    <Container gridArea={gridArea}>
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
