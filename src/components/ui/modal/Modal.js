import ReactDOM from "react-dom";

const Modal = ({ children, isOpen }) => {
  const modalRoot = document.getElementById("overlays");

  return ReactDOM.createPortal(<>{isOpen && children}</>, modalRoot);
};

export default Modal;
