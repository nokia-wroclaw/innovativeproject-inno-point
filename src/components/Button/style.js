import styled from "styled-components";

export const StyledButton = styled.button`
  grid-area: ${props => props.gridArea};
  width: ${props => {
    switch (props.size) {
      case "small":
        return "200px";
      case "large":
        return "300px";
      case "big":
        return "400px";
      default:
        return "300px";
    }
  }};
  height: 30px;
  background: linear-gradient(to left, #4a30a9, #39267d);
  align-self: ${props => props.alignSelf};
  border-radius: 8px;
  color: white;
  font-size: 16px;
  letter-spacing: 2px;
  cursor: pointer;
  transition: filter 0.1s ease-in-out;

  :hover {
    filter: brightness(1.1);
  }

  :active {
    filter: brightness(1.2);
    transform: scale(1.02);
  }
`;