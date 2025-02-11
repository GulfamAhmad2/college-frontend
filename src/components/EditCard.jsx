import React from 'react'
import Button from './Button'
import InputField from './InputFeild'
import { useForm } from 'react-hook-form';

const EditCard = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        console.log(data)
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
    />

    <InputField
      type="email"
      name="email"
      register={register}
      errors={errors}
      placeholder="Email*"
    />
    <InputField
      type="number"
      name="phone"
      register={register}
      errors={errors}
      placeholder="Phone No.*"
      minLength={10}
      maxLength={10}
    />
    <InputField
      type="number"
      name="roll"
      register={register}
      errors={errors}
      placeholder="Roll No.*"
      minLength={0}
      maxLength={10}
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
      type="textarea"
      name="address"
      register={register}
      errors={errors}
      placeholder="Address.."
      minLength={10}
    />
    <div className='flex justify-between gap-3 w-full items-center'>
    <Button
      type="submit"
      lable="Save"
      btnClass="bg-green-500 w-full rounded-[24px] text-white text-[17px] font-medium text-center py-[14px] active:scale-95 duration-300"
    />
    <Button
      lable="Cancel"
      btnClass="bg-red-500 w-full rounded-[24px] text-white text-[17px] font-medium text-center py-[14px] active:scale-95 duration-300"
    /> 
    </div>
  </form></div>
  )
}

export default EditCard