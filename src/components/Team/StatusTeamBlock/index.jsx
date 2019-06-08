import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { withSnackbar } from "notistack";

import { Container } from "./style";
import { Button as DeleteButton } from "../..";
import { Button as EditButton } from "../..";

import { verifyProject } from "../../../api/projects";
import { TeamForm } from "../../../components";

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
export default withSnackbar(
  withRouter(({ id, history, enqueueSnackbar, gridArea, status }) => {
    const [open, setOpen] = useState(false);

    function handleClickOpen() {
      setOpen(true);
    }

    function handleClose() {
      setOpen(false);
    }

    function handleVerify() {
      verifyProject(id).then(() => {
        enqueueSnackbar("Team staus has been changed!", {
          variant: "info"
        });
      });
    }
    return (
      <Container gridArea={gridArea}>
        <div className="Main">
          <div className="Label">Change this team status</div>
          <div className="Info">You can change status and let users join.</div>
          <DeleteButton
            label="Verify"
            size="small"
            color="blue"
            gridArea="button"
            style={{ justifySelf: "right", alignSelf: "end" }}
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
                Users will be able to join team
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                <span style={{ color: "gray" }}>Back</span>
              </Button>
              <Button onClick={handleVerify} color="primary">
                {status === "open" ? "Make team closed" : "Make team open"}
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </Container>
    );
  })
);
