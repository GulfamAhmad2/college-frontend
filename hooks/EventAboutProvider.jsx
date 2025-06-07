import { createContext, useContext, useState} from "react";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../src/api/apiClient";

const EventAboutContext = createContext();
export function EventAboutProvider({ children }) {
    // const [events, setEvents] = useState([])
    // const [abouts, setAbouts] = useState([])
    const { data: events } = useQuery({
        queryKey: ["events"],
        queryFn: () =>
          apiClient({
            url: "https://college-backend-tyea.onrender.com/api/events",
            method: "GET",
          }),
          onError: ({response}) => alert(response.data.messsage),
      });
      const { data: abouts } = useQuery({
        queryKey: ["abouts"],
        queryFn: () =>
          apiClient({
            url: "https://college-backend-tyea.onrender.com/api/about",
            method: "GET",
          }),
          onError: ({response}) => alert(response.data.messsage),
      });
  return <EventAboutContext.Provider value={{events, abouts}}>{children}</EventAboutContext.Provider>;
}

export const  useEventAbout = ()=> useContext(EventAboutContext)