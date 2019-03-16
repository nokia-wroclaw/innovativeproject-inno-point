import React from "react";
import { withRouter } from "react-router-dom";
import { Container, StyledLink } from "./style";

export default withRouter(props => {
  const { pathname } = props.history.location;
  return (
    <Container>
      <div className="Top">
        <img src="/icons/dashboard.svg" />
      </div>
      <StyledLink to="/dashboard/manager" pathname={pathname}>
        <img src="/icons/manager.svg" />
        <span>Manager</span>
      </StyledLink>
      <StyledLink to="/dashboard/projects" pathname={pathname}>
        <img src="/icons/projects.svg" />
        <span>Projects</span>
      </StyledLink>
<<<<<<< HEAD

=======
      <StyledLink to="/dashboard/news" pathname={pathname}>
        <img src="/icons/news.svg" />
        <span>News</span>
      </StyledLink>
>>>>>>> b0835a2f5baa220caddace198d87fd0d783f5e3d
      <div />
      <StyledLink to="/dashboard/createteam" pathname={pathname}>
        <img src="icons/plus.svg" />
        <span>Create Team</span>
      </StyledLink>
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
