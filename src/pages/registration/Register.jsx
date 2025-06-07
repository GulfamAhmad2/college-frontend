import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import InputField from "../../components/InputFeild";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../../api/apiClient";
import { FormData } from "../../main";
const Register = () => {
  const {formData, setFormData} = useContext(FormData)
  console.log(formData, 'context')
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (newUser) =>
      apiClient({
        url: "https://college-backend-tyea.onrender.com/api/registeration",
        method: "POST",
        data: newUser,
      }),
      onSuccess:({response})=>{
        navigate("/reg-verify");
      },
      onError:({response})=>{
        alert(response.data.message || "Registration failed")
        console.log(err)
      }
  });
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    mutation.mutate(data)
    setFormData({email:data.email})
  };
  return (
    <div className=" flex  gap-[50px] max-w-[1440px] w-[96%] mx-auto md:p-[20px] ">
      <div className="flex-1 ">
        <Link to="/" className="text-color-7 text-xl font-semibold">GVM BSC-IT</Link>
        <div className="flex flex-col items-center justify-center mx-auto mt-[20px]">
          <div className="mb-[20px]">
            <h2 className="text-color-7 text-3xl font-medium mb-[22px]">
              Create an account
            </h2>
            <p className="text-color-7 text-center text-base font-normal">
              If you have an account <br /> You can{" "}
              <Link
                to="/login"
                className="text-color-9 text-base font-bold underline"
              >
                Login here !
              </Link>{" "}
            </p>
          </div>
          <form
            className="flex flex-col gap-[15px] w-[300px] "
            onSubmit={handleSubmit(onSubmit)}
          >
            <InputField
              type="text"
              name="name"
              register={register}
              errors={errors}
              label="Full Name*"
              minLength={3}
              maxLength={50}
            />

            <InputField
              type="email"
              name="email"
              register={register}
              errors={errors}
              label="Email*"
            />
            <InputField
              type="tel"
              name="roll"
              register={register}
              errors={errors}
              label="Roll number*"
            />
            
            <div className="">
              <span className="text-[#999999] text-[13px] font-medium">
                Select Year*
              </span>
              <div className="flex justify-between">
                <InputField
                  type="radio"
                  name="year"
                  label="Fy"
                  value="FY"
                  className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                  labClass="flex items-center gap-[5px]"
                  register={register}
                  errors={errors}
                />
                <InputField
                  type="radio"
                  name="year"
                  label="Sy"
                  value="SY"
                  className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                  labClass="flex items-center gap-[5px]"
                  register={register}
                  errors={errors}
                />
                <InputField
                  type="radio"
                  name="year"
                  label="Ty"
                  value="TY"
                  className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                  labClass="flex items-center gap-[5px]"
                  register={register}
                  errors={errors}
                />
              </div>
            </div>

            <InputField
              type="password"
              name="password"
              register={register}
              errors={errors}
              label="New Password*"
              minLength={6}
              maxLength={30}
            />
            
            <Button
              type="submit"
              disabled={mutation.isPending}
              lable={`${mutation.isPending ? "sendin Otp...":"Create Account" }`}
              btnClass="bg-[#0c21c1] rounded-[24px] text-white text-[17px] font-medium text-center py-[14px] active:scale-95 duration-300"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
