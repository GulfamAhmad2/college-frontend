import React from "react";
import { testimonials } from "../constant";
import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 500,
    autoplay: true,
    arrows: false
  };
  return (
    <div className="max-w-[340px] w-full">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className=" p-6">
            <p className=" text-color-13 text-base font-normal leading-snug my-1 text-justify italic">
              {testimonial.testimonialText}
              <span className="text-[#282a2c] font-bold italic">
                {" "}
                {testimonial.name}
              </span>
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
{
  /* <div className="testimonial-section py-12 bg-gray-100">
  <h2 className="text-4xl font-bold text-center mb-10 text-blue-700">Testimonials</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    
  </div>
</div> */
}
