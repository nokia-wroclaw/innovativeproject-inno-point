import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { MainContainer, Container } from "./style";
import { Button } from "..";

import projects from "./projects";

const Project = props => {
  const id = props.match.params.id;
  const project = projects
    .flatMap(element => element.projects)
    .find(element => element.id === id);
  return (
    <div>
      <MainContainer>
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
            <div className="stack">
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
      </MainContainer>
      <Container>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Role</TableCell>
                <TableCell align="right">Pull Requests</TableCell>
                <TableCell align="right">Commits</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {project.members &&
                project.members.map((element, index) => (
                  <TableRow key={element.name}>
                    <TableCell component="th" scope="row">
                      {element.name} {element.surname}
                    </TableCell>
                    <TableCell align="right">{element.role}</TableCell>
                    <TableCell align="right">{element.PR}</TableCell>
                    <TableCell align="right">{element.commits}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Paper>
      </Container>
      {/* <Link to="/dashboard/projects">
        <Button label="back" size="small" />
      </Link> */}
    </div>
  );
};

export default Project;
