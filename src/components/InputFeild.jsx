import { useForm } from "react-hook-form";
const InputField = ({
  label,
  type,
  name,
  register,
  errors,
  placeholder,
  svg,
  className,
  labClass,
  value,
  validate,
  minLength,
  maxLength,
}) => {
  const handleInput = (e)=>{
    let newValue = e.target.value;
    if(type==="text" && newValue.length>maxLength){
      newValue = newValue.slice(0, maxLength);
    }
    if(type==="textarea" && newValue.length>maxLength){
      newValue = newValue.slice(0, maxLength);
    }
    if (type === "number") {
      newValue = newValue.replace(/[^0-9]/g, "");
      if (newValue.length > maxLength) {
        newValue = newValue.slice(0, maxLength);
      }
    }
    e.target.value = newValue;
  }
  return (
    <div className={`${labClass || ""}`}>
      {label && (
        <label className="text-[#999999] text-[13px] font-medium">
          {label}
        </label>
      )}
      {type === "textarea" ? (
        <textarea defaultValue={value}
          {...register(name, {
            required: `${name} is required`,
            validate,
            minLength: minLength && {
              value: minLength,
              message: `${label} must be at least ${minLength} characters.`,
            },
            maxLength: maxLength && {
              value: maxLength,
              message: `${label} must be at most ${maxLength} characters.`,
            },
          })}
          className={`p-2 flex items-center gap-[10px]  bg-transparent border-2 border-[#999999] rounded-[6px] w-full focus:border-color-1  focus:outline-none transition duration-300 h-32 ${
            className || ""
          }`}
          placeholder={placeholder}
        ></textarea>
      ) : (
        <div className="flex items-center">
          {svg && <img src={svg} alt="svg" />}

          <input
            type={type}
            defaultValue={value}
            {...register(name, {
              required: `${name} is required`,
              validate,
              minLength: minLength && {
                value: minLength,
                message: `${label} must be at least ${minLength} characters.`,
              },
              maxLength: maxLength && {
                value: maxLength,
                message: `${label} must be at most ${maxLength} characters.`,
              },
            })}
            className={`p-2 flex items-center gap-[10px]  bg-transparent border-2 focus:border-color-1 border-[#999999] rounded-[6px] w-full focus:outline-none transition duration-300 ${
              className || ""
            }`}
            placeholder={placeholder}
            onInput={handleInput}
          />
        </div>
      )}
      {errors[name] && (
        <p className="text-red-500 mt-2">{errors[name].message}</p>
      )}
    </div>
  );
};

export default InputField;
