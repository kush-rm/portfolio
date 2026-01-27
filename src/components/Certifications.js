import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Certifications.css';

const Certifications = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const certificationsData = [
        {
            name: "Certification Name 1",
            issuer: "Issuing Organization",
            date: "Month Year",
            link: "#",
            icon: "🏆"
        },
        {
            name: "Certification Name 2",
            issuer: "Issuing Organization",
            date: "Month Year",
            link: "#",
            icon: "🎓"
        },
        {
            name: "Certification Name 3",
            issuer: "Issuing Organization",
            date: "Month Year",
            link: "#",
            icon: "⭐"
        }
    ];

    return (
        <section id="certifications" className="section certifications-section" ref={ref}>
            <div className="container">
                <motion.h2 
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Certifications
                </motion.h2>
                <div className="certifications-grid">
                    {certificationsData.map((cert, index) => (
                        <motion.div
                            key={index}
                            className="cert-card glass-card"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.05 }}
                        >
                            <motion.div 
                                className="cert-icon"
                                whileHover={{ rotate: 360, scale: 1.2 }}
                                transition={{ duration: 0.6 }}
                            >
                                {cert.icon}
                            </motion.div>
                            <h3>{cert.name}</h3>
                            <p className="cert-issuer">{cert.issuer}</p>
                            <p className="cert-date">{cert.date}</p>
                            <motion.a 
                                href={cert.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="cert-link"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Certificate
                            </motion.a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
