import React from "react";

const CardCom = ({ header, children, className }) => {
  return (
    <div className={`bg-color-4 shadow-md ${className || ""}`}>
        <h3 className="bg-color-4 sticky top-0 border-b border-color-8 text-[#282a2c] text-xl font-bold p-5 capitalize z-4">{header}</h3>
      {children}
    </div>
  );
};

export default CardCom;
