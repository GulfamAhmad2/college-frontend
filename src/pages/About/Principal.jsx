import React from "react";
import director_img from "../../assets/image/director_img.png";
import Section from "../../components/Section";
import Hero from "../../components/Hero";
import Msg from "../../components/Msg";

const Principal = () => {
  return (
    <Section>
      <Hero >Principal Message</Hero>
      <Msg
        title="Principal Message"
        name="Mr. cb here"
        img={director_img}
        text="A teacher’s job is most challenging and most rewarding profession. A teacher has to be a counselor, mentor, friend ,surrogate parent, disciplinarian, learning disabilities specialist, motivational speaker, cultural torch bearer and coach as well as a master of his/her subject matter. A teacher is asked to package his/her lessons in creative and dynamic ways to hold the attention of a large group as well as tailor his/her teaching to individual student with a myriad of different learning styles. We at Gyanodaya Mahavidhyalaya strive towards igniting minds and creating in students a passion For learning and continuous development by making the learning process enjoyable. We are determined to impart values, ethics and self confidence and harness students’ free potential besides increasing the professional development of the student teachers’ with a belief that the true goal of education is holistic development.
We at Gyanodaya Mahavidhyalaya help to incorporate analytical and evaluative skills as opposed to memorization by accepting and incorporating the recent ICT tools in education by creative ways. We at Gyanodaya Mahavidhyalaya provide interactive, participatory, innovative and creative learning experiences to learners by various methods and models of teaching .We at Gyanodaya Mahavidhyalaya are committed to provide a quality education to promote intellectual, social and cultural vivacity among its learners, so that our students can have a good position in the emerging knowledge society."
      />
    </Section>
  );
};

export default Principal;
