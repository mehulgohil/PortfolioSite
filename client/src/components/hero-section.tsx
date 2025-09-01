import { Download, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import profileImage from "@assets/WhatsApp Image 2025-09-01 at 14.57.51_1756718904137.jpeg";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  };

  // All available skills to rotate through
  const allSkills = [
    "Golang", "Docker", "Kubernetes", "AWS", "PostgreSQL",
    "Redis", "gRPC", "REST API", "Microservices", "CI/CD",
    "Terraform", "Jenkins", "Git", "Linux", "MongoDB",
    "Prometheus", "Grafana", "Nginx", "TypeScript", "React"
  ];

  // State for currently visible skills in bubbles
  const [visibleSkills, setVisibleSkills] = useState<string[]>([]);
  const [showNavAvatar, setShowNavAvatar] = useState(false);

  // Initialize with first 5 skills
  useEffect(() => {
    setVisibleSkills(allSkills.slice(0, 5));
  }, []);

  // Scroll detection for nav avatar coordination  
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("home");
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setShowNavAvatar(window.scrollY > heroBottom - 200);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Rotate skills randomly
  useEffect(() => {
    const rotateSkill = () => {
      setVisibleSkills(current => {
        const newSkills = [...current];
        const randomIndex = Math.floor(Math.random() * 5);
        const unusedSkills = allSkills.filter(skill => !newSkills.includes(skill));
        
        if (unusedSkills.length > 0) {
          const randomSkill = unusedSkills[Math.floor(Math.random() * unusedSkills.length)];
          newSkills[randomIndex] = randomSkill;
        }
        
        return newSkills;
      });
    };

    const interval = setInterval(rotateSkill, Math.random() * 3000 + 2000); // 2-5 seconds
    return () => clearInterval(interval);
  }, [visibleSkills]);

  // Bubble positions around the profile image (spread very wide in blank space)
  const bubblePositions = [
    { top: "30%", left: "-10%", delay: 0 },
    { top: "75%", left: "-15%", delay: 0.2 },
    { top: "35%", right: "-10%", delay: 0.4 },
    { top: "65%", right: "-15%", delay: 0.6 },
    { bottom: "40%", left: "-5%", delay: 0.8 },
  ];

  const handleDownloadCV = () => {
    // Create a mock CV download
    const link = document.createElement('a');
    link.href = 'data:text/plain;charset=utf-8,CV content would be here';
    link.download = 'Mehul_Gohil_CV.pdf';
    link.click();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden border-b border-border/20">
      <motion.div 
        className="absolute inset-0 gradient-bg opacity-10"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      ></motion.div>
      
      {/* Floating background elements */}
      <motion.div 
        className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
        variants={floatingVariants}
        animate="float"
        style={{ animationDelay: "0s" }}
      ></motion.div>
      <motion.div 
        className="absolute top-40 right-20 w-32 h-32 bg-secondary/10 rounded-full blur-xl"
        variants={floatingVariants}
        animate="float"
        style={{ animationDelay: "2s" }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-20 left-20 w-24 h-24 bg-primary/5 rounded-full blur-xl"
        variants={floatingVariants}
        animate="float"
        style={{ animationDelay: "4s" }}
      ></motion.div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Professional headshot with floating skill bubbles */}
          <motion.div 
            className="mb-8 inline-block relative"
            variants={itemVariants}
          >
            {/* Container for bubbles - wider area around image */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
              <motion.img 
                src={profileImage}
                alt="Professional headshot of Mehul Gohil" 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/30 shadow-2xl relative z-20" 
                data-testid="img-profile"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  transition: { duration: 0.3 }
                }}
                variants={floatingVariants}
                animate={showNavAvatar ? { 
                  y: [-10, 10, -10],
                  opacity: 0.7,
                  scale: 0.95 
                } : "float"}
                transition={{
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 },
                  y: showNavAvatar ? { duration: 6, repeat: Infinity, ease: "easeInOut" } : { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }}
              />
              
              {/* Floating skill bubbles */}
              {visibleSkills.map((skill, index) => (
                  <motion.div
                    key={`${skill}-${index}`}
                    className="absolute bg-primary text-primary-foreground text-xs px-3 py-1.5 rounded-full font-medium shadow-lg z-0"
                    style={bubblePositions[index]}
                    data-testid={`bubble-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                    initial={{ 
                      opacity: 0, 
                      scale: 0,
                      y: 20
                    }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      y: [-5, 5, -5],
                      transition: {
                        opacity: { duration: 0.5 },
                        scale: { duration: 0.5 },
                        y: { 
                          duration: 3 + Math.random() * 2, 
                          repeat: Infinity, 
                          ease: "easeInOut",
                          delay: bubblePositions[index].delay
                        }
                      }
                    }}
                    exit={{ 
                      opacity: 0, 
                      scale: 0,
                      transition: { duration: 0.3 }
                    }}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6" 
            data-testid="text-hero-title"
            variants={itemVariants}
          >
            Hi, I'm <motion.span 
              className="gradient-text"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            >
              Mehul Gohil
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto" 
            data-testid="text-hero-subtitle"
            variants={itemVariants}
          >
            Senior Software Engineer specializing in backend development with expertise in Golang, cloud technologies, and DevOps
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={containerVariants}
          >
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button 
                onClick={() => scrollToSection("projects")}
                className="gradient-bg text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                data-testid="button-view-work"
              >
                View My Work
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.div>
              </Button>
            </motion.div>
            
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button 
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border border-border px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
                data-testid="button-get-in-touch"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </motion.div>
            
            {/* Download CV button - temporarily hidden 
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button
                variant="ghost"
                onClick={handleDownloadCV}
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                data-testid="button-download-cv"
              >
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Download className="h-4 w-4" />
                </motion.div>
                Download CV
              </Button>
            </motion.div>
            */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
