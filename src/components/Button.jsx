import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: 5px 10px;
  text-transform: capitalize;
  font-size: 1.1rem;
  background: transparent;
  border: solid 2px var(--secondColor);
  color: var(--secondColor);

  border-color: ${props => (props.cart ? "var(--mainColorLight)" : "var(--secondColor)")};
  color: ${props => (props.cart ? "var(--secondColor)" : "var(--secondColor)")};
  background: ${props => (props.cart ? "var(--mainColorLight)" : "transparent")};

  border-radius: 0.5rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: ${props => (props.cart ? "var(--mainColorDark)" : "var(--mainColorLight)")};
    /* background: var(--secondColor); */
    color: var(--secondColor);
  }
  &:focus {
    outline: none;
  }
`;
