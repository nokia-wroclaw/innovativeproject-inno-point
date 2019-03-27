import styled, { keyframes } from "styled-components";
import Color from "color";

const show = keyframes`
  from {
    transform: translateY(30px) scale(0.8);
    opacity: 0.4;
  }
`;

export const Element = styled.div`
  min-height: 150px;
  height: 100%;
  display: grid;
  grid-template: "photo main" / 130px auto;
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
    grid-template: "title" 30px "project" 30px "members" 30px;
    padding: 10px;
    grid-gap: 10px;

    div.Title {
      letter-spacing: 1px;
      font-size: 16px;
      border-bottom: solid 2px hsl(0, 0%, 80%);
    }
    div.Name {
      grid-area: name;
      letter-spacing: 1px;
      font-size: 24px;
    }

    div.Project {
      font-family: Arial, Helvetica, sans-serif;
      color: hsl(0, 0%, 60%);
    }

    div.Members {
      display: flex;
      font-family: Arial, Helvetica, sans-serif;
      color: hsl(0, 0%, 60%);

      > span {
        border-radius: 8px;
        margin-left: 5px;
        color: #00336e;
        width: 20px;
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
  width: 80px;
  opacity: 0.9;
  border-radius: 50px;
`;

export const iconStyle = {
  width: "80px",
  height: "80px",
  fill: "rgba(255, 255, 255, 0.7)"
};
