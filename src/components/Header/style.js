import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  border-left: ${props =>
    props.to === props.pathname ? "1px solid white" : "1px solid transparent"};
  background: ${props =>
    props.to === props.pathname
      ? "linear-gradient(to right, rgba(255, 255, 255, 5%), rgba(255, 255, 255, 3%))"
      : "none"};

  display: flex;
  align-items: center;

  span {
    @import url("https://fonts.googleapis.com/css?family=Lato");
    font-family: "Lato", sans-serif;
    display: inline-block;
    margin: 5px;
    font-size: 14px;
    text-align: center;
    transition: all 0.2s ease-in-out;
  }

  img {
    margin: 5px;
    width: 20px;
    transition: all 0.2s ease-in-out;
  }

  :hover > span {
    transform: translateX(5px);
  }

  transition: all 0.3s ease-in-out;
`;

export const Container = styled.header`
  position: fixed;
  width: 100px;
  grid-area: header;
  height: 100vh;
  display: grid;
  grid-template-rows: 40px repeat(3, 35px) auto repeat(2, 35px);
  background: var(--gradientHeader);
  box-shadow: 0px 0px 150px rgba(0, 0, 0, 0.25);

  img.Title {
    margin: 10px;
    width: 100px;
  }

  div.Top {
    background-color: rgba(0, 0, 0, 25%);
    color: white;
    display: flex;
    justify-content: center;

    img {
      width: 30px;
    }
  }

  div.Border {
    background-color: white;
  }
`;
