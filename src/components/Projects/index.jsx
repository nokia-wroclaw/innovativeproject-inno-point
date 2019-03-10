import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Element,
  Company,
  CompanyProjects,
  Tag,
  MainContainer
} from "./style";
import projects from "./projects";
import { TopicForm } from "..";

const Projects = () => (
  <MainContainer>
    {projects.map((element, index) => (
      <CompanyProjects key={index}>
        <Company>
          <img src={`/photos/${element.company}.png`} />
        </Company>
        <Container>
          {element.projects.map((project, inde) => (
            <Link to={`/dashboard/projects/${project.id}`}>
              <Element key={index}>
                <div className="Panel" />
                <div className="Info">
                  <div className="Name">{project.name}</div>
                  <div className="Desc">{project.description}</div>
                  <div className="Tags">
                    {project.tags.map((tag, index) => (
                      <Tag key={index}>{tag}</Tag>
                    ))}
                  </div>
                  <div className="Members">
                    <img src="/icons/member.svg" />
                    <span>{project.numberOfMembers}</span>
                  </div>
                </div>
              </Element>
            </Link>
          ))}
        </Container>
      </CompanyProjects>
    ))}
  </MainContainer>
);

export default Projects;
