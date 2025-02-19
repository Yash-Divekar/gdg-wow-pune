import React from "react";
import { Mail, Linkedin, Instagram, Twitter } from "lucide-react";

const Outrow: React.FC = () => {
  return (
    <div className="bg-[#C2ECF8] p-6 md:p-12 mt-24 md:mt-48 rounded-2xl flex flex-col md:flex-row justify-between items-center max-w-[90%] md:max-w-6xl mx-auto px-4 shadow-md border-2 border-gray-500 text-center md:text-left">
      {/* Left Side - Text & Icons */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Keep in touch with GDSC Pune <br className="hidden md:block" /> for
          the latest announcements
        </h2>
        <p className="text-gray-800 mt-2">
          Stake out #GDSCWoW for the latest updates and news.
        </p>
        {/* Social Icons */}
        <div className="flex justify-center md:justify-start space-x-5 md:space-x-7 mt-6 md:mt-9 text-gray-800">
          <a
            href="mailto:gdscwowpune@gmail.com"
            className="hover:text-gray-400"
            aria-label="Email"
          >
            <Mail className="text-2xl hover:text-gray-600 cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/company/gdsc-pune"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
            aria-label="LinkedIn"
          >
            <Linkedin className="text-2xl hover:text-gray-600 cursor-pointer" />
          </a>
          <a
            href="https://www.instagram.com/gdsc.pune/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
            aria-label="Instagram"
          >
            <Instagram className="text-2xl hover:text-gray-600 cursor-pointer" />
          </a>
          <a
            href="https://x.com/GDSCPune"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
            aria-label="Twitter"
          >
            <Twitter className="text-2xl hover:text-gray-600 cursor-pointer" />
          </a>
        </div>
      </div>

      {/* Right Side - GDG Logo */}
      <img
        src="./graphic.png" // Replace with actual GDG logo path
        alt="Google Developer Groups"
        className="w-40 md:w-80 mt-6 md:mt-0"
      />
    </div>
  );
};

export default Outrow;
