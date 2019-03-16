import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;

  grid-template:
    "header" 70px
    "input" 70px
    "list"
    / 300px auto;

  /* grid-template-columns: 300px 100px auto 100px 100px; */
  /* grid-template-rows: 100px 100px auto; */

  background: url("photos/bcg-new.png");
  background-size: 100% 100%;
  background-color: white;

  div.Input {
    grid-area: input;
    padding: 10px;
  }

  div.Header {
    text-align: center;
    grid-area: header;
  }

  div.List {
    grid-area: list;
  }
`;
