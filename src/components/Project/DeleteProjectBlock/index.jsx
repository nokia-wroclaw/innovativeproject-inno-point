import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Container, Panel } from "./style";
import { Button as DeleteButton } from "../..";

import { deleteProject } from "../../../api/projects";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

export default withRouter(({ project, history }) => {
  const [open, setOpen] = useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const { id, theme_color } = project[0];

  function handleDelete() {
    deleteProject(id).then(() => {
      history.push("/dashboard/projects");
    });
  }
  return (
    <Container>
      <Panel theme_color={theme_color} />
      <div className="Main">
        <div className="Label">Delete this project</div>
        <div className="Info">You can permanently remove this project.</div>
        <DeleteButton
          label="Delete"
          size="small"
          color="red"
          gridArea="button"
          style={{ justifySelf: "end", alignSelf: "end" }}
          onClick={handleClickOpen}
        />
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
        >
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              You can remove this app. Once you delete the app, there is no
              going back. Please be certain.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={handleDelete} color="primary">
              <span style={{ color: "red" }}>Agree</span>
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </Container>
  );
});
