import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import icons from "../../assets/Images/sprite.svg";
import "./CustomModal.css";

const modalRoot = document.querySelector("#modal-root");

const CustomModal = ({
  onClose,
  children,
  modalStyles,
  modalTabletStyles,
  modalDesktopStyles,
  modal320Styles,
}) => {
  const scrollY = window.scrollY;

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.top = `-${scrollY}px`;
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.position = "";
      window.scrollTo(0, scrollY);
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [onClose, scrollY]);

  return (
    <>
      {modalRoot &&
        ReactDOM.createPortal(
          <div className="backdrop" onClick={handleBackdropClick}>
            <div
              className="modal"
              style={{
                ...modalStyles,
                ...(modalTabletStyles && `@media screen and (min-width: 768px) { ${modalTabletStyles} }`),
                ...(modalDesktopStyles && `@media screen and (min-width: 1440px) { ${modalDesktopStyles} }`),
              }}
            >
              <button className="close-btn" type="button" onClick={onClose}>
                <svg width="32" height="32" stroke="white">
                  <use href={icons + "#close"} />
                </svg>
              </button>
              {children}
            </div>
          </div>,
          modalRoot
        )}
    </>
  );
};

export default CustomModal;