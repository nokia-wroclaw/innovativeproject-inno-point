import React, { Fragment } from "react";
import { Element, Tag, Panel, Picture, iconStyle } from "./style";
import { AccountCircle } from "@material-ui/icons";

import { Link } from "react-router-dom";

export default ({ team, users, project, index }) => {
  const leader = users.find(user => user.id === team.leader_id);
  return (
    <Link to={`/dashboard/teams/${team.id}`}>
      <Element key={index} delay={index}>
        <div className="Picture">
          {/* {leader ? (
            leader.github_picture ? (
              <Picture src={leader.github_picture} />
            ) : (
              <AccountCircle style={iconStyle} />
            )
          ) : ( */}
          {/* <AccountCircle style={iconStyle} /> */}
          {/* )} */}
        </div>
        <div className="Main">
          <div className="Title">
            {leader.github_picture ? (
              <Picture src={leader.github_picture} />
            ) : (
              <AccountCircle style={iconStyle} />
            )}
            <span>{leader ? `${leader.name}'s Team` : "Unknow Team"}</span>
          </div>
          <div className="Members">
            <span>{users.length}</span>
            <img src="/icons/member.svg" />
          </div>
          <div className="Project">
            {project ? (
              <Fragment>
                Project: <b style={{ color: "#00336e" }}>{project.name}</b>
              </Fragment>
            ) : (
              "No project chosen"
            )}
          </div>
          <div className="Status">
            Status:
            <b style={{ color: "#00336e" }}> {team.open ? "Open" : "Close"}</b>
          </div>
        </div>
      </Element>
    </Link>
  );
};
