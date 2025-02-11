import React from "react";
import Title from "./Title";


const Msg = ({title, name, text, img}) => {
  return (
    <div>
      <Title className="my-[30px]">{title}</Title>
      <div className="flex gap-7">
        <img src={img} alt="director_img" className="w-[200px] h-[200px]" width={200} height={200} />
        <div>
          <Title className="font-medium italic text-xl">{name}</Title>
          <p className="text-color-13 text-justify">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Msg;
