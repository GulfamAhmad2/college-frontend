import React from "react";
import Breadcrumb from "./Breadcrumb";
// import img from "../assets/image/2.webp";
import img from "../assets/image/hero_img.jpg";

const Hero = ({ className, children, text }) => {
  return (
    // <div
    //   className="  bg-cover bg-center text-color-4"
    //   style={{ backgroundImage: `url(${img})` }}
    // >
    //   <div className=" py-[110px] flex flex-col items-center justify-center  bg-color-1 bg-opacity-50">
    //     <h3 className="text-[2.1rem] font-bold">{children}</h3>
    //     <p className="text-color-4 text-xl font-normal tracking-tight pt-1">{text}</p>
    //     <Breadcrumb />
    //   </div>
    // </div>
    <div
      className="bg-cover bg-center text-color-4"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="py-[55px] flex flex-col items-center justify-center bg-color-1 bg-opacity-50 px-4 sm:px-6 md:px-8">
        <h3 className="text-[1.4rem] font-bold text-center sm:text-3xl md:text-4xl">
          {children}
        </h3>
        <p className="text-color-4 text-xl font-normal tracking-tight pt-1 text-center sm:text-lg md:text-xl">
          {text}
        </p>
        <Breadcrumb />
      </div>
    </div>
  );
};

export default Hero;
