

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha"; // Import reCAPTCHA
import Section from "../components/Section";
import InputField from "../components/InputFeild";
import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../api/apiClient";

const Contact = () => {
  const [captchaValue, setCaptchaValue] = useState(null);

  


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const mutation = useMutation({
    mutationFn: (data) =>
      apiClient({
        url: "https://college-backend-tyea.onrender.com/api/contact",
        method: "POST",
        data: data,
      }),
    onSuccess: ({message}) => {
      alert(message)
      reset()
    },
    onError: ({message}) => {
      alert(message);
    },
  });
  const onSubmit = (data) => {
    mutation.mutate(data)
    console.log(data);
  };

  const inputFields = [
    { label: "Name", type: "text", name: "name", placeholder: "Name*" },
    { label: "Email", type: "email", name: "email", placeholder: "Email*" },
    {
      label: "Message",
      type: "textarea",
      name: "message",
      placeholder: "Message*",
    },
  ];

  return (
    <Section>
      <section className="flex flex-col lg:flex-row justify-between items-center md:py-12 p-2 bg-gradient-to-br from-color-1 to-color-2">
        {/* Form Section */}
        <div className="w-full lg:w-1/2 md:px-8 px-1">
          <h2 className="text-5xl font-bold text-white mb-8">Get In Touch</h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white shadow-lg rounded-lg p-3 md:p-8 flex flex-col gap-4"
          >
            {inputFields?.map((field, index) => (
              <InputField
                key={index}
                label={field.label}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                register={register}
                errors={errors}
              />
            ))}
            {/* Google reCAPTCHA */}
            <div className="w-full flex justify-center mt-4">
  <ReCAPTCHA
    sitekey="6Lepu9IqAAAAAIjax5Rp3atYsVknAPxuoSN7aT8y"
    onChange={(value) => setCaptchaValue(value)}
  />
</div>

            <button
              type="submit"
              className={`w-full bg-color-1 text-white p-4 rounded-lg transition duration-300 ${
                captchaValue
                  ? "hover:bg-color-1/90"
                  : "opacity-50 cursor-not-allowed"
              }`}
              disabled={!captchaValue}
            >
              {mutation.isPending ? "Loading..." :"Submit"}
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="w-full mt-10 lg:mt-8">
  <div className="relative w-full pb-[100%] md:pb-[70%] lg:pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d695.7194925553432!2d72.95018687935944!3d19.207093279410234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b900d0000001%3A0xc566cbb84c4ef059!2sGyanodaya%20B.Ed%20%26%20D.Ed%20College!5e1!3m2!1sen!2sin!4v1727949120642!5m2!1sen!2sin"
      className="absolute top-0 left-0 w-full h-full border-0"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>

      </section>
    </Section>
  );
};

export default Contact;
