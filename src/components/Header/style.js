import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 5px;
  align-self: center;
  line-height: 40px;
  border-left: ${props =>
    props.to === props.pathname ? "1px solid white" : "1px solid transparent"};

  span {
    display: inline-block;
    font-size: 16px;
    text-align: center;
    transition: all 0.2s ease-in-out;
  }

  img {
    width: 27px;
    margin-bottom: -5px;
    margin-right: 10px;
    margin-left: 10px;
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
  grid-template-rows: 60px 1px repeat(2, 50px) auto 50px;
  grid-gap: 5px;
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
