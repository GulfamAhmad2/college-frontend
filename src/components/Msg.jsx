import React from "react";
import Title from "./Title";


// const Msg = ({title, name, text, img}) => {
//   return (
//     <div>
//       <Title className="my-[30px]">{title}</Title>
//       <div className="flex gap-7">
//         <img src={img} alt="director_img" className="w-[200px] h-[200px]" width={200} height={200} />
//         <div>
//           <Title className="font-medium italic text-xl">{name}</Title>
//           <p className="text-color-13 text-justify">
//             {text}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

const Msg = ({ title, name, img, text }) => (
  <div className="flex flex-col md:flex-row items-center gap-8 mt-6">
    {/* Image Section */}
    <div className="w-full md:w-1/3 flex justify-center">
      <img
        src={img}
        alt={name}
        className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full shadow-lg"
      />
    </div>

    {/* Text Section */}
    <div className="w-full md:w-2/3">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">{title}</h2>
      <h3 className="text-lg md:text-xl text-gray-600 mt-1">{name}</h3>
      <p className="text-sm md:text-base text-gray-700 mt-4 leading-relaxed text-justify">
        {text}
      </p>
    </div>
  </div>
);

export default Msg;
