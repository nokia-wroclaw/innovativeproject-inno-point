import styled, { keyframes } from "styled-components";

const show = keyframes`
  from {
    transform: translateY(100px);
    opacity: .2;
  }
`;

export const Container = styled.div`
  width: 950px;
  height: 550px;
  display: grid;
  grid-template: "panel form" / 170px auto;
  box-shadow: 0px 0px 150px rgba(0, 0, 0, 0.25);
  border: 1px solid hsl(0, 0%, 85%);
  border-radius: 8px;
  background-color: white;
  animation: ${show} 0.5s;
  transition: all 0.2s ease-in-out;

  div.Panel {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    background: var(--gradientTop1);
  }

  div.FormContainer {
    margin: 20px;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template:
    "title title" 35px
    "name company" 50px
    "contact number" 50px
    "desc desc" 50px
    "chips chips" 55px
    ". button" auto
    ". ." 1px
    / 1fr 1fr;
  grid-gap: 20px;
  background-color: transparent;

  div.Title {
    width: 100%;
    border-bottom: 1px solid #e2e2e2;
    font-size: 24px;
    color: #164786;
    font-weight: 500;
  }
`;
