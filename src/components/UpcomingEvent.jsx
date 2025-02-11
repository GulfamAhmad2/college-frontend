const UpcomingEvent = ({ title, date, time, location, description, agenda, speakers, registrationLink }) => {
    return (
        <div className="bg-[#050d2d] text-white p-6 rounded-lg shadow-lg mb-6">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p><strong>Date:</strong> {date}</p>
            <p><strong>Time:</strong> {time}</p>
            <p><strong>Location:</strong> {location}</p>
            <p className="mb-4"><strong>Description:</strong> {description}</p>
            <h3 className="text-xl font-semibold mb-2">Agenda</h3>
            <ul className="list-disc list-inside mb-4">
                {agenda.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <h3 className="text-xl font-semibold mb-2">Speakers</h3>
            <ul className="list-disc list-inside mb-4">
                {speakers.map((speaker, index) => (
                    <li key={index}>{speaker}</li>
                ))}
            </ul>
            <a
                href={registrationLink}
                className="bg-white text-[#050d2d] py-2 px-4 rounded-lg font-semibold hover:bg-gray-200"
            >
                Register Here
            </a>
        </div>
    );
};

export default UpcomingEvent;