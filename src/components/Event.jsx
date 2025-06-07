import React, { useState, useEffect } from "react";
import { upComingEvents } from "../constant";
import { useEventAbout } from "../../hooks/EventAboutProvider";


const UpcomingEvents = () => {
    const {events} = useEventAbout();
    console.log(events, 'ev')
  
  
  // const [events, setEvents] = useState(upComingEvents);

  // useEffect(() => {
  //   const now = new Date();

  //   // Filter events based on the end time
  //   const activeEvents = events.filter(event => event.endTime > now);

  //   // Set filtered active events
  //   setEvents(activeEvents);
  // }, []);
  // const events = [
  //   {
  //     id: 1,
  //     title: "AI & ML Workshop",
  //     date: "March 15, 2025",
  //     time: "10:00 AM - 2:00 PM",
  //     description:
  //       "A workshop on Artificial Intelligence and Machine Learning. This session will cover deep learning, neural networks, and practical applications of AI in real-world scenarios. Students will gain hands-on experience through coding exercises and case studies. Guest speakers from the industry will also share insights on the future of AI. The event is open to all students who are interested in learning about cutting-edge technology.",
  //     image: "https://th.bing.com/th/id/OIP.OGyjWTdUZX4ZcPWfUjAUqgHaEO?rs=1&pid=ImgDetMain",
  //     registerLink: "https://example.com/register-ai-workshop",
  //   },
   
  // ];

  return (
   
    <div className="mt-4">
    <div className="space-y-6">
        {events?.events?.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
    </div>
  </div>
  );
};

export function EventCard({ event }) {
  const [showFull, setShowFull] = useState(false);
  const maxLength = 200;
  console.log(event, 'events')

  // return (
  //   <div className="md:flex gap-3">
  //     {event.image && (
  //       <img
  //         src={event.image}
  //         alt={event.title}
  //         className="w-full h-40 object-cover rounded-md mb-3"
  //       />
  //     )}
  //     <div>

  //     <h3 className="text-xl font-semibold">{event.title}</h3>
  //     <p className="text-gray-600">{event.date} | {event.time}</p>
  //     <p className="mt-2">
  //       {showFull || event?.description?.length <= maxLength
  //         ? event?.description
  //         : event?.description?.slice(0, maxLength) + "..."}
  //         {event?.description?.length > maxLength && (
  //       <button
  //         className="text-blue-600 font-semibold mt-2"
  //         onClick={() => setShowFull(!showFull)}
  //       >
  //         {showFull ? "See Less" : "See More"}
  //       </button>
  //     )}
  //     </p>
  //     {event.registerLink && (
  //       <a
  //         href={event.registerLink}
  //         target="_blank"
  //         rel="noopener noreferrer"
  //         className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
  //       >
  //         Register Now
  //       </a>
  //     )}
  //     </div>
  //   </div>
  // );
  return (
    <div className="rounded-lg shadow-md border py-3 px-4 bg-white">
      {event?.image && (
        <img
          src={`https://college-backend-tyea.onrender.com${event?.image}`}
          alt={event?.title}
          className="w-full h-40 object-cover rounded-md mb-3"
        />
      )}
      <div className="">
        <h3 className="text-xl font-semibold">{event?.title}</h3>
        <p className="text-gray-600">
          <mark>
          Date: {event?.date} <br/>
          Time: {event?.stime + `${event?.stime.slice(0, 2) < 12 ? " AM" :" PM"}`}  to {event?.etime + `${event?.etime.slice(0, 2) < 12 ? " AM" :" PM"}`}
          </mark>
        </p>
        <p className="mt-2 text-justify">
          {showFull || event?.description.length <= maxLength
            ? event?.description
            : event?.description.slice(0, maxLength) + "..."}
          {event?.description.length > maxLength && (
            <button
              className="text-blue-600 font-semibold mt-2"
              onClick={() => setShowFull(!showFull)}
            >
              {showFull ? "See Less" : "See More"}
            </button>
          )}
        </p>
        {event?.link && (
          <div>
            <a
              href={event?.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Register Now
            </a>
            
          </div>
        )}
      </div>
    </div>
  );
}
export default UpcomingEvents;
