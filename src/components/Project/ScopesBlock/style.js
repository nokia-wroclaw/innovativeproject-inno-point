import styled, { keyframes } from "styled-components";
import Color from "color";

const show = keyframes`
  from {
    transform: translateY(30px) scale(0.8);
    opacity: 0.4;
  }
`;

export const Container = styled.div`
  width: calc((100% - var(--projectMargin) - 10px) / 2);
  height: auto;
  display: grid;
  grid-template: "main";
  border-radius: 8px;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.1);
  background-color: white;
  transition: all 0.1s ease-in-out;
  margin-left: 10px;
  margin-top: var(--blockMargin);
  animation: ${show} 0.3s;

  div.Main {
    display: grid;
    grid-template: "name" 40px "desc" "button" auto;
    grid-gap: 5px;
    padding: 20px;

    div.Label {
      letter-spacing: 1px;
      border-bottom: solid 1px hsl(0, 0%, 90%);
      font-size: 25px;
    }

    div.Scope {
      margin: 5px;
      display: flex;

      > span.Index {
        height: 25px;
        padding-right: 5px;
        font-size: 25px;
        line-height: 25px;
        margin-right: 10px;
        border-right: 1px solid black;
        color: black;
      }
      > span.Title {
        color: gray;
        padding-top: 2px;
        font-size: 18px;
      }
    }
  }
`;

export const Panel = styled.div`
  height: 100%;
  background: ${({ theme_color }) =>
    theme_color
      ? `linear-gradient(to left, ${theme_color}, ${Color(theme_color).darken(
          0.2
        )})`
      : "var(--gradientLeft1)"};
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;
