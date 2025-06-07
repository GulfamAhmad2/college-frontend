import Section from "../../components/Section";
import {  useQuery } from "@tanstack/react-query";

import Hero from "../../components/Hero";
import { bscItStaff } from "../../constant";
import Title from "../../components/Title";
import { apiClient } from "../../../../dashboard/src/api/apiClient";
const Staff = () => {
  const { data: bscItStaff} = useQuery({
    queryKey: ["staff"],
    queryFn: () =>
      apiClient({
        url: "https://college-backend-tyea.onrender.com/api/staff",
        method: "GET",
      }),
    onError: (err) => alert(err.message),
  });
  console.log(bscItStaff, "stf")
  return (
    <Section>
      <Hero>Our Staff</Hero>
      <div className="py-10 px-6  min-h-screen">
  {bscItStaff?.map((staffCategory) => (
    <div key={staffCategory.category} className="mb-12">
      <Title className="text-3xl  mb-6 text-center">{staffCategory.category}</Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {staffCategory.members.map((member) => (
          <div key={member.id} className="bg-color-4 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <img
              src={`https://college-backend-tyea.onrender.com${member.image}`}
              alt={member.name}
              className="w-32 h-32 rounded-full mb-4 object-cover shadow-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
            <p className="text-gray-600">{member.position}</p>
            {member.subject && <p className="text-gray-500 mt-2">Subject: {member.subject}</p>}
            {member.department && <p className="text-gray-500 mt-2">Department: {member.department}</p>}
          </div>
        ))}
      </div>
    </div>
  ))}
</div>

    </Section>
  );
};

export default Staff;
