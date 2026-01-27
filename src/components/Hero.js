import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import profileImage from '../assets/IMG_6407.jpeg';
import './Hero.css';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="hero">
            <motion.div 
                className="hero-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div 
                    className="profile-image-container"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <img src={profileImage} alt="Kush" className="profile-image" />
                    <div className="image-glow"></div>
                </motion.div>
                
                <motion.h1 className="hero-title" variants={itemVariants}>
                    Hi, I'm <span className="gradient-text">Kush</span>
                </motion.h1>
                
                <motion.p className="hero-subtitle" variants={itemVariants}>
                    Data Engineer & Developer
                </motion.p>
                
                <motion.div className="hero-buttons" variants={itemVariants}>
                    <motion.a 
                        href="#projects" 
                        className="btn btn-primary"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View My Work
                    </motion.a>
                    <motion.a 
                        href="#contact" 
                        className="btn btn-secondary"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get In Touch
                    </motion.a>
                </motion.div>
            </motion.div>
            
            <motion.div 
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="mouse"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
