import styled, { keyframes } from "styled-components";
import { Spinner } from "../../../components";

export const StyledSpinner = styled(Spinner)`
    position: static;
`;

const show = keyframes`
    from {
        transform: translateY(100px);
        opacity: .2;
    }
`;

export const Container = styled.div`
    width: 450px;
    height: 450px;
    display: grid;
    grid-template: "input" / 170px auto;
    box-shadow: 0px 0px 150px rgba(0,0,0,0.25);
    background-color: white;
    amination: ${show} 0.3s;
    transition: all 0.2s ease-in-out;

    div.Panel {
        background: var(--gradientTop1);
    }

    div.FormContainer {
        margin: 20px;
    }
`;

export const Form = styled.form`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template:
        "title"     35px
        "name"      55px
        "surname"   55px
        "email"     55px
        "button"    35px
        "."         1px
        / 3fr 2fr;
    grid-gap: 20px;
    background-color: transparent;

    div.Title {
        width: 100%;
        border-bottom: 1px solid #e2e2e2;
        font-size: 18px;
        color: #154786;
        font-weight: 400;
    }
`;