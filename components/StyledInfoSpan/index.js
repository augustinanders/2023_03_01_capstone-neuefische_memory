import styled from "styled-components";

const StyledInfoSpan = styled.span`
  border: 2px solid black;
  padding: 7px;
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.active ? "orange" : "transparent")};
  white-space: nowrap;
  overflow: hidden;
`;

export default StyledInfoSpan;
