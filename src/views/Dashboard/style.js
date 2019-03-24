import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  display: grid;
  grid-template: "header main" / var(--headerWidth) auto;
  background-color: hsl(0, 0%, 95%);
`;
