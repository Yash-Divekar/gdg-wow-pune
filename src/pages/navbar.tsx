import { Home, User, Briefcase, FileText } from 'lucide-react';
import { NavBar } from "@/components/ui/tubelight-navbar";

export function NavBarDemo() {
  const handleScroll = (event: React.MouseEvent, id: string) => {
    event.preventDefault(); // Prevent default anchor behavior
    
    const section = document.getElementById(id);
    if (section) {
      const offset = 200; // Adjust this value based on your navbar height
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { name: 'Home', id: 'home', icon: Home },
    { name: 'About', id: 'about', icon: User },
    { name: 'Speaker', id: 'speaker', icon: Briefcase },
    { name: 'Sponsors', id: 'sponsors', icon: FileText },
    { name: 'FAQ', id: 'faq', icon: FileText },
  ];

  return (
    <NavBar
      items={navItems.map(item => ({
        ...item,
        url: `#${item.id}`, // Keeps the hash for usability
        onClick: (event: React.MouseEvent) => handleScroll(event, item.id),
      }))}
    />
  );
}
