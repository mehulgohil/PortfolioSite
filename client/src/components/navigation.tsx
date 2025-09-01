import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./theme-toggle";
import profileImage from "@assets/WhatsApp Image 2025-09-01 at 14.57.51_1756718904137.jpeg";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavAvatar, setShowNavAvatar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 100);
      
      // Show nav avatar when hero section is mostly out of view
      const heroSection = document.getElementById("home");
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setShowNavAvatar(scrollY > heroBottom - 200);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav 
      className="fixed top-0 w-full z-50 border-b border-border"
      data-testid="navigation"
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: 0, 
        opacity: 1,
        backgroundColor: scrolled ? "hsl(var(--background) / 0.95)" : "hsl(var(--background) / 0.80)"
      }}
      transition={{ duration: 0.3 }}
      style={{ backdropFilter: "blur(12px)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.button
            onClick={() => scrollToSection("home")}
            className="flex items-center text-xl font-bold gradient-text"
            data-testid="link-home"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="flex items-center"
              animate={{
                gap: showNavAvatar ? "12px" : "0px"
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut"
              }}
            >
              <AnimatePresence>
                {showNavAvatar && (
                  <motion.img
                    src={profileImage}
                    alt="Mehul Gohil"
                    className="w-8 h-8 rounded-full object-cover border-2 border-primary/30"
                    data-testid="img-nav-avatar"
                    initial={{ 
                      opacity: 0, 
                      scale: 0,
                      x: -30
                    }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      x: 0
                    }}
                    exit={{ 
                      opacity: 0, 
                      scale: 0,
                      x: -30
                    }}
                    transition={{ 
                      duration: 0.5,
                      ease: "easeInOut"
                    }}
                  />
                )}
              </AnimatePresence>
              <motion.span
                animate={{
                  x: showNavAvatar ? 0 : 0
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut"
                }}
              >
                Mehul Gohil
              </motion.span>
            </motion.div>
          </motion.button>
          
          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, staggerChildren: 0.1 }}
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="nav-link text-muted-foreground hover:text-primary relative transition-colors duration-200"
                data-testid={`link-${item.id}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (index * 0.05) }}
                whileHover={{ 
                  scale: 1.05
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  whileHover={{
                    textShadow: "0 0 8px hsl(var(--primary) / 0.5)"
                  }}
                >
                  {item.label}
                </motion.span>
              </motion.button>
            ))}
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              <ThemeToggle />
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <motion.div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              data-testid="button-mobile-menu"
              asChild
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden pb-4 space-y-2 overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                  data-testid={`mobile-link-${item.id}`}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ 
                    x: 10,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
