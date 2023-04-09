import styled from "styled-components";

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border: 2px solid black;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;

  & p {
    font-size: 1.5rem;
  }
`;

export default Popup;
