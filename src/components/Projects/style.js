import styled, { keyframes } from "styled-components";

const show = keyframes`
  from {
    transform: translateY(30px) scale(0.8);
    opacity: 0.4;
  }
`;

export const MainContainer = styled.div`
  display: grid;
  grid-gap: 100px;
`;

export const CompanyProjects = styled.div``;

export const Container = styled.div`
  display: grid;
  width: calc(100px + 3 * 450px);
  grid-template-columns: repeat(3, 450px);
  grid-template-rows: repeat(2, 250px);
  grid-gap: 50px;
  margin-left: auto;
  margin-right: auto;

  > a {
    text-decoration: none;
    color: black;
  }
`;

export const Company = styled.div`
  width: calc(100% - 100px);
  font-size: 24px;
  text-align: start;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 50px;
  margin-right: 50px;
  border-bottom: 2px solid hsl(0, 0%, 90%);

  > img {
    width: 150px;
  }
`;

export const Element = styled.div`
  height: 100%;
  display: grid;
  grid-template: "panel info";
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
    grid-template: "name name" 30px "desc desc" auto "tags members" 30px / 7fr 1fr;
    grid-gap: 5px;
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
    }

    div.Members {
      grid-area: members;
      fill: gray;
      justify-self: end;
      padding-right: 5px;

      > span {
        color: gray;
        margin-top: auto;
        margin-bottom: auto;
      }

      > img {
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
  color: #004691;
  background-color: hsl(0, 0%, 90%);
`;
