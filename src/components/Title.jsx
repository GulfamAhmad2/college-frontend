import React from "react";

const Title = ({ children, className }) => {
  return (
    <div className="relative">
      <h3
        className={`text-color-1 font-bold text-2xl  capitalize  ${
          className || ""
        }`}
      >
        {children}
      </h3>
    </div>
  );
};

export default Title;
