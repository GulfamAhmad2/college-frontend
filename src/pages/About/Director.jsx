import React from "react";
import Section from "../../components/Section";
import Hero from "../../components/Hero";
import Msg from "../../components/Msg";
import director_img from "../../assets/image/director_img.png";

const Director = () => {
  return (
    <Section className="">
      <Hero >Director Message</Hero>
      <Msg
        title="Director Message"
        name="Mr. Gulfam Ahmad"
        img={director_img}
        text="Just as the name of our institute translates “ The dawn of knowledge “ we have at Gyanodaya BSC-IT strive towards enhancing the future of the nation by providing quality education to prospective educators who are further responsible for moulding and shaping the mind of the future generation Our well equipped laboratories and stocked library are always available to our students along with the highly qualified and motivated faculty who are always keen to sharing their valuable knowledge /expertise and guidance. We here at Gyanodaya BSC-IT not only provide our students the best in education but encourage them to think out of the box and come out with innovative ideas to enhance our education system. Finally I would like to welcome you all to be a part of the Gyanodaya BSC-IT family and hope that you will help us in carrying on our mission of quality education for all. Let us all not forget “knowledge is power and education is the premise of progress in every society “"
      />
    </Section>
  );
};

export default Director;
