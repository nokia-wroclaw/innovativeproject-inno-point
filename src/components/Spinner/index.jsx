import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { spinnerStyle, Container } from "./style";

export default props => (
  <Container {...props}>
    <CircularProgress size={50} style={spinnerStyle} />
  </Container>
);
