import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 70 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.1,
        ease: "easeOut",
        staggerChildren: 0.18
      }
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.7,
        ease: "easeIn"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
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

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    }
  };
  const projects = [
    {
      id: "curl2-terraform",
      title: "Curl2 Terraform Module",
      description: "Terraform module to curl JSON requests with support for token generation from Identity Providers like Azure AD and Auth0. This popular module has achieved over 1.1 million downloads as a Terraform provider.",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
      technologies: ["Terraform", "REST APIs", "Azure AD", "Auth0"],
      githubUrl: "https://github.com/mehulgohil/terraform-provider-curl2",
      company: "Talentica Software",
      downloads: "1.1M+ downloads",
    },
    {
      id: "shortify",
      title: "shorti.fy",
      description: "A high-performance URL shortening service built with modern cloud-native architecture. Features scalable design with containerized deployment and automated CI/CD pipeline.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
      technologies: ["Golang", "React.js", "Docker", "Amazon EKS", "CI/CD"],
      githubUrl: "https://github.com/mehulgohil/shorti.fy",
      company: "Talentica Software",
    },
    {
      id: "go-bffauth",
      title: "go-bffauth",
      description: "BFF Auth Pattern implemented in Go. A comprehensive authentication solution following the Backend-for-Frontend pattern with secure token management and seamless integration capabilities.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
      technologies: ["Golang", "Authentication", "BFF Pattern", "Security", "JWT"],
      githubUrl: "https://github.com/mehulgohil/go-bffauth",
      blogUrl: "https://www.talentica.com/blogs/backend-for-frontend-bff-authentication-what-it-is-and-how-to-implement-it-in-go/",
      company: "Talentica Software",
    },
  ];

  return (
    <motion.section 
      id="projects" 
      className="py-20 border-t border-border/30 bg-gradient-to-b from-secondary/20 to-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: "120px" }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" variants={cardVariants}>
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-4" 
            data-testid="text-projects-title"
            variants={cardVariants}
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto" 
            data-testid="text-projects-subtitle"
            variants={cardVariants}
          >
            A showcase of my recent work and side projects
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={sectionVariants}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="bg-card border border-border rounded-lg overflow-hidden card-hover cursor-pointer"
              data-testid={`card-project-${project.id}`}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                y: -8,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.3 }
              }}
              onClick={() => window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
            >
              <motion.img 
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                data-testid={`img-project-${project.id}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold" data-testid={`text-project-title-${project.id}`}>
                    {project.title}
                  </h3>
                  {project.downloads && (
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full font-medium">
                      {project.downloads}
                    </span>
                  )}
                </div>
                {project.company && (
                  <p className="text-sm text-primary font-medium mb-2" data-testid={`text-project-company-${project.id}`}>
                    @ {project.company}
                  </p>
                )}
                <p className="text-muted-foreground mb-4" data-testid={`text-project-description-${project.id}`}>
                  {project.description}
                </p>
                <motion.div 
                  className="flex flex-wrap gap-2 mb-4"
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
                  {project.technologies.map((tech) => (
                    <motion.div key={tech} variants={badgeVariants}>
                      <Badge 
                        variant="secondary" 
                        className="bg-primary/20 text-primary"
                        data-testid={`badge-tech-${tech.toLowerCase().replace(/\s+/g, '-')}-${project.id}`}
                      >
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
                <div className="flex gap-4">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
                    data-testid={`link-github-${project.id}`}
                  >
                    <Github className="h-4 w-4" />
                    View on GitHub
                  </a>
                  {project.blogUrl && (
                    <a 
                      href={project.blogUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
                      data-testid={`link-blog-${project.id}`}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Read Blog
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          variants={cardVariants}
        >
          <a 
            href="https://github.com/mehulgohil"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="gradient-bg text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                data-testid="button-view-all-projects"
              >
                View All Projects on GitHub
              </Button>
            </motion.div>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
