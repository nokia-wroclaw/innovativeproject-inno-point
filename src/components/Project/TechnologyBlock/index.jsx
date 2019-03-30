import React from "react";
import { Container, Panel, Technology } from "./style";

export default ({ project }) => {
  const { technology, theme_color } = project;
  return (
    <Container>
      {/* <Panel theme_color={theme_color} /> */}
      <div className="Main">
        <div className="Label">Technology</div>
        <div />
        <div>
          {technology.split(",").map((technology, index) => (
            <Technology theme_color={theme_color} key={index}>
              {technology}
            </Technology>
          ))}
        </div>
      </div>
    </Container>
  );
};
