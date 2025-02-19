import { Home, User, Briefcase, FileText } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'About', url: '#', icon: User },
    { name: 'Speaker', url: '#', icon: Briefcase },
    { name: 'Sponsers', url: '#', icon: FileText },
    { name: 'FAQ', url: '#', icon: FileText },
  ]

  return <NavBar items={navItems} />
}