import styled from "styled-components";

const StyledButton = styled.span`
  border: 2px solid black;
  padding: 7px;
`;

const InfoButton = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default InfoButton;
