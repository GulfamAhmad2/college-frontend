import React from "react";
import { useContext } from "react";
import { FormData } from "../../main";
import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../../api/apiClient";
import Otp_verify from "../../components/Otp_verify";
import { useNavigate } from "react-router-dom";

function Resetpassotpverify() {
  const navigate = useNavigate();
  const verifyOtp = useMutation({
    mutationFn: (data) =>
      apiClient({
        url: "https://college-backend-tyea.onrender.com/api/veifyOtp",
        method: "POST",
        data,
      }),
    onSuccess: (data) => {
      console.log(data);
      navigate("/reset-pass");
    },
    onError: (data) => {
      console.log(data)
      alert(data?.response?.data?.message || "OTP exprired or invalid ");
    },
  });
  function getOpt(otp) {
    if(otp.length < 6) return alert("Please enter a 6-digit OTP")
    verifyOtp.mutate({ otp });

  }
  return (
    <div>
      <Otp_verify getOpt={getOpt} verifyOtp={verifyOtp} />
    </div>
  );
}

export default Resetpassotpverify;
