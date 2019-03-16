import styled, { keyframes } from "styled-components";

const show = keyframes`
  from {
    transform: translateY(30px) scale(0.8);
    opacity: 0.4;
  }
`;

export const Container = styled.div`
  height: auto;
  display: grid;
  grid-template:
    "panel main"
    / 150px auto;
  border-radius: 8px;
  box-shadow: 0px 0px 150px rgba(0, 0, 0, 0.25);
  border: 1px solid hsl(0, 0%, 85%);
  transition: all 0.1s ease-in-out;
  margin: 50px;
  animation: ${show} 0.3s;

  div.Main {
    display: grid;
    grid-template: "name" 60px "desc";
    grid-gap: 20px;
    padding: 20px;
    padding-bottom: 60px;

    div.Name {
      letter-spacing: 3px;
      border-bottom: solid 1px hsl(0, 0%, 90%);
      font-size: 45px;
    }

    div.Desc {
      color: gray;
      padding-right: 30%;
      font-size: 20px;
    }

    a {
      justify-self: end;
      text-decoration: none;
      color: black;
    }

    div.Stack {
    }
  }

  div.Panel {
    height: 100%;
    width: 150px;
    background: var(--gradientTop1);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
`;
