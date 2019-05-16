import React, { useState } from "react";
import { withSnackbar } from "notistack";

import { Container, Form, StyledSpinner} from "./style";
import TextField from "@material-ui/core/TextField";
import Button from "../../Button";

import { textFieldValidator } from "../../../utils/validators";
import { updateProfile } from "../../../api/users";

const ProfileForm1 = props => {
    const [name, setName] = useState({
        value: "",
        error: false
    });
    const [surname, setSurname] = useState({
        value: "",
        error: false
    });
    const [email, setEmail] = useState({
        value: "",
        error: false
    });
    const [picture, setPicture] = useState({
        value: "",
        error: false
    });
    const returnValue = (value, validator) => ({
        value,
        error: validator ? validator(value) : false
    });
    const [waiting, setWaiting] = useState(false);
    const handleSubmit = async event => {
        const fields = [name, surname, email, picture];
        const mathods = [setName, setSurname, setEmail, setPicture];
        event.preventDefault();
        if (fields.every(e => !e.error & e.value)) {
            const profile = {
                name: name.value,
                surname: surname.value,
                email: email.value,
                picture: picture.value
            };
            setWaiting(true);
            updateProfile(profile).then(() => {
                const { setUpdate, update } = props;
                setUpdate(!update);
                props.handleClose();
                props.enqueueSnackbar("Profile has been updated!", {
                    variant: "success"
                });
            });
        } else {
            mathods.map((e, i) => 
                e(returnValue(fields[i].value, textFieldValidator))
            ); 
        }
    };

    return (
        <Container gridArea={props.gridArea}>
            <div className="Panel">
                <div className="FormContainer">    
                    <Form onSubmit={handleSubmit} gridArea={props.gridArea}>
                        <div className="Title">Profile Details</div>
                        {[
                            {
                                label: "Name",
                                value: name.value,
                                onChange: event =>
                                    setName(returnValue(event.target.value, textFieldValidator)),
                                error: name.error,
                                type: "text",
                                style: { gridArea: "name" }
                            },
                            {
                                label: "Surname",
                                value: surname.value,
                                onChange: event =>
                                    setSurname(returnValue(event.target.value, textFieldValidator)),
                                error: surname.error,
                                type: "text",
                                style: { gridArea: "surname" }
                            },
                            {
                                label: "Email",
                                value: email.value,
                                onChange: event =>
                                    setSurname(returnValue(event.target.value, textFieldValidator)),
                                error: email.error,
                                type: "email",
                                style: { gridArea: "email" }
                            }
                        ].map((props, index) => (
                            <TextField {...props} key={index} variant="outlined" />
                        ))}
                        {waiting ? (
                            <StyledSpinner
                                size={30}
                                gridArea="button"
                                style={{
                                    justifySelf: "end",
                                    alignSelf: "end",
                                    margiRight: "70px"
                                }}
                            />
                        ) : (
                            <Button
                                key="button"
                                size="small"
                                label="Submit"
                                gridArea="button"
                                color={"true"}
                                style={{ justifySelf: "end", alignSelf: "end" }}
                            />
                        )}
                    </Form>
                </div>
            </div>
        </Container>
    );
};

const ProfileForm = withSnackbar(ProfileForm1);

export default { ProfileForm };