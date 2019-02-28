import styled, { keyframes } from "styled-components";

const animationFrames1 = keyframes`
  0% {
    transform: translateY(0px);
  }

  5% {
    transform: translateY(-150px);
    filter: brightness(1.2);
  }

  40% {
    transform: translateY(-150px);
  }

  50% {
    transform: translateY(0px);
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  justify-items: center;
  align-items: center;

  background: url("photos/bcg5.png");
  background-size: 100% 100%;
  background-color: hsl(0, 0%, 90%);
`;

export const Img = styled.img`
  position: absolute;
  bottom: -100px;
  left: calc(
    ${({ index }) => {
        return (100 / 3) * (index % 3) + "%";
      }} + 150px
  );
  width: 200px;

  animation: ${animationFrames1} linear 20s infinite
    calc(${props => props.index / 2}s + ${props => (props.index < 3 ? 0 : 10)}s);
`;
