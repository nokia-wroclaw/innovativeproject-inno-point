import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { Link } from "@material-ui/core";
import { Button as btn } from "../components/index";
import Button from "@material-ui/core/Button";

const LinkButton = props => {
  const {
    history,
    location,
    match,
    staticContext,
    to,
    onClick,
    ...rest
  } = props;
  return (
    <Button
      variant="contained"
      style={{ justifySelf: "start", alignSelf: "center" }}
      {...rest}
      onClick={event => {
        onClick && onClick(event);
        history.push(to);
      }}
    >
      {" "}
      previous page
    </Button>
  );
};

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default withRouter(LinkButton);
