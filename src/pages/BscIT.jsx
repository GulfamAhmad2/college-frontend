import React from "react";
import Hero from "../components/Hero";
import Title from "../components/Title";
import { bscITCourseDetails, collegeDetails } from "../constant";
import Section from "../components/Section";

const BscIT = () => {
  return (
    <Section >
      <Hero text="Empowering future through quality education." >Courses</Hero>
      <div className=" pt-[30px] flex flex-col gap-[35px] ">
        {bscITCourseDetails.map((detail, index) => (
          <div key={index} className="flex flex-col gap-[10px]">
            <Title>{detail.title}</Title>
            {/* If the content is an array, map through it */}
            {Array.isArray(detail.content) ? (
              <ul className="pl-5">
                {detail.content.map((item, id) => (
                  <li
                    className="relative text-justify before:content-['🔹'] before:absolute before:-left-6 text-color-13"
                    key={id}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-color-13 text-justify">{detail.content}</p>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}

export default BscIT