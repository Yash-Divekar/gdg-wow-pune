import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="fixed top-5 lg:left-auto lg:right-[1%] 
        transform -translate-x-1/2 lg:translate-x-0 
        flex items-center justify-center gap-2
        z-[100] 
        w-fit 
        px-3 bg-white border border-black rounded-full shadow-lg left-0 right-0 mx-auto
"
      >
        {/* GDGoC Brand */}
        <a
          href="#home"
          className="px-4 py-2 font-bold text-basic sm:text-2xl bg-white rounded-l-full"
        >
          GDGoC
        </a>

        {/* Navigation Links */}
        <div className="flex flex-row gap-4 sm:gap-8 text-sm items-center">
          <Link to="home" smooth={true} duration={600} className="cursor-pointer">
            Home
          </Link>
          <Link to="about" smooth={true} duration={600} className="cursor-pointer">
            About
          </Link>
          <Link to="speaker" smooth={true} duration={600} className="cursor-pointer">
            Speaker
          </Link>
          <Link to="sponsor" smooth={true} duration={600} className="cursor-pointer">
            Sponsor
          </Link>
          <Link to="faq" smooth={true} duration={600} className="cursor-pointer">
            FAQ
          </Link>
        </div>
      </div>
    </div>
  );
}
