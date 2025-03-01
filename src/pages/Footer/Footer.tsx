import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-6 pb-12 px-2 sm:px-12 md:px-24 outline">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-6 sm:space-y-0">
        {/* Left Section - Brand & Links */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 lg:space-x-10 w-full sm:w-auto text-center sm:text-left">
          <h2 className="text-2xl font-bold whitespace-nowrap">GDGoC Pune</h2>
          <nav className="pt-2 flex flex-wrap justify-center sm:justify-start  space-x-4 sm:space-x-6 lg:space-x-10 text-sm sm:text-base">
            <a href="#" className="hover:text-gray-400">
              About GDGoC Program
            </a>
            <a href="#" className="hover:text-gray-400">
              FAQ
            </a>
            <a href="#" className="hover:text-gray-400">
              Code of Conduct
            </a>
            <a href="#" className="hover:text-gray-400">
              Community Guidelines
            </a>
          </nav>
        </div>

        {/* Right Section - Social Icons */}
        <div className=" flex space-x-6 sm:space-x-8 mt-2 sm:mt-0 text-xl sm:text-2xl justify-center">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="cursor-pointer hover:text-gray-400"
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            className="cursor-pointer hover:text-gray-400"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="cursor-pointer hover:text-gray-400"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className="cursor-pointer hover:text-gray-400"
          />
        </div>
      </div>

      {/* Copyright Text */}
      <p className="text-center mt-10 text-gray-500 text-sm">
        © 2025 GDGoC Pune. All Rights Reserved
      </p>
    </footer>
  );
}
