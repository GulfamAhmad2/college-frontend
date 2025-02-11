import React, { useRef, useState } from "react";
import Button from "../components/Button";
import ResendOtpButton from "./ResendOtpButton";

const Otp_verify = ({ getOpt, otpError }) => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputsRef = useRef([]);
  const handleOpt = () => {
    getOpt(otp.join(""));
    console.log("Clickssss");
  };
  const handleChange = (value, index) => {
    // Validate the input (allow only numbers)
    if (!/^\d$/.test(value) && value !== "") return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to the next input if value is not empty
    if (value && index < otp.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      // Move to the previous input on Backspace
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    const pastedData = e.clipboardData.getData("text").slice(0, 6).split("");

    const newOtp = pastedData.map((char, i) =>
      /^\d$/.test(char) ? char : otp[i] || ""
    );
    setOtp(newOtp);
    const nextEmptyIndex = newOtp.findIndex((value) => value === "");
    if (nextEmptyIndex >= 0) {
      inputsRef.current[nextEmptyIndex]?.focus();
    }
  };

  return (
    <div className="relative w-[350px] flex flex-col items-center mt-4 justify-center mx-auto bg-white p-6 rounded-[6px]">
      <h2 className="text-[1.2rem] mb-8 mt-5">Otp-Verify</h2>
      <div></div>
      <div className="flex flex-col gap-8">
        <div>
          <div onPaste={handlePaste} className="flex gap-[10px]">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputsRef.current[index] = el)}
                className="w-[40px] h-[40px] text-center text-[1.125rem] border border-solid border-[#ccc] rounded-[4px]"
              />
            ))}
          </div>
          {otpError && <p className="mt-[10px]">{otpError}</p>}
        </div>

        <div>
          <button
            type="submit"
            onClick={() => handleOpt()}
            className="bg-[#0c21c1] rounded-[24px] text-white text-[1rem] font-medium text-center py-[10px] active:scale-95 duration-300 w-full"
          >
            Verify
          </button>
          <p className="text-center text-red-500" >Do not refresh</p>
          <div className="flex gap-2 mt-1 justify-end">
            <ResendOtpButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp_verify;
