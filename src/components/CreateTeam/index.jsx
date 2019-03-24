import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ListSubheader from "@material-ui/core/ListSubheader";
import GridListTile from "@material-ui/core/GridListTile";
import GridList from "@material-ui/core/GridList";
import { Container } from "./style";

const CreateTeam = props => (
  <Container>
    <div className="Header">
      <h3>Dodaj osoby do drużyny!</h3>
    </div>
    <div className="Input">
      <InputBase
        placeholder="Search…"
        // classes={{
        //  root: classes.inputRoot,
        //  input: classes.inputInput
        // }}
      />
    </div>
    <div className="List">
      <GridList cellHeight={180}>
        <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div">Lista:</ListSubheader>
        </GridListTile>
      </GridList>
    </div>
  </Container>
);

export default CreateTeam;
