import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template: "header main" / 140px auto;
  background-color: hsl(0, 0%, 100%);
`;

export const StyledSwitch = styled.main`
  display: grid;
  grid-area: main;
  align-items: center;
  justify-items: center;
`;
