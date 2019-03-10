import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template: "header main" / 100px auto;
  grid-gap: 10px;
  background-color: hsl(0, 0%, 100%);
`;
