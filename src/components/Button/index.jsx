import React from "react";
import { StyledButton } from "./style";

const Button = props => <StyledButton {...props}>{props.label}</StyledButton>;

export default Button;
