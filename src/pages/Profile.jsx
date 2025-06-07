import { useState } from 'react';
import { useAuth } from '../AuthContext';
import React from 'react'
import Button from '../components/Button'
import InputField from '../components/InputFeild'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { apiClient } from '../api/apiClient';

const Profile = () => {
  const {loginData} = useAuth()
  const {name, email, phone, year, address, roll} = loginData;
  const currentYear = new Date().getFullYear(); // Get the current year
  
  // Dynamically calculate the start and end year based on the user's year
  const userYear = year; // Example: user is in SY (you can change this to simulate other years)
  
  let startYear, endYear;

  // Set startYear and endYear based on the user year
  if (userYear === 'FY') {
    startYear = currentYear - 1;
    endYear = startYear + 3;
  } else if (userYear === 'SY') {
    startYear = currentYear - 2;
    endYear = startYear + 3;
  } else if (userYear === 'TY') {
    startYear = currentYear - 3;
    endYear = startYear + 3;
  }
  
  const userData = {
    name,
    roll,
    email,
    phone,
    year,
    address,
    education: [
      {
        degree: 'Bachelor of Computer Science',
        college: 'Gaynodaya Bsc-IT',
        duration: `${startYear} - ${endYear}`,
      },
    ],
  }

  const [isEditing, setIsEditing] = useState(false);

  console.log(userData)

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleLogout = () => {
    // Clear user session or token (use localStorage, sessionStorage, or context)
    // Example: localStorage.removeItem('userToken');
    // Redirect to login page (you can use react-router for this)
    window.location.href = "/login";  // Redirect to login page after logout
  };

  return (
    <>
     {
      isEditing ? <div className=''><EditCard setIsEditing={setIsEditing} loginData={loginData}/></div> : <div className="min-h-screen bg-gray-100 pt=[15px]">
      {/* Profile Content */}
      <div className="px-4 md:px-8  pb-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-6">
          {/* Name and Headline */}
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-gray-900 capitalize">
              
                {userData.name}
            </h1>
            <p className="text-gray-600">Roll:  {userData.roll}</p>
            <p className="text-gray-600">Student at {userData.education[0].college}</p>
          </div>

          {/* Education Section */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Education</h2>
            {userData.education.map((edu, index) => (
              <div key={index} className="mb-3">
                <h3 className="font-medium text-gray-900">{edu.degree}</h3>
                <p className="text-gray-600 text-sm">Mumbai University</p>
                <p className="text-gray-500 text-sm">{edu.duration}</p>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="border-t pt-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Contact Info</h2>
            <div className="space-y-2">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-gray-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-600">{userData.email}</span>
              </div>
              {/* <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-gray-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-gray-600">
                  
                    {userData.phone}
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-gray-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-600">
                  
                    {userData.address}
                </span>
              </div> */}
            </div>
          </div>

          {/* Edit Button */}
          <div className="flex gap-2 justify-end mt-4">
            <button
              onClick={toggleEdit}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Edit
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
    }
    </>
   
    
  );
};



const EditCard = ({setIsEditing, loginData}) => {
  const {setUserData} = useAuth();
  const {_id, name, email, phone, year, address, roll} = loginData;
  const mutation = useMutation({
    mutationFn: (data) =>
      apiClient({
        url: "https://college-backend-tyea.onrender.com/api/updateUserData",
        method: "PATCH",
        data: data,
      }),
    onSuccess: (data) => {
      setUserData(data?.user);
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
        console.log(data)
        mutation.mutate({_id:_id, ...data});
        setIsEditing(false)
      };
  return (
    <div className='w-full bg-white flex items-center justify-center  h-screen'><form
    className="flex flex-col gap-[15px] w-[320px] "
    onSubmit={handleSubmit(onSubmit)}
  >
    <InputField
      type="text"
      name="name"
      register={register}
      errors={errors}
      placeholder="Full Name*"
      minLength={3}
      maxLength={50}
      value={name}
    />

    <InputField
      type="email"
      name="email"
      register={register}
      errors={errors}
      placeholder="Email*"
      value={email}
    />
    {/* <InputField
      type="number"
      name="phone"
      register={register}
      errors={errors}
      placeholder="Phone No.*"
      minLength={10}
      maxLength={10}
      value={phone}
    /> */}
    <InputField
      type="tel"
      name="roll"
      register={register}
      errors={errors}
      placeholder="Roll No.*"
      minLength={0}
      maxLength={10}
      value={roll}
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

    {/* <InputField
      type="textarea"
      name="address"
      register={register}
      errors={errors}
      placeholder="Address.."
      minLength={10}
      value={address}
    /> */}
    <div className='flex justify-between gap-3 w-full items-center'>
    <Button
      type="submit"
      disabled={mutation.isPending}
      lable={`${mutation.isPending ? "wait...":"Save" }`}
      btnClass="bg-green-500 w-full rounded-[24px] text-white text-[17px] font-medium text-center py-[14px] active:scale-95 duration-300"
    />
    <Button
      lable="Cancel"
      btnClass="bg-red-500 w-full rounded-[24px] text-white text-[17px] font-medium text-center py-[14px] active:scale-95 duration-300"
      onClick={()=> setIsEditing(false)}
    /> 
    </div>
  </form></div>
  )
}


export default Profile;
