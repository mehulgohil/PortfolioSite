import { motion } from "framer-motion";

export default function AboutSection() {
  const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Technologies", value: "15+" },
  ];

  const techCategories = [
    {
      title: "Backend", 
      techs: "Golang, Microservices, APIs",
    },
    {
      title: "Cloud & DevOps",
      techs: "AWS, Azure, Docker, Kubernetes",
    },
    {
      title: "Databases",
      techs: "PostgreSQL, MongoDB, Redis",
    },
    {
      title: "Frontend",
      techs: "React, Svelte, TypeScript",
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        staggerChildren: 0.15
      }
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: {
        duration: 0.6,
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

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.section 
      id="about" 
      className="py-20 border-t border-border/30 bg-gradient-to-b from-background to-secondary/20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: "100px" }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-4" 
            data-testid="text-about-title"
            variants={itemVariants}
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto" 
            data-testid="text-about-subtitle"
            variants={itemVariants}
          >
            Senior Software Engineer with expertise in backend development, cloud technologies, and DevOps practices
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={itemVariants}
        >
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed" 
              data-testid="text-about-description-1"
              variants={itemVariants}
            >
              I'm a backend specialist with a passion for building robust, scalable, and high-performance systems. 
              Based in Ahmedabad, I focus on server-side development using Golang, cloud infrastructure, and modern 
              DevOps practices to deliver reliable and efficient solutions.
            </motion.p>
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed" 
              data-testid="text-about-description-2"
              variants={itemVariants}
            >
              I specialize in Golang for backend development, with extensive experience in cloud platforms (AWS, Azure, GCP) 
              and DevOps automation. I believe in infrastructure as code, containerization, and CI/CD pipelines 
              to build systems that are not only performant but also maintainable and deployable at scale.
            </motion.p>
            <motion.div 
              className="grid grid-cols-2 gap-6"
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
              {techCategories.map((category) => (
                <motion.div 
                  key={category.title} 
                  data-testid={`tech-category-${category.title.toLowerCase()}`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <h4 className="font-semibold text-foreground mb-2">{category.title}</h4>
                  <p className="text-muted-foreground">{category.techs}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 gap-6"
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
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="bg-card border border-border rounded-lg p-6 text-center"
                data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
                variants={statVariants}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.2 }
                }}
                custom={index}
              >
                <motion.div 
                  className="text-3xl font-bold gradient-text mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6, ease: "backOut" }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
