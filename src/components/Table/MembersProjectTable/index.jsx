import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default ({ project }) => (
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
            <TableRow key={index}>
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
);
