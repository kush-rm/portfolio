import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Education.css';

const Education = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const educationData = [
        {
            degree: "Degree Name",
            institution: "University Name",
            duration: "Year - Year",
            description: "Relevant coursework and achievements"
        },
        {
            degree: "Degree Name",
            institution: "University Name",
            duration: "Year - Year",
            description: "Relevant coursework and achievements"
        }
    ];

    return (
        <section id="education" className="section education-section" ref={ref}>
            <div className="container">
                <motion.h2 
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Education
                </motion.h2>
                <div className="education-timeline">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item glass-card"
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h3>{edu.degree}</h3>
                                <p className="institution">{edu.institution}</p>
                                <p className="duration">{edu.duration}</p>
                                <p className="description">{edu.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
