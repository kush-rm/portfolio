import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="section about-section" ref={ref}>
            <div className="container">
                <motion.h2 
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    About Me
                </motion.h2>
                <motion.div 
                    className="about-content"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="about-text glass-card">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.4 }}
                        >
                            Welcome to my portfolio! I'm a passionate Data Engineer and Developer with expertise in 
                            building scalable data solutions and innovative applications. I love turning complex problems 
                            into simple, beautiful, and intuitive solutions.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.6 }}
                        >
                            With a strong foundation in data engineering, software development, and cloud technologies, 
                            I bring a unique perspective to every project. My goal is to create impactful solutions that 
                            make a difference.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.8 }}
                        >
                            When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                            projects, or sharing knowledge with the developer community.
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
