import { Mail, Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {
    const handleScroll = (event: React.MouseEvent) => {
        event.preventDefault();
        const faqSection = document.getElementById("faq");
        if (faqSection) {
            faqSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className="bg-black text-white p-8">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
                
                <div>
                    <h1 className="text-2xl font-bold">GDSC Pune</h1>
                </div>
                
                <div>
                    <ul className="flex space-x-6">
                        <li className="hover:underline cursor-pointer">About GDSC Program</li>
                        <li className="hover:underline cursor-pointer" onClick={handleScroll}>
                            FAQ
                        </li>
                        <li className="hover:underline cursor-pointer">Code of Conduct</li>
                        <li className="hover:underline cursor-pointer">Community Guidelines</li>
                    </ul>
                </div> 

                {/* Social Media Icons Section */}
                <div className="flex space-x-6">
                    <a href="mailto:gdscwowpune@gmail.com" className="hover:text-gray-400" aria-label="Email">
                        <Mail className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/company/gdsc-pune" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400" aria-label="LinkedIn">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="https://www.instagram.com/gdsc.pune/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400" aria-label="Instagram">
                        <Instagram className="w-6 h-6" />
                    </a>
                    <a href="https://x.com/GDSCPune" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400" aria-label="Twitter">
                        <Twitter className="w-6 h-6" />
                    </a>
                </div>
            </div>

            {/* Footer Note */}
            <div className="text-center mt-6 text-sm text-gray-400">
                <p>&copy; 2025 GDSC Pune. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
