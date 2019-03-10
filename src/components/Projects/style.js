import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(3, 300px);
  grid-gap: 20px;
  margin-top: 20px;
`;

export const Element = styled.div`
  display: grid;
  grid-template: "panel info";
  border-radius: 8px;
  box-shadow: 0px 0px 150px rgba(0, 0, 0, 0.25);

  div.Panel {
    height: 100%;
    width: 150px;
    background: var(--gradientHeader);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  div.Info {
    padding: 5px;
  }
`;
