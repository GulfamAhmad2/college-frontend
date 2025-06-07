import React from "react";
import Section from "../components/Section";
import Hero from "../components/Hero";
import { useState, useEffect } from "react";
import { apiClient } from "../api/apiClient";
import { useMutation } from "@tanstack/react-query";
import { ArrowLeft, Trash2 } from "lucide-react";
import { useRef } from "react";

// import { getEvents } from '../services/api';
//

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState("");
  const openLightbox = (img) => {
    setPhotoIndex(img);
    setIsOpen(true);
  };
  
  return (
    <Section className="relative">
      <Hero >
        Our Gallery
      </Hero>
      <GalleryPage
        openLightbox={openLightbox}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      {isOpen && (
        <ImagePreview isOpen={isOpen} setIsOpen={setIsOpen}>
          <div className="space-y-6">
            <img src={photoIndex} />
          </div>
        </ImagePreview>
      )}
    </Section>
  );
};

// Gallery Page (src/pages/GalleryPage.jsx)

const GalleryPage = ({ openLightbox, isOpen, setIsOpen }) => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const getImage = useMutation({
    mutationFn: () =>
      apiClient({
        url: `https://college-backend-tyea.onrender.com/api/upload?page=${page}`,
        method: "GET",
      }),
    onSuccess: (data) => {
      setEvents(data?.images);
      if (data.images.length < 5) setHasMore(false);
    },
    onError: (err) => {
      alert(err.message);
    },
  });
  useEffect(() => {
    getImage.mutate();
  }, [page]);

  return (
    <div className="container mx-auto px-2 lg:px-0 py-8">
      <div className="grid grid-cols-1 gap-6">
        {events?.map((event) => (
          <div
            key={event._id}
            className="border rounded-lg overflow-hidden shadow-lg "
          >
            <h2 className="text-xl capitalize font-semibold p-4">
              {event.title}
            </h2>
            <div className="grid grid-cols-3 gap-1 p-1">
              {event.images.slice(0, 6).map((img, index) => (
                <div key={img._id} className="relative aspect-square">
                  <img
                    src={`https://college-backend-tyea.onrender.com${img.url}`}
                    alt=""
                    className="w-full h-full object-cover"
                    onClick={() =>
                      openLightbox(`https://college-backend-tyea.onrender.com${img.url}`)
                    }
                  />
                  {index === 5 && event.images.length > 6 && (
                    <div
                      onClick={() => setSelectedEvent(event)}
                      className="cursor-pointer absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-xl"
                    >
                      +{event.images.length - 6}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
          openLightbox={openLightbox}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
      {hasMore && (
        <button
          onClick={() => setPage(page + 1)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Load More
        </button>
      )}
    </div>
  );
};

// Event Modal (src/components/Gallery/EventModal.jsx)
const EventModal = ({ event, openLightbox, isOpen, onClose }) => {
  return (
    <ImagePreview isOpen={isOpen} setIsOpen={onClose}>
      <div className="grid grid-cols-3 gap-2 mb-4 lg:h-[300px] h-[200px] overflow-auto ">
        {event?.images?.map((img) => (
          <div key={img?._id} className="relative group">
            <img
              src={`http://localhost:5000${img?.url}`}
              alt=""
              className="w-full lg:h-40 object-cover"
              onClick={() => openLightbox(`http://localhost:5000${img?.url}`)}
            />
          </div>
        ))}
      </div>
    </ImagePreview>
  );
};

function ImagePreview({ children, setIsOpen, isOpen, onClose }) {
  const modalRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      
    
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div
        ref={modalRef}
        className="bg-white rounded-xl border shadow-xl max-w-2xl w-full max-h-[90vh] flex flex-col "
      >
        <div className="relative p-6 space-y-6 overflow-y-auto">
          <button
            onClick={() => setIsOpen(false)}
            className="flex sticky  top-0 bg-white items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="font-medium">Back to messages</span>
          </button>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
