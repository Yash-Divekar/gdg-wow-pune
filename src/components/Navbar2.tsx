import { Link } from "react-scroll";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed font-sans top-4 z-40 w-full px-4 lg:px-0">
      {/* Desktop Navbar */}
      <div className="hidden lg:flex flex-row justify-end pr-10 gap-2 
        right-1/2 lg:right-10
        lg:w-auto 
        left-1/2 lg:left-auto
        mx-auto xl:mx-0 lg:ml-auto
        transition-all duration-300">
        <a
          href="#home"
          className="border border-black rounded-l-full px-4 py-2 font-bold text-sm lg:text-xl bg-white hover:bg-gray-100 transition-colors"
        >
          GDGoC
        </a>
        <div className="border border-black rounded-r-full px-3 xl:px-8 py-2 flex flex-row gap-2 xl:gap-8 text-xs md:text-sm items-center bg-white">
          <Link 
            to="home" 
            smooth={true} 
            duration={600} 
            className="cursor-pointer hover:text-blue-600 transition-colors"
          >
            Home
          </Link>
          <Link 
            to="about" 
            smooth={true} 
            duration={600} 
            className="cursor-pointer hover:text-blue-600 transition-colors"
          >
            About
          </Link>
          <Link 
            to="speaker" 
            smooth={true} 
            duration={600} 
            className="cursor-pointer hover:text-blue-600 transition-colors"
          >
            Speaker
          </Link>
          <Link 
            to="sponsor" 
            smooth={true} 
            duration={600} 
            className="cursor-pointer hover:text-blue-600 transition-colors"
          >
            Sponsor
          </Link>
          <Link 
            to="glimpses" 
            smooth={true} 
            duration={600} 
            className="cursor-pointer hover:text-blue-600 transition-colors"
          >
            Glimpses
          </Link>
          <Link 
            to="faq" 
            smooth={true} 
            duration={600} 
            className="cursor-pointer hover:text-blue-600 transition-colors"
          >
            FAQ
          </Link>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden flex justify-between items-center">
        <a
          href="#home"
          className="border border-black rounded-full px-4 py-2 font-bold text-sm bg-white"
        >
          GDGoC
        </a>
        <button 
          onClick={toggleMenu}
          className="border border-black rounded-full p-2 bg-white focus:outline-none"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-2 border border-black rounded-lg bg-white shadow-md p-4 flex flex-col gap-4">
          <Link 
            to="home" 
            smooth={true} 
            duration={600} 
            className="cursor-pointer hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="about" 
            smooth={true} 
            duration={600} 
            className="cursor-pointer hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="speaker" 
            smooth={true} 
            duration={600} 
            className="cursor-pointer hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Speaker
          </Link>
          <Link 
            to="sponsor" 
            smooth={true} 
            duration={600} 
            className="cursor-pointer hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Sponsor
          </Link>
          <Link 
            to="glimpses" 
            smooth={true} 
            duration={600} 
            className="cursor-pointer hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Glimpses
          </Link>
          <Link 
            to="faq" 
            smooth={true} 
            duration={600} 
            className="cursor-pointer hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </Link>
        </div>
      )}
    </nav>
  );
}