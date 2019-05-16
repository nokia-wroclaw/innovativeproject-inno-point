import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { withSnackbar } from "notistack";

import { Container } from "./style";
import { Button as DeleteButton} from "../..";

import { deleteUsers } from "../../../api/users";

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
    withRouter(({ id, history, enqueueSnackbar, gridArea }) => {
        const [open, setOpen] = useState(false);

        function handleClickOpen() {
            setOpen(true);
        }
        function handleClickClose() {
            setOpen(false);
        }
        function handleDelete() {
            deleteUsers(id).then(() => {
                history.push("/dashboard/profile");
                enqueueSnackbar("Profile has been deleted!", {
                    variant: "info"
                });
            });
        }
        return(
            <Container gridArea={gridArea}>
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
                    onClose={handleClickClose}
                >
                    <DialogTitle>Are you sure?</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                        You can remove your account. Once you delete it,
                         there is no going back. Please be certain.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClickClose} color="primary">
                            Back
                        </Button>
                        <Button onClick={handleDelete} color="primary">
                            <span style={{ color: "red" }}>Delete</span>
                        </Button>
                    </DialogActions>
                </Dialog>
            </Container>
        );
    })
);