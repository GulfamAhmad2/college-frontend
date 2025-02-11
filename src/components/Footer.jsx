import React from "react";
import { TbSchool } from "react-icons/tb";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div>
        <Link className="text-[#050d2d] text-[1.5rem] uppercase font-bold flex items-center gap-2">
          <TbSchool style={{ width: "40px", height: "40px" }} /> gvm
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
