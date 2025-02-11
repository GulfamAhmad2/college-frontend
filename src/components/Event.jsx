import React, { useState, useEffect } from "react";
import { upComingEvents } from "../constant";

const UpcomingEvents = () => {
  const [events, setEvents] = useState(upComingEvents);

  useEffect(() => {
    const now = new Date();

    // Filter events based on the end time
    const activeEvents = events.filter(event => event.endTime > now);

    // Set filtered active events
    setEvents(activeEvents);
  }, []);

  return (
    <div className=" p-5">
      {events.length > 0 ? (
        events.map((event) => (
          <div key={event.id} className="">
            <h2 className="font-bold text-color-1 text-xl mb-1">{event.name}</h2>
            <p className="text-justify text-color-13 ">{event.description}</p>
            <p className="text-[14px]  text-color-13 pt-1">
              Starts at: {event.startTime.toLocaleString()}
              <br />
              Ends at: {event.endTime.toLocaleString()}
            </p>
          </div>
        ))
      ) : (
        <p>No upcoming events available.</p>
      )}
    </div>
  );
};

export default UpcomingEvents;
