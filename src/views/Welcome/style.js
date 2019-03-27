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
  background: url("photos/bcg-new.png");
  background-position: center;
  background-size: ${({ loading }) => (!loading ? "100% 100%" : "200% 200%")};
  background-color: hsl(0, 0%, 90%);
  transition: all 2s ease-in-out;

  @media (max-width: 1000px) {
    background: none;
  }
`;

export const Img = styled.img`
  position: absolute;
  bottom: -100px;
  left: calc(
    ${({ index }) => {
        return 25 + 25 * (index % 3) + "vw";
      }} - 100px
  );
  width: 200px;

  animation: ${animationFrames1} linear 20s infinite
    calc(${props => props.index / 2}s + ${props => (props.index < 3 ? 0 : 10)}s);

  @media (max-width: 1000px) {
    display: none;
  }
`;
