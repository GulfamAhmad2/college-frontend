const NoticeLink = ({ title, link, important }) => {
    return (
        <div className={`p-4 mb-4 rounded-lg ${important ? 'bg-red-500 text-white' : 'bg-[#050d2d] text-white'}`}>
            <a href={link} target="_blank" rel="noopener noreferrer" className="font-semibold text-lg underline hover:text-gray-200">
                {title}
            </a>
        </div>
        
    );
};

export default NoticeLink;