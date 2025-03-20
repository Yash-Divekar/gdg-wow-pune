import { FaEnvelope, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const socialLinks = [
  { Icon: FaEnvelope, href: "mailto:gdgocwowpune@gmail.com", label: "Email" },
  { Icon: FaLinkedin, href: "https://www.linkedin.com/company/gdsc-pune", label: "LinkedIn" },
  { Icon: FaInstagram, href: "https://www.instagram.com/gdgoc.pune/", label: "Instagram" },
  { Icon: FaTwitter, href: "https://x.com/gdgocpune", label: "Twitter" },
];

export default function SocialLinks({ className = "text-xl sm:text-2xl" }) {
  return (
    <div className="flex space-x-6 sm:space-x-8">
      {socialLinks.map(({ Icon, href, label }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`cursor-pointer hover:text-gray-400 ${className}`}
          aria-label={label}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
