import React from "react";
import { withRouter } from "react-router-dom";
import { Container, StyledLink } from "./style";

export default withRouter(props => {
  const { pathname } = props.history.location;
  return (
    <Container>
      <img className="Title" src="icons/logo2.svg" />
      <div className="Border" />
      <StyledLink to="/dashboard/news" pathname={pathname}>
        <img src="icons/megaphone.svg" />
        <span>News</span>
      </StyledLink>
      <StyledLink to="/dashboard/projects" pathname={pathname}>
        <img src="icons/bulb.svg" />
        <span>Projects</span>
      </StyledLink>
      <div />
      <StyledLink to="/dashboard/profile" pathname={pathname}>
        <img src="icons/user.svg" />
        <span>Profile</span>
      </StyledLink>
    </Container>
  );
});
