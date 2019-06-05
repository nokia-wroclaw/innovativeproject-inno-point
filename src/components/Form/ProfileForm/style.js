import styled from "styled-components";
import { Spinner } from "../../../components";

export const Picture = styled.img`
  width: 50px;
  opacity: 0.9;
  border-radius: 50px;
`;

export const StyledSpinner = styled(Spinner)`
  margin-left: auto;
  margin-right: auto;
  margin-top: calc(50vh - 50px);
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  padding: 100px;
  margin-left: 10vw;
  display: grid;
  grid-gap: 15px;
  grid-template: "main main" "picture form" ". ."/ 1fr 1fr;

  div.Panel{
    width: 30vw;
    height: 40vh;
    justify-content: center;
  }
`;

export const iconStyle = {
    width: "35px",
    height: "35px",
    fill: "gray"
};

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template:
    "title title" 5px
    ". name" 35px
    ". surname" 35px
    ". email" 35px
    ". button" auto
    ". ." 1px
    / 1fr 3fr;
  grid-gap: 30px;
  background-color: transparent;
`;

export const Title = styled.div`
  width: 100%;
  border-bottom: 1px solid #e2e2e2;
  text-justify: center;
  font-size: 24px;
  color: #164786;
  font-weight: 500;
`;