import styled from "styled-components";

export const StyledInput = styled.input`
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
  background-color: transparent;
  border: none;
  border-bottom: 1px solid hsl(0, 0%, 80%);
  padding-left: 10px;
  font-size: 17px;
  transition: border-bottom 0.2s ease-in-out;
  cursor: text;
  outline: none;

  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

  :hover {
    border-bottom: 1px solid #4286f4;
  }

  :active {
    outline: none;
  }
  ::placeholder {
    color: hsl(0, 0%, 80%);
  }
`;
