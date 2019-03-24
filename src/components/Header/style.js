import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const show = keyframes`
  from {
    transform: translateX(-100px);
    opacity: .2;
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
  /* background-color: hsl(0, 0%, 15%); */
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

    /* img {
      width: 30px;
    } */
  }

  div.Border {
    background-color: white;
  }
`;

export const StyledLink = styled(Link)`
  color: ${props =>
    props.to === props.pathname ? "white" : "hsl(0, 0%, 70%)"};
  text-decoration: none;
  padding: 0 10px;
  /* border-left: ${props =>
    props.to === props.pathname
      ? "2px solid white"
      : "2px solid transparent"}; */
  background-color: ${props =>
    props.to === props.pathname ? "rgba(255, 255, 255, 0.1)" : "transparent"};
  display: flex;
  align-items: center;

  span {
    @import url("https://fonts.googleapis.com/css?family=Lato");
    font-family: "Lato", sans-serif;
    display: inline-block;
    margin: 5px;
    font-size: 13px;
    text-align: center;
    transition: all 0.05s ease-in-out;
  }
  /* :hover > span {
    transform: translateX(5px);
  } */
  transition: all 0.05s ease-in-out;
`;

export const iconStyle = {
  margin: "7px",
  width: "18px",
  transition: "all 0.05s ease-in-out"
};
