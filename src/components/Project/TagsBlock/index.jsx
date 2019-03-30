import React from "react";
import { Container, Panel, Technology } from "./style";

export default ({ project }) => {
  const { tags, theme_color } = project;
  return (
    <Container>
      {/* <Panel theme_color={theme_color} /> */}
      <div className="Main">
        <div className="Label">Tags</div>
        <div />
        <div>
          {tags.split(",").map((tag, index) => (
            <Technology theme_color={theme_color} key={index}>
              {tag}
            </Technology>
          ))}
        </div>
      </div>
    </Container>
  );
};
