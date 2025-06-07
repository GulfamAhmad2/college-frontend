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
import UpcomingEvents, { EventCard } from "../components/Event";
import { motion } from "framer-motion";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../api/apiClient";
import { useEventAbout } from "../../hooks/EventAboutProvider";

const Home = () => {
  const { events, abouts } = useEventAbout();
  const { data: slides } = useQuery({
    queryKey: ["slides"],
    queryFn: () =>
      apiClient({
        url: "https://college-backend-tyea.onrender.com/api/slide",
        method: "GET",
      }),

    onError: ({ response }) => alert(response.data.messsage),
  });
  const { data: notices } = useQuery({
    queryKey: ["notice"],
    queryFn: () =>
      apiClient({
        url: "https://college-backend-tyea.onrender.com/api/notice",
        method: "GET",
      }),
    onError: ({ response }) => alert(response.data.messsage),
  });

  // useEffect(() => {
  //   const checkAuth = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://college-backend-tyea.onrender.com/api/check-auth",
  //         { withCredentials: true }
  //       );
  //       console.log(response);
  //     } catch (error) {
  //       console.error("Auto-login failed:", error);
  //     }
  //   };

  //   checkAuth();
  // }, []);

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

  // const slides = [
  //   { img: hero_img_1 },
  //   { img: hero_img_2 },
  //   { img: hero_img_3 },
  // ];
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
        <CardCom header="About Us" className="mt-[30px] max-h-[550px]">
          <Abouts abouts={abouts} />
        </CardCom>

        {/* Upcoming Events Section */}
        <CardCom header="UpComing Event" className="mt-[30px] max-h-[550px] ">
          {/* <UpcomingEvents />/ */}
          <EventCard event={events?.events[0]} />
        </CardCom>
        
      </div>

      {/* Right Section: Notices, Testimonials, Gallery */}
      <div className="flex-1">
        <CardCom
          header="Notice"
          className="max-h-[408px] min-h-[408px] border overflow-y-auto z-0"
        >
          <div className="flex flex-col px-5 relative ">
            {notices?.map((item, index) => (
              <Link
                className="border-b last:border-none border-dashed border-b-gray-500 capitalize  hover:underline cursor-pointer  text-base font-normal text-color-2 py-4 relative max-w-[400px] truncate"
                key={index}
                to={item.link}
                target="_blank"
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

function Abouts({ abouts }) {
  return (
    <div className=" bg-color-4 p-5 ">
      <p className="text-color-13 text-base font-normal leading-normal text-justify">
        {abouts?.[0]?.content?.[0] + " "}
        <Button link="/about" className="text-color-1">
           Know More
        </Button>
      </p>
    </div>
  );
}

function Slide({ value }) {
  console.log(value, "value")
  return (
    <div className="bg-color-4 p-[6px] w-full relative overflow-hidden">
      <img
        className="h-[396px] w-full object-cover"
        src={`https://college-backend-tyea.onrender.com${value?.image}`}
        alt="hero_img"
      />
      <div className="p-[20px] bg-black/60 absolute left-[6px] bottom-[6px] text-color-4">
        <h2 className="text-white text-xl font-semibold">{value?.title}</h2>
        <p className="text-white/70 text-[1rem] font-medium">
          {value?.paragraph}
        </p>
      </div>
    </div>
  );
}
export default Home;
