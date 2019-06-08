import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const show = keyframes`
  from {
    transform: translateX(-100px);
    opacity: .8;
  }
`;

export const Container = styled.header`
  position: fixed;
  width: var(--headerWidth);
  grid-area: header;
  height: 100vh;
  display: grid;
  grid-template-rows: 40px repeat(4, 35px) auto repeat(2, 35px) 20px;
  background: var(--gradientHeader);
  box-shadow: 0px 0px 150px rgba(0, 0, 0, 0.25);
  animation: ${show} 0.5s;

  img.Title {
    margin: 10px;
  }

  div.Top {
    background-color: rgba(0, 0, 0, 25%);
    color: white;
    display: flex;
    justify-content: center;
  }

  div.Border {
    background-color: white;
  }

  @media (max-width: 700px) {
    width: 80px;
  }

  @media (max-width: 470px) {
    width: 60px;
  }
`;

export const StyledLink = styled(Link)`
  color: ${props =>
    props.to === props.pathname ? "white" : "hsl(0, 0%, 85%)"};
  text-decoration: none;
  padding: 0 10px;
  background-color: ${props =>
    props.to === props.pathname ? "rgba(255, 255, 255, 0.1)" : "transparent"};
  display: flex;
  align-items: center;

  @media (max-width: 700px) {
    > span {
      display: none;
    }
    justify-content: center;
  }

  span {
    @import url("https://fonts.googleapis.com/css?family=Lato");
    font-family: "Lato", sans-serif;
    display: inline-block;
    letter-spacing: 1px;
    margin: 5px;
    font-size: 12px;
    text-align: center;
    transition: all 0.05s ease-in-out;
  }
  :hover > span {
    color: white;
  }
  transition: all 0.1s ease-in-out;
`;

export const iconStyle = {
  margin: "7px",
  width: "18px",
  transition: "all 0.05s ease-in-out"
};
