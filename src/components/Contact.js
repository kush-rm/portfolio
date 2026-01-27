import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaLinkedin, FaPhone, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const contactData = [
        {
            icon: <FaLinkedin />,
            title: "LinkedIn",
            link: "https://linkedin.com/in/yourprofile",
            text: "linkedin.com/in/yourprofile"
        },
        {
            icon: <FaPhone />,
            title: "Phone",
            link: "tel:+1234567890",
            text: "+1 (234) 567-890"
        },
        {
            icon: <FaGithub />,
            title: "GitHub",
            link: "https://github.com/yourusername",
            text: "github.com/yourusername"
        }
    ];

    return (
        <section id="contact" className="section contact-section" ref={ref}>
            <div className="container">
                <motion.h2 
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Get In Touch
                </motion.h2>
                <motion.p 
                    className="contact-intro"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.2 }}
                >
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </motion.p>
                <motion.div 
                    className="contact-info glass-card"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    {contactData.map((contact, index) => (
                        <motion.div
                            key={index}
                            className="contact-item"
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.6 + index * 0.1 }}
                            whileHover={{ x: 10 }}
                        >
                            <motion.div 
                                className="contact-icon"
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                            >
                                {contact.icon}
                            </motion.div>
                            <div className="contact-details">
                                <h3>{contact.title}</h3>
                                <a href={contact.link} target="_blank" rel="noopener noreferrer">
                                    {contact.text}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
