import React from "react";
import { Link } from "react-router-dom";

const Button = ({ className, btnClass, link, type, children, lable, disabled, onClick}) => {
  const LinkBtn = ()=>(
    <Link
      className={`text-sm font-semibold leading-[21px] rounded-[70px] capitalize inline-block ${
        className || ""
      }`}
      to={link}
    >
      {children}
    </Link>
  )
  const Buttons =()=>(
    <button onClick={onClick} className={btnClass} type={type} disabled={disabled}>{lable}</button>
  )
  
 return link ? <LinkBtn/> : <Buttons/>
};

export default Button;
