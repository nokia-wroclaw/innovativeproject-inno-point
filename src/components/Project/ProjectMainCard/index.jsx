import React from "react";
import { StyledFragment } from "./style";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Container } from "./style";

export default ({ project }) => (
  <Container>
    <div className="Panel" />
    <div className="Main">
      <div className="Name">{project.name}</div>
      <div className="Desc">{project.description}</div>
      <div style={{ display: "flex" }}>
        <div className="scopes">
          {project.scopes &&
            project.scopes.map((element, index) => (
              <List key={index}>
                <ListItem>
                  <ListItemText
                    primary={`scope ${index + 1}`}
                    secondary={element}
                  />
                </ListItem>
              </List>
            ))}
        </div>
        <div className="Stack">
          {project.stackTechnology &&
            project.stackTechnology.map((element, index) => (
              <List key={index}>
                <ListItem>
                  <ListItemText
                    primary={`technology ${index + 1}`}
                    secondary={element}
                  />
                </ListItem>
              </List>
            ))}
        </div>
      </div>
    </div>
  </Container>
);
