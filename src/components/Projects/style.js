import styled, { keyframes } from "styled-components";

const show = keyframes`
  from {
    transform: translateY(30px) scale(0.8);
    opacity: 0.4;
  }
`;

export const Container = styled.div`
  display: grid;
  width: calc(100px + 3 * 450px);
  grid-template-columns: repeat(3, 450px);
  grid-template-rows: repeat(2, 250px);
  grid-gap: 50px;
  margin-left: auto;
  margin-right: auto;

  > a {
    text-decoration: none;
    color: black;
  }
`;

export const Company = styled.div`
  width: calc(100% - 100px);
  font-size: 24px;
  text-align: start;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 50px;
  margin-right: 50px;
  border-bottom: 2px solid hsl(0, 0%, 90%);
`;

export const Element = styled.div`
  height: 100%;
  display: grid;
  grid-template: "panel info";
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 0px 0px 150px rgba(0, 0, 0, 0.25);
  animation: ${show} 0.3s;
  transition: all 0.1s ease-in-out;

  :hover {
    box-shadow: 0px 0px 150px rgba(0, 0, 0, 0.4);
  }

  :active {
    transform: scale(1.02);
  }

  div.Panel {
    height: 100%;
    width: 100px;
    background: var(--gradientTop1);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  div.Info {
    display: grid;
    padding: 5px;

    div.Name {
      letter-spacing: 2px;
      font-size: 24px;
    }

    div.Desc {
      padding: 5px;
      color: hsl(0, 0%, 60%);
    }

    div.Number {
      justify-self: end;
      margin-right: 10px;
    }
  }
`;
