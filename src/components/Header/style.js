import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  border-left: ${props =>
    props.to === props.pathname ? "1px solid white" : "1px solid transparent"};
  background: ${props =>
    props.to === props.pathname
      ? "linear-gradient(to right, rgba(255, 255, 255, 10%), transparent)"
      : "none"};

  display: flex;
  align-items: center;

  span {
    display: inline-block;
    margin: 5px;
    text-align: center;
    transition: all 0.2s ease-in-out;
  }

  img {
    margin: 5px;
    width: 27px;
    transition: all 0.2s ease-in-out;
  }

  :hover > span {
    transform: translateX(5px);
  }

  :hover > img {
    transform: scale(1.1);
  }
  transition: all 0.3s ease-in-out;
`;

export const Container = styled.header`
  grid-area: header;
  height: 100vh;
  display: grid;
  grid-template-rows: 60px repeat(2, 50px) auto 50px;
  background: var(--gradientHeader);
  box-shadow: 0px 0px 150px rgba(0, 0, 0, 0.25);

  img.Title {
    margin: 10px;
    width: 100px;
  }

  div.Border {
    background-color: white;
  }
`;
