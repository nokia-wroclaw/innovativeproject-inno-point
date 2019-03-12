import styled, { keyframes } from "styled-components";

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
  box-shadow: 0px 0px 150px rgba(0, 0, 0, 0.25);
  animation: ${show} 0.3s;
  transition: all 0.1s ease-in-out;

  :hover {
    box-shadow: 0px 0px 150px rgba(0, 0, 0, 0.3);
  }

  :active {
    transform: scale(1.02);
  }

  div.Panel {
    height: 100%;
    width: 100px;
    background: var(--gradientTop1);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  div.Info {
    display: grid;
    grid-template: "name members" 30px "desc ." auto "tags tags" 40px / 5fr 1fr;
    grid-gap: 20px;
    padding: 7px;

    div.Name {
      grid-area: name;
      letter-spacing: 2px;
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
      margin-right: 5px;
      margin-top: 5px;
      padding: 0px 5px;
      align-items: center;
      justify-self: end;
      border: 1px solid hsl(0, 0%, 80%);
      border-radius: 8px;

      > span {
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

export const Tag = styled.span`
  padding: 5px 7px;
  margin: 0 5px;
  font-size: 15px;
  font-weight: 500;
  border-radius: 8px;
  color: gray;
  background-color: hsl(0, 0%, 95%);
`;
