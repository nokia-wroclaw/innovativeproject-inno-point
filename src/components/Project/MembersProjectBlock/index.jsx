import React, { Fragment } from "react";
import { Panel } from "./style";
import { iconStyle, tableStyle, Container } from "./style";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { Person } from "@material-ui/icons";

export default ({ members, theme_color }) => {
  return (
    <Container>
      <Panel theme_color={theme_color} />
      {/* <Table style={tableStyle} fontSize="18px">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontSize: "18px" }}>Name</TableCell>
            <TableCell style={{ fontSize: "18px" }}>Role</TableCell>
            <TableCell style={{ fontSize: "18px" }}>Pull Requests</TableCell>
            <TableCell style={{ fontSize: "18px" }}>Commits</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {members &&
            members.map((element, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {element.name} {element.surname}
                </TableCell>
                <TableCell>{element.role}</TableCell>
                <TableCell>{element.PR}</TableCell>
                <TableCell>{element.commits}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table> */}
      <div className="MembersContainer">
        {members &&
          members.map(
            (element, index) => {
              const { name, surname } = element;
              return (
                <div className="Member">
                  <Person style={iconStyle} strokeWidth="10" />
                  <div className="Data">
                    {element.name} {name.length + surname.length > 15 && <br />}
                    {element.surname}
                  </div>
                </div>
              );
            }
            // <TableRow key={index}>
            //   <TableCell component="th" scope="row">
            //     {element.name} {element.surname}
            //   </TableCell>
            //   <TableCell>{element.role}</TableCell>
            //   <TableCell>{element.PR}</TableCell>
            //   <TableCell>{element.commits}</TableCell>
            // </TableRow>
          )}
      </div>
    </Container>
  );
};
