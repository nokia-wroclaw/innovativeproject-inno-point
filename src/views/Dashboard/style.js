import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template: "header main";
  background-color: hsl(0, 0%, 100%);
`;

export const Header = styled.header`
  grid-area: header;
  height: 100vh;
  width: 120px;
  background: var(--gradientTop1);

  div.Title {
    font-size: 20px;
    padding: 5px;
    border-bottom: 1px solid white;
    font-weight: 500;
    font-family: "Montserrat", sans-serif;
    color: white;
  }
`;

export const Main = styled.main`
  grid-area: main;
`;
