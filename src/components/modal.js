import reactDom from "react-dom";
import styled from "styled-components";

const modalRoot = document.getElementById("modal-root");

const SContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Modal = ({ children }) => {
  return reactDom.createPortal(<SContainer>{children}</SContainer>, modalRoot);
};
