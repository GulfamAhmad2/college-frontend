import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Card = ({ img, title, text }) => {
  return (
    <Link className=" bg-color-4 w-[370px] overflow-hidden hover:shadow-custom border border-[#ddd] duration-300">
      <div>
        <img src={img} alt="img" />
      </div>
      <div>
        <div className="flex flex-col gap-[10px] p-[20px]">
          <h4 className="text-color-1 text-[20px] font-bold">{title}</h4>
          <p className="text-[#222222] text-[0.875rem] leading-[26px] line-clamp-4">
            {text}
          </p>
          <Button className="bg-color-1 text-color-4 text-center">{`know more >`}</Button>
        </div>
      </div>
    </Link>
  );
};

export default Card;
