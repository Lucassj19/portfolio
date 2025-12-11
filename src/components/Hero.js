import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <div className="hero">
      <div className="hero-bg-grid"></div>
      
      <motion.div 
        className="hero-content container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-label" variants={itemVariants}>
          <span className="label-line"></span>
          <span>Desenvolvedor Jr.</span>
        </motion.div>

        <motion.h1 className="hero-title" variants={itemVariants}>
          Lucas Silva
          <br />
          <span className="accent-text">Experiências</span>
          <br />
          Digitais
        </motion.h1>

        <motion.p className="hero-description" variants={itemVariants}>
          Desenvolvedor apaixonado por transformar ideias em código limpo e funcional.
          Linguagens - Java - React - Node Js
        </motion.p>

        <motion.div className="hero-actions" variants={itemVariants}>
          <button className="btn" onClick={() => {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
          }}>
            Contato
          </button>
        </motion.div>

        <motion.div className="hero-scroll" variants={itemVariants}>
          <span className="scroll-text">SCROLL</span>
          <div className="scroll-indicator">
            <div className="scroll-line"></div>
          </div>
        </motion.div>
      </motion.div>

      <div className="hero-decoration">
        <div className="decoration-box decoration-box-1"></div>
        <div className="decoration-box decoration-box-2"></div>
      </div>
    </div>
  );
};

export default Hero;
