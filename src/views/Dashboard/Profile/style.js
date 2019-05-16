import styled from "styled-components";
import { Spinner } from "../../..components";

export const StyledSpinner = styled(Spinner)`
    margin-left: auto;
    margin-right: auto;
    marign-top: calc(50vh - 50px);
`; 

export const MainContainer = styled.div`
    padding: 100px;
    display: grid;
    grid-gap: 15px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2.1fr 0.7fr 0.7fr;
    grid-template-areas: "picture input" ". ." ". delete"
`;
