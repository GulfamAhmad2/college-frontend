import React from "react";
import Hero from "../components/Hero";
import Title from "../components/Title";
// import { bscITCourseDetails, collegeDetails } from "../constant";
import Section from "../components/Section";
import { useMutation } from "@tanstack/react-query";
// import { apiClient } from "../../../dashboard/src/api/apiClient";
import { apiClient } from "../api/apiClient";
import { useEffect } from "react";
import { useState } from "react";


const BscIT = () => {
  const [courseDetails, setCourseDetails] = useState([])
  const getData = useMutation({
    mutationFn:()=> apiClient({
      url:"https://college-backend-tyea.onrender.com/api/course",
    }),
    onSuccess:(data)=>{
      setCourseDetails(data)
    },
    onError:(err)=>{
      console.log(err)
    }
  })

  useEffect(()=>{
    getData?.mutate();
  },[])
  return (
    <Section >
      <Hero >Courses</Hero>
      <div className=" pt-[30px] flex flex-col gap-[35px] ">
        {courseDetails?.map((detail, index) => (
          <div key={index} className="flex flex-col gap-[10px]">
            <Title>{detail?.title}</Title>
            {detail?.content?.length > 1 ? (
              <ul className="pl-5">
                {detail?.content?.map((item, id) => (
                  <li
                    className="relative text-justify before:content-['🔹'] before:absolute before:-left-6 text-color-13"
                    key={id}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-color-13 text-justify">{detail?.content}</p>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}

export default BscIT