import { Link } from "react-router-dom";
import { TbSchool } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-700 py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Name */}
        <Link
          to="/"
          className="text-[#050d2d] text-2xl uppercase font-bold flex items-center gap-2 mb-4 md:mb-0"
        >
          <TbSchool className="w-10 h-10" />
          GVM
        </Link>

        {/* Footer links (optional) */}
        <div className="flex gap-6 text-sm">
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
          <Link to="#" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 mt-4">
        © {new Date().getFullYear()} GVM College. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
