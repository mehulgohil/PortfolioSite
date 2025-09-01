import { Code, Server, Settings, Database, Brain } from "lucide-react";
import { motion } from "framer-motion";

export default function SkillsSection() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: "easeOut",
        staggerChildren: 0.12
      }
    },
    exit: {
      opacity: 0,
      y: -40,
      transition: {
        duration: 0.8,
        ease: "easeIn"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 }
    }
  };
  const skillCategories = [
    {
      title: "Backend Development",
      icon: Server,
      skills: ["Golang", "Python", "REST APIs", "Microservices", "GraphQL", "gRPC"],
    },
    {
      title: "Databases & Storage",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Database Design", "Query Optimization"],
    },
    {
      title: "Cloud & DevOps",
      icon: Settings,
      skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "CI/CD"],
    },
    {
      title: "AI & Tools",
      icon: Brain,
      skills: ["ChatGPT", "Claude", "GitHub Copilot", "Replit AI", "Gemini", "AI-Assisted Development"],
    },
  ];


  return (
    <motion.section 
      id="skills" 
      className="py-20 bg-secondary/30 border-t border-border/40 border-b border-border/40"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: "150px" }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" variants={cardVariants}>
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-4" 
            data-testid="text-skills-title"
            variants={cardVariants}
          >
            Technical <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto" 
            data-testid="text-skills-subtitle"
            variants={cardVariants}
          >
            Backend development expertise with cloud and DevOps specialization
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          variants={sectionVariants}
        >
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div 
                key={category.title}
                className="bg-card border border-border rounded-lg p-6"
                data-testid={`skill-category-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="text-center mb-6"
                  variants={cardVariants}
                >
                  <motion.div 
                    className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ 
                      rotate: 360,
                      transition: { duration: 0.6 }
                    }}
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        delay: categoryIndex * 0.5
                      }}
                    >
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </motion.div>
                  </motion.div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </motion.div>
                <motion.div 
                  className="space-y-3"
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
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="skill-badge bg-muted/50 px-4 py-2 rounded-lg text-center cursor-pointer"
                      data-testid={`skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                      variants={skillVariants}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "hsl(var(--primary) / 0.1)",
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
