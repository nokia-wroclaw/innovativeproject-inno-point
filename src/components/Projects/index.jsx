import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { Container, Element, Company } from "./style";
import projects from "./projects";
import { TopicForm } from "..";

const Projects = () =>
  projects.map((element, index) => (
    <Fragment>
      <Company>{element.company}</Company>
      <Container>
        {element.projects.map((project, inde) => (
          <Link to={`/dashboard/projects/${project.id}`}>
            <Element key={index}>
              <div className="Panel" />
              <div className="Info">
                <div className="Name">{project.name}</div>
                <div className="Desc">{project.description}</div>
                <div className="Number">Members: {project.numberOfMembers}</div>
              </div>
            </Element>
          </Link>
        ))}
      </Container>
    </Fragment>
  ));

export default Projects;

{
  /* <TopicForm />; */
}
