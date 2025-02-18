import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState<string>(items[0]?.name || "");
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const debounceResize = () => {
      if (resizeTimeoutRef.current) clearTimeout(resizeTimeoutRef.current);
      resizeTimeoutRef.current = setTimeout(handleResize, 100);
    };

    window.addEventListener("resize", debounceResize);
    return () => {
      window.removeEventListener("resize", debounceResize);
      if (resizeTimeoutRef.current) clearTimeout(resizeTimeoutRef.current);
    };
  }, []);

  const isMobile = windowWidth < 640; // Small devices
  const isTablet = windowWidth >= 640 && windowWidth < 1024; // Tablets
  

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-4",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-2 bg-background/5 border border-border backdrop-blur-lg rounded-full shadow-lg",
          isMobile ? "p-2" : isTablet ? "p-3" : "p-4"
        )}
      >
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold rounded-full transition-colors flex items-center",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary",
                isMobile ? "px-3 py-2" : isTablet ? "px-4 py-2" : "px-6 py-2"
              )}
            >
              {isMobile ? (
                <Icon size={20} strokeWidth={2.5} />
              ) : (
                <>
                  {isTablet ? (
                    <span className="flex items-center gap-2">
                      <Icon size={18} strokeWidth={2} />
                      <span>{item.name}</span>
                    </span>
                  ) : (
                    <span>{item.name}</span>
                  )}
                </>
              )}
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
}

