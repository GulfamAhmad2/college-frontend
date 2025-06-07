import React from "react";
import Hero from "../../components/Hero";
import Title from "../../components/Title";
import { collegeDetails } from "../../constant";
import Section from "../../components/Section";
import { useEventAbout } from "../../../hooks/EventAboutProvider";

const AboutUs = () => {
  const {abouts:collegeDetails} = useEventAbout();
  return (
    <Section >
      <Hero  >About Us</Hero>
      <div className=" pt-[30px] flex flex-col gap-[35px] ">
        {collegeDetails?.map((detail, index) => (
          <div key={index} className="flex flex-col gap-[10px]">
            <Title>{detail?.title}</Title>
            {/* If the content is an array, map through it */}
            {detail?.content?.length > 1  ? (
              <ul className="pl-5">
                {detail?.content?.map((item, index) => (
                  <li
                    className="relative text-justify before:content-['🔹'] before:absolute before:-left-6 text-color-13"
                    key={index}
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
  );
};

export default AboutUs;