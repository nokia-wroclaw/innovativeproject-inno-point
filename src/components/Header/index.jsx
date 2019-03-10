import React from "react";
import { withRouter } from "react-router-dom";
import { Container, StyledLink } from "./style";

export default withRouter(props => {
  const { pathname } = props.history.location;
  return (
    <Container>
      {/* <img className="Title" src="icons/logo2.svg" /> */}
      <div className="Top">
        <img src="/icons/dashboard.svg" />
      </div>

      <StyledLink to="/dashboard/manager" pathname={pathname}>
        <img src="/icons/manager.svg" />
        <span>Manager</span>
      </StyledLink>
      <StyledLink to="/dashboard/news" pathname={pathname}>
        <img src="/icons/news.svg" />
        <span>News</span>
      </StyledLink>
      <StyledLink to="/dashboard/projects" pathname={pathname}>
        <img src="/icons/projects.svg" />
        <span>Projects</span>
      </StyledLink>
      <div />
      <StyledLink to="/dashboard/profile" pathname={pathname}>
        <img src="/icons/user.svg" />
        <span>Profile</span>
      </StyledLink>
      <StyledLink to="/dashboard/settings" pathname={pathname}>
        <img src="/icons/settings.svg" />
        <span>Settings</span>
      </StyledLink>
    </Container>
  );
});
