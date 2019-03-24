import React from "react";
import { withRouter } from "react-router-dom";
import { Container, StyledLink } from "./style";
import { iconStyle } from "./style";
import {
  Assessment,
  ViewList,
  SupervisedUserCircle,
  Announcement,
  AccountCircle,
  Settings
} from "@material-ui/icons";

export default withRouter(props => {
  const { pathname } = props.history.location;
  return (
    <Container>
      <div className="Top">
        <img src="/icons/dashboard.svg" />
      </div>
      <StyledLink to="/dashboard/manager" pathname={pathname}>
        <Assessment style={iconStyle} />
        <span>Manager</span>
      </StyledLink>
      <StyledLink to="/dashboard/projects" pathname={pathname}>
        <ViewList style={iconStyle} />
        <span>Projects</span>
      </StyledLink>
      <StyledLink to="/dashboard/teams" pathname={pathname}>
        <SupervisedUserCircle style={iconStyle} />
        <span>Teams</span>
      </StyledLink>
      <StyledLink to="/dashboard/news" pathname={pathname}>
        <Announcement style={iconStyle} />
        <span>News</span>
      </StyledLink>
      <div />
      <StyledLink to="/dashboard/profile" pathname={pathname}>
        <AccountCircle style={iconStyle} />
        <span>Profile</span>
      </StyledLink>
      <StyledLink to="/dashboard/settings" pathname={pathname}>
        <Settings style={iconStyle} />
        <span>Settings</span>
      </StyledLink>
    </Container>
  );
});
