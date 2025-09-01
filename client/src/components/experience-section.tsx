import { motion } from "framer-motion";

export default function ExperienceSection() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 90 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.3,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      y: -60,
      transition: {
        duration: 0.9,
        ease: "easeIn"
      }
    }
  };

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  const experienceVariants = {
    hiddenLeft: { opacity: 0, x: -100 },
    hiddenRight: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const badgeVariants = {
    hidden: { scale: 0, rotate: 180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    }
  };
  const experiences = [
    {
      id: "talentica-senior",
      title: "Senior Software Engineer",
      company: "Talentica Software",
      companyUrl: "https://www.talentica.com/",
      duration: "Mar 2025 - Present",
      achievements: [
        "Led Kubernetes migration initiatives, dockerizing applications and optimizing deployments to reduce client infrastructure costs",
        "Researched and implemented advanced tooling for streamlined Kubernetes deployment processes",
        "Continued building high-performance distributed systems and scalable backend services",
      ],
    },
    {
      id: "talentica-software",
      title: "Software Engineer", 
      company: "Talentica Software",
      companyUrl: "https://www.talentica.com/",
      duration: "Mar 2023 - Mar 2025",
      achievements: [
        "Architected and implemented high-performance distributed systems handling real-time content delivery",
        "Developed scalable SDKs and APIs processing millions of requests daily",
        "Built full-stack applications using Golang for backend services and Svelte for frontend interfaces",
        "Implemented robust security measures and solved complex streaming and infrastructure challenges",
      ],
    },
    {
      id: "msci-golang",
      title: "Golang Developer",
      company: "Morgan Stanley Capital International (MSCI Inc)", 
      companyUrl: "https://www.msci.com/",
      duration: "Feb 2021 - Feb 2023",
      achievements: [
        "Designed and developed enterprise-grade applications in Go with focus on performance and security",
        "Created modular, reusable SDK components for internal developer tools",
        "Implemented secure API integrations with multiple third-party services",
        "Built scalable monitoring and metrics collection systems",
      ],
    },
    {
      id: "msci-iam",
      title: "IAM Engineer",
      company: "Morgan Stanley Capital International (MSCI Inc)",
      companyUrl: "https://www.msci.com/",
      duration: "Jun 2020 - Jan 2021",
      achievements: [
        "Managed full lifecycle of cutting-edge automation projects, meeting all milestones",
        "Conducted feasibility studies and risk assessments, mitigating potential project risks",
        "Collaborated with clients, leading to a 25% increase in customer satisfaction",
      ],
    },
  ];

  return (
    <motion.section 
      id="experience" 
      className="py-20 bg-secondary/30 border-t border-border/40 border-b border-border/40"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: "180px" }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" variants={experienceVariants}>
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-4" 
            data-testid="text-experience-title"
            variants={experienceVariants}
          >
            Work <span className="gradient-text">Experience</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto" 
            data-testid="text-experience-subtitle"
            variants={experienceVariants}
          >
            My professional journey and key achievements
          </motion.p>
        </motion.div>

        <motion.div className="max-w-4xl mx-auto" variants={sectionVariants}>
          <div className="relative">
            {/* Timeline line */}
            <motion.div 
              className="absolute left-8 top-0 bottom-0 w-0.5 timeline-line origin-top"
              variants={timelineVariants}
            ></motion.div>
            
            {experiences.map((experience, index) => (
              <motion.div 
                key={experience.id}
                className="relative flex items-start mb-12"
                data-testid={`experience-${experience.id}`}
                initial={index % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={experienceVariants}
                whileHover={{ 
                  scale: 1.02,
                  x: index % 2 === 0 ? 10 : -10,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="flex-shrink-0 w-16 h-16 gradient-bg rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg relative z-10"
                  variants={badgeVariants}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  {index + 1}
                </motion.div>
                <motion.div 
                  className="ml-8 bg-card border border-border rounded-lg p-6 w-full"
                  variants={experienceVariants}
                  whileHover={{
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold" data-testid={`text-experience-title-${experience.id}`}>
                        {experience.title}
                      </h3>
                      {experience.companyUrl ? (
                        <a 
                          href={experience.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary font-medium hover:text-primary/80 transition-colors"
                          data-testid={`link-experience-company-${experience.id}`}
                        >
                          {experience.company}
                        </a>
                      ) : (
                        <p className="text-primary font-medium" data-testid={`text-experience-company-${experience.id}`}>
                          {experience.company}
                        </p>
                      )}
                    </div>
                    <span className="text-muted-foreground" data-testid={`text-experience-duration-${experience.id}`}>
                      {experience.duration}
                    </span>
                  </div>
                  <motion.ul 
                    className="space-y-2 text-muted-foreground"
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
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <motion.li 
                        key={achievementIndex}
                        data-testid={`text-experience-achievement-${experience.id}-${achievementIndex}`}
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: {
                            opacity: 1,
                            x: 0,
                            transition: { duration: 0.4 }
                          }
                        }}
                      >
                        • {achievement}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
