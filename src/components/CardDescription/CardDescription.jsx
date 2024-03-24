import React from "react";
import "./CardDescription.module.css";

export const CardDescription = ({ description, style, wrap }) => {
  return (
    <div className="card-description-wrapper" style={style}>
      <p className="card-description-text" style={wrap ? { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } : {}}>
        {description}
      </p>
    </div>
  );
};