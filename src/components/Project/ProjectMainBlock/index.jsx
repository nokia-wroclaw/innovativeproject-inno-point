import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Container, Panel } from "./style";
import Spinner from "../../Spinner";

export default ({ project, gridArea }) => {
  const { name, long_description, short_description, theme_color } = project;
  return (
    <Container gridArea={gridArea}>
      <Panel theme_color={theme_color} />
      <div className="Main">
        <div className="Name">{name ? name : "No name"}</div>
        <div className="Desc">
          {long_description ? long_description : "No description"}
        </div>
        {/* <div style={{ display: "flex" }}>
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
       </div> */}
        {/* <div className="Stack">
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
       </div> */}
        {/* </div> */}
      </div>
    </Container>
  );
};
