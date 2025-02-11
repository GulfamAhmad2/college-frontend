import React from "react";
import Section from "../components/Section";
import Hero from "../components/Hero";
import { gallery } from "../constant";
import { useState } from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState("");
  


  const openLightbox = (img) => {
    setPhotoIndex(img);
    setIsOpen(true);
  };
  return (
    // <Section>
    //   <Hero text="Empowering future through quality education." >Our Gallery</Hero>
    //   <div className="flex flex-wrap gap-3 justify-between p-5 bg-color-4 mt-[30px]">
    //         {gallery.map(({ img, id }) => (
    //           <div className="w-[270px] overflow-hidden" key={id}>
    //             <img src={img} alt="img"  className="object-cover w-full h-full rounded-md"/>
    //           </div>
    //         ))}
    //       </div>
    // </Section>

    <Section className="">
    <Hero text="Empowering future through quality education." >Our Gallery</Hero>
    <div className="mt-[30px]">
    
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {gallery.map((image, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openLightbox(image)}
          >
            <img
              src={image.img}
              alt={image.alt}
              className="object-cover w-full h-64 transition-transform duration-500 ease-in-out hover:scale-110"
            />
           
          </motion.div>
        ))}
      </div>
    </div>
      

        {/* <div className="fixed top-[50%] left-[50%] mx-auto w-[500px] h-[500px]">
          <img src={photoIndex.img} />
        </div> */}
    </Section>
  );
};

export default Gallery;
