import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { SiMedium } from "react-icons/si";
import { motion } from "framer-motion";

export default function ContactSection() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.4,
        ease: "easeOut",
        staggerChildren: 0.25
      }
    },
    exit: {
      opacity: 0,
      y: -70,
      transition: {
        duration: 1.0,
        ease: "easeIn"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const contactCardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "backOut" }
    }
  };

  const contactInfo = {
    email: "mehulgohil75@gmail.com",
    phone: "+91 8080408057",
    location: "Ahmedabad, Gujarat, India",
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/mehul-gohil-9345b1134/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/mehulgohil", label: "GitHub" },
    { icon: SiMedium, href: "https://medium.com/@mehulgohil75", label: "Medium" },
    { icon: Mail, href: `mailto:${contactInfo.email}`, label: "Email" },
  ];

  return (
    <motion.section 
      id="contact" 
      className="py-20 border-t border-border/30 bg-gradient-to-b from-secondary/20 to-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: "200px" }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-4" 
            data-testid="text-contact-title"
            variants={itemVariants}
          >
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto" 
            data-testid="text-contact-subtitle"
            variants={itemVariants}
          >
            Let's discuss your next project or just say hello
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6" data-testid="text-connect-title">Let's Connect</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8" data-testid="text-connect-description">
                I'm always interested in hearing about new opportunities, interesting projects, 
                or just having a chat about technology. Feel free to reach out!
              </p>
            </div>

            {/* Contact info in one line - icons and details only */}
            <motion.div 
              className="flex flex-col md:flex-row items-start md:items-center justify-center gap-6 md:gap-12"
              variants={sectionVariants}
            >
              <motion.div 
                className="flex items-center gap-3 w-full md:w-auto justify-start" 
                data-testid="contact-info-email"
                variants={contactCardVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 10,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Mail className="h-4 w-4 text-primary-foreground" />
                </motion.div>
                <motion.a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-primary hover:text-primary/80 transition-colors font-medium"
                  data-testid="link-email"
                  whileHover={{ scale: 1.05 }}
                >
                  {contactInfo.email}
                </motion.a>
              </motion.div>

              <motion.div 
                className="flex items-center gap-3 w-full md:w-auto justify-start" 
                data-testid="contact-info-phone"
                variants={contactCardVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: -10,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Phone className="h-4 w-4 text-primary-foreground" />
                </motion.div>
                <motion.a 
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="text-primary hover:text-primary/80 transition-colors font-medium"
                  data-testid="link-phone"
                  whileHover={{ scale: 1.05 }}
                >
                  {contactInfo.phone}
                </motion.a>
              </motion.div>

              <motion.div 
                className="flex items-center gap-3 w-full md:w-auto justify-start" 
                data-testid="contact-info-location"
                variants={contactCardVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 10,
                    transition: { duration: 0.2 }
                  }}
                >
                  <MapPin className="h-4 w-4 text-primary-foreground" />
                </motion.div>
                <p className="text-muted-foreground font-medium">{contactInfo.location}</p>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <motion.h4 
                className="font-semibold mb-4" 
                data-testid="text-follow-title"
                variants={itemVariants}
              >
                Connect With Me
              </motion.h4>
              <motion.div 
                className="flex gap-4"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1
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
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-muted/50 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      data-testid={`link-social-${social.label.toLowerCase()}`}
                      variants={socialVariants}
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 10,
                        backgroundColor: "hsl(var(--primary))",
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <motion.div
                        animate={{ 
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{ 
                          duration: 4,
                          repeat: Infinity,
                          delay: index * 0.5
                        }}
                      >
                        <IconComponent className="h-5 w-5" />
                      </motion.div>
                    </motion.a>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
