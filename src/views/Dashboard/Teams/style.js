import styled, { keyframes } from "styled-components";
import { Spinner } from "../../../components";

export const StyledSpinner = styled(Spinner)`
  margin-left: auto;
  margin-right: auto;
  margin-top: calc(50vh - 50px);
`;

const show = keyframes`
  from {
    transform: translateY(30px) scale(0.8);
    opacity: 0.4;
  }
`;

export const MainContainer = styled.div`
  display: grid;
`;

export const CompanyProjects = styled.div``;

export const Container = styled.div`
  display: grid;
  width: calc(100px + 3 * 450px);

  ${props => {
    switch (props.typeOfList) {
      case "block":
        return `grid-template-columns: repeat(3, 450px); 
                grid-gap: 50px;`;
      case "list":
        return `grid-gap: 30px;`;
    }
  }}
  margin: 50px auto;

  > a {
    text-decoration: none;
    color: black;
  }
`;

export const TopBar = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;

  > div.Searchbar {
    margin-top: 50px;
    margin-right: 60px;
    display: flex;
    align-items: center;
    width: 250px;
    height: 25px;
    background-color: rgba(255, 255, 255, 70%);
    border-radius: 50px;
    padding: 8px 15px;
    justify-self: end;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
    transition: all 0.1s ease-in-out;

    @media (max-width: 500px) {
      width: 150px;
    }

    > input {
      width: 250px;
      transition: all 0.1s ease-in-out;
    }
  }

  > div.Label {
    align-items: center;
    margin-top: 50px;
    margin-left: 60px;
    font-size: 20px;
    padding: 5px 15px;
    border-radius: 8px;
    color: gray;
    background: white;
  }
`;
export const FormContainer = styled.div`
  position: fixed;
  top: 150px;
  left: calc(50vw - 475px);
`;

export const tooltipStyle = {
  position: "fixed",
  right: "3%",
  bottom: "5%",
  transition: "all 0.2s ease-in-out"
};

export const fabAddStyle = {
  background: "var(--gradientLeft1)",
  transition: "all 0.2s ease-in-out"
};

export const iconAddStyle = {
  fill: "white",
  transition: "all 0.2s ease-in-out"
};

export const fabBackStyle = {
  background: "var(--gradientLeft2)",
  transition: "all 0.2s ease-in-out"
};

export const iconBackStyle = {
  fill: "white",
  transform: "rotate(45deg)",
  transition: "all 0.2s ease-in-out"
};

export const typeOfListStyle = {
  width: "170px",
  right: "7%",
  bottom: "5%",
  position: "fixed",
  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.25)",
  borderRadius: "8px",
  fontSize: "5px"
};
