import SocialLinks from "../../components/SocialsLinks.tsx";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-6 pb-12 px-2 sm:px-12 md:px-24">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-6 sm:space-y-0">
        {/* Left Section - Brand & Links */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 lg:space-x-10 w-full sm:w-auto text-center sm:text-left">
          <h2 className="text-2xl font-bold whitespace-nowrap"><a href="https://linktr.ee/GDGoCWOWPune">GDGoC Pune</a></h2>
          <nav className="pt-2 flex flex-wrap justify-center sm:justify-start space-x-4 sm:space-x-6 lg:space-x-10 text-sm sm:text-base">
            <a href="#" className="hover:text-gray-400">About GDGoC Program</a>
            <a href="#faq" className="hover:text-gray-400">FAQ</a>
            <a href="#" className="hover:text-gray-400">Code of Conduct</a>
            <a href="#" className="hover:text-gray-400">Community Guidelines</a>
          </nav>
        </div>

        {/* Right Section - Social Icons */}
        <SocialLinks />
      </div>

      {/* Copyright Text */}
      <p className="text-center mt-10 text-gray-500 text-sm">
        © 2025 GDGoC Pune. All Rights Reserved
      </p>
    </footer>
  );
}
