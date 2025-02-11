import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../../components/inputFeild";
import { Outlet, useNavigate } from 'react-router-dom';
import Button from "../../components/Button";

const ForgotPass = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  function handleBackBtn(){
navigate('/login')
  }
  return (
    <>
      <div className="relative w-[300px] flex flex-col items-center mt-4 justify-center mx-auto bg-white p-6 rounded-[6px]">
        <h2 className="text-[1.2rem] mb-8 mt-5">Forgot Password!</h2>
        <button onClick={handleBackBtn} className="absolute top-3 left-4" >{"< "}Back</button>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full">
          <InputField
            type="email"
            name="email"
            label="Email"
            placeholder="example@gmail.com"
            register={register}
            errors={errors}
            className="p-2 flex items-center gap-[10px]  bg-transparent border-2 border-[#999999] rounded-[6px] w-full"
          />
          <Button type="submit" lable="Submit" btnClass="bg-[#0c21c1] rounded-[24px] text-white text-[1rem] font-medium text-center py-[10px] active:scale-95 duration-300 w-full"/>        </form>
      </div>
      <Outlet/>
    </>
  );
};

export default ForgotPass;
