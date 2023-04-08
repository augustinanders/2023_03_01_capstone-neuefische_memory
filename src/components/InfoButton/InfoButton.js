import styled from "styled-components";

const StyledButton = styled.span`
  border: 2px solid black;
  padding: 7px;
  width: 35vw;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoButton = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default InfoButton;
