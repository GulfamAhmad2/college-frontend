import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import InputField from "../../components/InputFeild";
import { useForm } from "react-hook-form";
import loginSide from "../../assets/image/login-side-img.png";
import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../../api/apiClient";
import { useAuth } from "../../AuthContext";


const Login = () => {
  const { login, setUserData} = useAuth();

  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (loginData) =>
      apiClient({
        url: "http://localhost:5000/api/users/login",
        method: "POST",
        data: loginData,
      }),
    onSuccess: (data) => {
      setUserData(data?.user);
      login()
      navigate("/")
      console.log(data, 'data')
    },
    onError: (err) => {
      alert(err.response.data.message);
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    mutation.mutate(data);
  };
  
  return (
    <div className="flex gap-[50px] max-w-[1440px] w-[90%] mx-auto p-[20px] h-[100vh]">
      <div className="flex-1 ">
        <Link to="/" className="text-color-7 text-xl font-semibold">
          GVM BSC-IT
        </Link>
        <div className="flex flex-col mx-auto mt-[90px]">
          <div className="mb-[50px]">
            <h2 className="text-color-7 text-3xl font-medium mb-[22px]">
              Sign In
            </h2>
            <p className="text-color-7 text-base font-normal">
              If you don’t have an account register <br /> You can{" "}
              <Link
                to="/registration"
                className="text-color-9 text-base font-bold underline"
              >
                Register here !
              </Link>{" "}
            </p>
          </div>
          <form
            className="flex flex-col gap-[30px] w-[320px]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <InputField
              type="email"
              name="email"
              register={register}
              errors={errors}
              label="Email*"
            />
            <div>
              <InputField
                type="password"
                name="password"
                register={register}
                errors={errors}
                label="Password*"
                minLength={0}
                maxLength={30}
              />

              <div className="flex items-center justify-between mt-[8px]">
                
                <Link
                  to="/forgot_pass"
                  className="text-[#4c4c4c] text-xs font-light underline"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
            <Button
              type="submit"
              lable="Login"
              btnClass="bg-[#0c21c1] rounded-[24px] text-white text-[17px] font-medium text-center py-[14px] active:scale-95 duration-300"
            >
              Login
            </Button>
          </form>
        </div>
      </div>
      <div className="flex-1 bg-[#000741] flex items-center justify-center h-full rounded-[6px]">
        <img src={loginSide} />
      </div>
    </div>
  );
};

export default Login;
