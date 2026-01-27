import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <motion.footer 
            className="footer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <div className="container">
                <p>&copy; {currentYear} Kush. All rights reserved.</p>
            </div>
        </motion.footer>
    );
};

export default Footer;
