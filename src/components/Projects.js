import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const projectsData = [
        {
            title: "Project Title 1",
            description: "Short description of the project, what it does, and technologies used.",
            image: "https://via.placeholder.com/400x250/6366f1/ffffff?text=Project+1",
            github: "https://github.com/yourusername/project1",
            technologies: ["Python", "React", "AWS"]
        },
        {
            title: "Project Title 2",
            description: "Short description of the project, what it does, and technologies used.",
            image: "https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Project+2",
            github: "https://github.com/yourusername/project2",
            technologies: ["JavaScript", "Node.js", "MongoDB"]
        },
        {
            title: "Project Title 3",
            description: "Short description of the project, what it does, and technologies used.",
            image: "https://via.placeholder.com/400x250/ec4899/ffffff?text=Project+3",
            github: "https://github.com/yourusername/project3",
            technologies: ["Python", "Django", "PostgreSQL"]
        }
    ];

    return (
        <section id="projects" className="section projects-section" ref={ref}>
            <div className="container">
                <motion.h2 
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Projects
                </motion.h2>
                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card glass-card"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            whileHover={{ y: -10, scale: 1.02 }}
                        >
                            <div className="project-image">
                                <motion.img 
                                    src={project.image} 
                                    alt={project.title}
                                    animate={hoveredIndex === index ? { scale: 1.1 } : { scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <motion.div 
                                    className="project-overlay"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.a 
                                        href={project.github} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="project-link"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <FaGithub size={24} />
                                    </motion.a>
                                </motion.div>
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tech">
                                    {project.technologies.map((tech, techIndex) => (
                                        <motion.span
                                            key={techIndex}
                                            className="tech-tag"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
