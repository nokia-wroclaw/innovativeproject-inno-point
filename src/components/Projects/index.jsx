import React from "react";
import { Container, Element } from "./style";
import { TopicForm } from "..";

const Projects = () => (
  <Container>
    {[
      {
        name: "Project1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum mi id risus sagittis pharetra. Integer condimentum lectus non nisi consequat convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed hendrerit justo sit amet ante tincidunt, vitae iaculis ligula pellentesque.",
        company: "Company1",
        numberOfMembers: 5
      },
      {
        name: "Project2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum mi id risus sagittis pharetra. Integer condimentum lectus non nisi consequat convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed hendrerit justo sit amet ante tincidunt, vitae iaculis ligula pellentesque.",
        company: "Company2",
        numberOfMembers: 3
      },
      {
        name: "Project3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum mi id risus sagittis pharetra. Integer condimentum lectus non nisi consequat convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed hendrerit justo sit amet ante tincidunt, vitae iaculis ligula pellentesque.",
        company: "Company3",
        numberOfMembers: 5
      },
      {
        name: "Project4",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum mi id risus sagittis pharetra. Integer condimentum lectus non nisi consequat convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed hendrerit justo sit amet ante tincidunt, vitae iaculis ligula pellentesque.",
        company: "Company4",
        numberOfMembers: 4
      },
      {
        name: "Project5",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum mi id risus sagittis pharetra. Integer condimentum lectus non nisi consequat convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed hendrerit justo sit amet ante tincidunt, vitae iaculis ligula pellentesque.",
        company: "Company5",
        numberOfMembers: 6
      }
    ].map((element, index) => (
      <Element key={index}>
        <div className="Panel" />
        <div className="Info">
          <div>{element.name}</div>
          <div>{element.description}</div>
          <div>{element.company}</div>
          <div>{element.numberOfMembers}</div>
        </div>
      </Element>
    ))}
  </Container>
);

export default Projects;

{
  /* <TopicForm />; */
}
