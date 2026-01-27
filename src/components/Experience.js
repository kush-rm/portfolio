import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Experience.css';

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const experienceData = [
        {
            title: "Job Title",
            company: "Company Name",
            duration: "Month Year - Present",
            responsibilities: [
                "Responsibility or achievement",
                "Responsibility or achievement",
                "Responsibility or achievement"
            ]
        },
        {
            title: "Job Title",
            company: "Company Name",
            duration: "Month Year - Month Year",
            responsibilities: [
                "Responsibility or achievement",
                "Responsibility or achievement",
                "Responsibility or achievement"
            ]
        }
    ];

    return (
        <section id="experience" className="section experience-section" ref={ref}>
            <div className="container">
                <motion.h2 
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Professional Experience
                </motion.h2>
                <div className="experience-timeline">
                    {experienceData.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item glass-card"
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h3>{exp.title}</h3>
                                <p className="company">{exp.company}</p>
                                <p className="duration">{exp.duration}</p>
                                <ul className="responsibilities">
                                    {exp.responsibilities.map((resp, idx) => (
                                        <li key={idx}>{resp}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
