import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Otp_verify from "../../components/Otp_verify";
import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../../api/apiClient";
import { FormData } from "../../main";
const RegistrationVerify = () => {
  const navigate = useNavigate
  const { formData, setFormData } = useContext(FormData);
  console.log(formData?.email)
  const [otpError, setOtpError] = useState("");
  const [showCard, setShowCard] = useState(false);
 
  const mutation = useMutation({
    mutationFn: (data) =>
      apiClient({
        url: "http://localhost:5000/api/users/verify",
        method: "POST",
        data: data,
      }),
    onSuccess: (data) => {
      setShowCard(true);
    },
    onError: ({ response }) => {
      alert(response.data.message || "Registration failed");
    },
  });
 
  function getOpt(otp) {
    if (otp.length < 6) {
      setOtpError("Please enter a 6-digit OTP");
      return;
    }
    setOtpError("");
    mutation.mutate({ email:formData?.email, otp });
  }

  return (
    <>
      <div>
        {showCard === false ? (
          <Otp_verify getOpt={getOpt} otpError={otpError} />
        ) : (
          <RegistrationSuccess setShowCard={setShowCard} />
        )}
      </div>
    </>
  );
};
export const RegistrationSuccess = ({ setShowCard }) => {
  const navigate = useNavigate();
  function handleBtn() {
    navigate("/");
    setShowCard(false);
  }
  return (
    <div>
      <div className="relative w-[300px] flex flex-col items-center mt-4 justify-center mx-auto bg-white p-6 rounded-[6px]">
        <h2 className="text-[1.2rem] mb-8 mt-5">Register Successfull</h2>
        <p className="text-color-9 text-base font-normal text-justify">
          Thank you for signing up! Your registration is under review. You will
          receive a confirmation once your account is approved.
        </p>
        <button
          onClick={handleBtn}
          className="mt-3 bg-[#0c21c1] rounded-[24px] text-white text-[1rem] font-medium text-center py-[10px] active:scale-95 duration-300 w-full"
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default RegistrationVerify;
