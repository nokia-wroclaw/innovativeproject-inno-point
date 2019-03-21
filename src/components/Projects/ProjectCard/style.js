import styled, { keyframes } from "styled-components";
import Color from "color";

const show = keyframes`
  from {
    transform: translateY(30px) scale(0.8);
    opacity: 0.4;
  }
`;

export const Element = styled.div`
  height: 100%;
  display: grid;
  grid-template: "panel info" / 100px auto;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.1);
  animation: ${show} 0.3s;
  transition: all 0.1s ease-in-out;
  background-color: white;

  :hover {
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.2);
  }

  :active {
    transform: scale(1.02);
  }

  div.Info {
    display: grid;
    grid-template: "name members" 30px "desc ." auto "tags tags" 40px / 5fr 1fr;
    grid-gap: 10px;
    padding: 15px;

    div.Name {
      grid-area: name;
      letter-spacing: 1px;
      font-size: 24px;
    }

    div.Desc {
      grid-area: desc;
      font-family: Arial, Helvetica, sans-serif;
      color: hsl(0, 0%, 60%);
    }

    div.Tags {
      grid-area: tags;
      align-self: center;
    }

    div.Members {
      grid-area: members;
      display: flex;
      fill: gray;
      padding: 0px 5px;
      align-items: center;
      justify-self: end;
      border: 1px solid hsl(0, 0%, 90%);
      border-radius: 8px;

      > span {
        width: 20px;
        color: gray;
        margin-top: 1px;
        margin-right: 3px;
        margin-left: 3px;
      }

      > img {
        width: 18px;
      }
    }
  }
`;

export const Panel = styled.div`
  height: 100%;
  width: 100px;
  background: ${({ theme_color }) =>
    theme_color
      ? `linear-gradient(to left, ${theme_color}, ${Color(theme_color).darken(
          0.2
        )})`
      : "var(--gradientLeft1)"};
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const Tag = styled.span`
  padding: 5px 7px;
  margin: 0 5px;
  font-size: 15px;
  font-weight: 500;
  border-radius: 8px;
  color: gray;
  background-color: hsl(0, 0%, 95%);
`;
