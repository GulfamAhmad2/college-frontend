import React, { useEffect } from "react";
import Section from "../components/Section";
import Slider from "react-slick";
import hero_1 from "../assets/image/hero_1.jpg";
import school from "../assets/image/school.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "../components/Title";
import Button from "../components/Button";
import { courseDetails, notices, eventData, gallery } from "../constant";
import Card from "../components/Card";
import hero_img_1 from "../assets/image/2.webp";
import hero_img_2 from "../assets/image/8.webp";
import hero_img_3 from "../assets/image/3.webp";
import NoticeLink from "../components/NoticeLink";
import UpcomingEvent from "../components/UpcomingEvent";
import CardCom from "../components/CardCom";
import { Link } from "react-router-dom";
import Testimonial from "../components/Testimonial";
import UpcomingEvents from "../components/Event";
import { motion } from "framer-motion";
import axios from "axios";

const Home = () => {
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/users/check-auth",
          { withCredentials: true }
        );
        console.log(response);
      } catch (error) {
        console.error("Auto-login failed:", error);
      }
    };

    checkAuth();
  }, []);
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
  };

  const slides = [
    { img: hero_img_1 },
    { img: hero_img_2 },
    { img: hero_img_3 },
  ];
  return (
    <Section className="flex flex-col lg:flex-row gap-[30px]">
      {/* Left Section: Slider and Content */}
      <div className="max-w-[800px] w-full">
        <Slider {...settings}>
          {slides?.map((value, index) => (
            <Slide key={index} value={value} />
          ))}
        </Slider>
        {/* About Us Section */}
        <div className="mt-[30px] bg-color-4 p-5">
          <Title>About Us</Title>
          <p className="text-color-13 text-base font-normal leading-normal mt-4 pb-2 text-justify">
            Gyanodaya College is dedicated to nurturing intellectual and
            personal growth, providing students with an environment where they
            can thrive academically and socially...
            <Button link="/about" className="text-color-1">
              Know More
            </Button>
          </p>
        </div>

        {/* Upcoming Events Section */}
        <CardCom header="Up Coming Event" className="mt-[30px] min-h-[300px]">
          <UpcomingEvents />
        </CardCom>
      </div>

      {/* Right Section: Notices, Testimonials, Gallery */}
      <div className="flex-1">
        <CardCom header="Notice" className="min-h-[408px]">
          <div className="flex flex-col px-5">
            {notices.map((item, index) => (
              <Link
                className="capitalize border-b border-dashed border-b-color-8 text-base font-bold text-color-2 py-4"
                key={index}
                to={item.link}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </CardCom>

        {/* Testimonials Section */}
        <CardCom header="Testimonials" className="mt-[35px]">
          <Testimonial />
        </CardCom>
      </div>
    </Section>
  );
};

function Slide({ value }) {
  return (
    <div className="bg-color-4 p-[6px] w-full relative overflow-hidden">
      <img
        className="h-[396px] w-full object-cover"
        src={value?.img}
        alt="hero_img"
      />
      <div className="p-[20px] bg-black/60 absolute left-[6px] bottom-[6px] text-color-4">
        <h2 className="text-color-4 text-xl font-semibold">
          Welcome to our website
        </h2>
        <p className="text-color-6 text-[1rem] font-medium">paragraph</p>
      </div>
    </div>
  );
}
export default Home;
