import React from "react";
import InputField from "../../components/InputFeild";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";

const ResetPass = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <div className="relative w-[350px] flex flex-col items-center mt-4 justify-center mx-auto bg-white p-6 rounded-[6px]">
      <h2 className="text-[1.2rem] mb-8 mt-5">Password Reset!</h2>
      <form className="w-full">
        <div className="flex flex-col gap-2 ">
        <InputField
          type="password"
          className={`p-2 flex items-center gap-[10px]  bg-transparent border-2 border-[#999999] rounded-[6px] w-full `}
          name="new-pass"
          label="New Password"
          register={register}
          errors={errors}
        />
        <InputField
          type="password"
          className={`p-2 flex items-center gap-[10px]  bg-transparent border-2 border-[#999999] rounded-[6px] w-full `}
          name="con-pass"
          label="Confirm Password"
          register={register}
          errors={errors}
        />
        </div>
        <Button type='submit' lable="Reset" 
          btnClass="bg-[#0c21c1] mt-[25px] rounded-[24px] text-white text-[1rem] font-medium text-center py-[10px] active:scale-95 duration-300 w-full"
          />
      </form>
    </div>
  );
};

export default ResetPass;
