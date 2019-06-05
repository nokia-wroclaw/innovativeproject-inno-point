import styled from "styled-components";
import { Spinner } from "../../../components";

export const Picture = styled.img`
  width: 35px;
  opacity: 0.9;
  border-radius: 50px;
`;

export const StyledSpinner = styled(Spinner)`
  margin-left: auto;
  margin-right: auto;
  margin-top: calc(50vh - 50px);
`;

export const MainContainer = styled.div`
  padding: 100px;
  display: grid;
  grid-gap: 15px;
  grid-template: "main main" "goals scopes" "techno tags" "verify delete" / 1fr 1fr;
`;

export const iconStyle = {
    width: "35px",
    height: "35px",
    fill: "gray"
  };