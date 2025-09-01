import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import ExperienceSection from "@/components/experience-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn"
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-background text-foreground"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Navigation />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 1.0,
            ease: "easeOut",
            staggerChildren: 0.1
          }
        }}
      >
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </motion.main>
      <Footer />
    </motion.div>
  );
}
