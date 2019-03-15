import styled, { keyframes } from "styled-components";

const show = keyframes`
  from {
    transform: translateY(30px) scale(0.8);
    opacity: 0.4;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template: "panel table" / 150px auto;
  width: ${props => {
    switch (props.size) {
      case 3:
        return "33%";
      default:
        return "auto";
    }
  }};
  border-radius: 8px;
  box-shadow: 0px 0px 150px rgba(0, 0, 0, 0.25);
  transition: all 0.1s ease-in-out;
  margin: 50px;
  animation: ${show} 0.3s;

  > div.Panel {
    width: 150px;
    height: 100%;
    background: var(--gradientLeft1);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    text-align: center;
    font-size: 24px;
    color: white;
  }
`;
