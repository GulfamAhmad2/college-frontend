import React from "react";

const CardCom = ({ header, children, className }) => {
  return (
    <div className={`bg-color-4  ${className|| ""}`}>
        <h3 className="border-b border-color-8 text-[#282a2c] text-xl font-bold p-5 capitalize">{header}</h3>
      {children}
    </div>
  );
};

export default CardCom;
