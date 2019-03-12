import styled, { keyframes } from "styled-components";

const show = keyframes`
  from {
    transform: translateY(30px) scale(0.8);
    opacity: 0.4;
  }
`;

export const Container = styled.div`
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
`;
