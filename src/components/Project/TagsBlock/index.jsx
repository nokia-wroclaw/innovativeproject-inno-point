import React from "react";
import { Container, Panel, Technology } from "./style";

export default ({ project, gridArea }) => {
  const { tags, theme_color } = project;
  return (
    <Container gridArea={gridArea}>
      {/* <Panel theme_color={theme_color} /> */}
      <div className="Main">
        <div className="Label">Tags</div>
        <div />
        <div className="TagsContainer">
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
