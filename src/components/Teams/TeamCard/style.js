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
  min-height: 192px;
  display: grid;
  grid-template: "photo main" / 100px auto;
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

  div.Picture {
    display: grid;
    align-items: center;
    justify-items: center;
    background: var(--gradientTop1);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  div.Main {
    display: grid;
    grid-template: "title members" 30px "project project" 30px "status status" 30px;
    padding: 10px;
    grid-gap: 10px;
    align-items: center;

    div.Title {
      grid-area: title;
      display: flex;
      align-items: center;
      letter-spacing: 1px;
      font-size: 20px;

      > span {
        margin-left: 10px;
      }
    }
    div.Name {
      grid-area: name;
      letter-spacing: 1px;
      font-size: 24px;
    }

    div.Project {
      grid-area: project;
      font-family: Arial, Helvetica, sans-serif;
      color: hsl(0, 0%, 60%);
    }

    div.Members {
      grid-area: members;
      height: 30px;
      display: flex;
      fill: gray;
      padding: 0px 5px;
      align-items: center;
      justify-self: end;
      border: 1px solid hsl(0, 0%, 90%);
      border-radius: 8px;

      @media (max-width: 700px) {
        justify-self: start;
        height: 30px;
      }

      @media (max-width: 460px) {
        display: none;
      }

      > span {
        width: 20px;
        color: gray;

        @media (max-width: 460px) {
          width: 10px;
        }
      }

      > img {
        width: 18px;

        @media (max-width: 460px) {
          width: 9px;
        }
      }
    }

    > div.Status {
      color: hsl(0, 0%, 60%);
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
      : "hsl(0, 0%, 50%)"};
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

export const Picture = styled.img`
  width: 35px;
  opacity: 0.9;
  border-radius: 50px;
`;

export const iconStyle = {
  width: "35px",
  height: "35px",
  fill: "gray"
};
