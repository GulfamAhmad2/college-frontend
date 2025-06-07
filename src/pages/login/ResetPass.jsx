import React, { useContext } from "react";
import InputField from "../../components/InputFeild";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../../api/apiClient";
import { FormData } from "../../main";
import { useNavigate } from "react-router-dom";

const ResetPass = () => {
    const {formData, setFormData} = useContext(FormData)
    const navigate = useNavigate();
  const resetPassMutation = useMutation({
    mutationFn:(data)=> 
      apiClient({
        url:"https://college-backend-tyea.onrender.com/api/resetpass",
        method:"POST",
        data
      }),
      onSuccess:({message})=>{
        alert(message);
        navigate("/login")
        setFormData(null)
      },
      onError:({response})=>{
        alert(response?.data?.message)
      }
  })
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const newPassword = watch("password");
  function onSubmit (data){
    console.log(data)
    resetPassMutation.mutate({
      email:formData?.email,
      password:data?.password,
    })
  }
  return (
    <div className="relative w-[350px] flex flex-col items-center mt-4 justify-center mx-auto bg-white p-6 rounded-[6px]">
      <h2 className="text-[1.2rem] mb-8 mt-5">Password Reset</h2>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2 ">
        <InputField
          type="password"
          className={`p-2 flex items-center gap-[10px]  bg-transparent border-2 border-[#999999] rounded-[6px] w-full `}
          name="password"
          label="New Password"
          register={register}
          errors={errors}
        />
        <InputField
          type="password"
          className={`p-2 flex items-center gap-[10px]  bg-transparent border-2 border-[#999999] rounded-[6px] w-full `}
          name="conpass"
          label="Confirm Password"
          register={register}
          errors={errors}
          validate={(value) =>
            value === newPassword || "Passwords do not match!"
          }
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
