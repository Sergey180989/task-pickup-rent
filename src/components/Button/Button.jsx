import React from "react";
import "./Button.css"; // Імпорт CSS-файлу для стилізації

export const Button = ({ text, style, color, onClick }) => {
  return (
    <button className="custom-button" style={style} onClick={onClick}>
      <p className="button-text" style={{ color }}>
        {text}
      </p>
    </button>
  );
};