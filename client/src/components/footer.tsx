import { Linkedin, Github, Mail } from "lucide-react";
import { SiMedium } from "react-icons/si";
import { motion } from "framer-motion";

export default function Footer() {
  const footerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: "easeOut",
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut"
      }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -360, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: "backOut",
        type: "spring",
        stiffness: 200
      }
    }
  };

  const dividerVariants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/mehul-gohil-9345b1134/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/mehulgohil", label: "GitHub" },
    { icon: SiMedium, href: "https://medium.com/@mehulgohil75", label: "Medium" },
    { icon: Mail, href: "mailto:mehulgohil75@gmail.com", label: "Email" },
  ];

  return (
    <motion.footer 
      className="bg-secondary/50 border-t border-border py-12" 
      data-testid="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={footerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center" variants={footerVariants}>
          <motion.div 
            className="text-2xl font-bold gradient-text mb-4" 
            data-testid="text-footer-name"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              textShadow: "0 0 20px hsl(var(--primary) / 0.5)",
              transition: { duration: 0.2 }
            }}
          >
            Mehul Gohil
          </motion.div>
          <motion.p 
            className="text-muted-foreground mb-6" 
            data-testid="text-footer-description"
            variants={itemVariants}
          >
            Senior Software Engineer specializing in backend development, cloud technologies, and DevOps
          </motion.p>
          <motion.div 
            className="flex justify-center gap-6 mb-8"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid={`link-footer-${social.label.toLowerCase()}`}
                  variants={socialVariants}
                  whileHover={{ 
                    scale: 1.3,
                    color: "hsl(var(--primary))",
                    rotate: 15,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.8 }}
                >
                  <motion.div
                    animate={{ 
                      y: [0, -3, 0],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  >
                    <IconComponent className="h-6 w-6" />
                  </motion.div>
                </motion.a>
              );
            })}
          </motion.div>
          <motion.div 
            className="border-t border-border pt-8"
            variants={dividerVariants}
          >
            <motion.p 
              className="text-muted-foreground text-sm" 
              data-testid="text-footer-copyright"
              variants={itemVariants}
            >
              © 2024 Mehul Gohil. All rights reserved. | Built with passion and modern web technologies.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
