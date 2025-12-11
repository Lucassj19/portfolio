import React from 'react';
import { motion } from 'framer-motion';
import './Navigation.css';

const Navigation = ({ activeSection }) => {
  const navItems = [
    { id: 'hero', label: '00' },
    { id: 'about', label: '01' },
      { id: 'education', label: '02' },
    { id: 'skills', label: '03' },
    { id: 'contact', label: '04' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navigation">
      <motion.div 
        className="nav-logo"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <span className="logo-bracket">{'<'}</span>
        <span className="logo-text">DEV</span>
        <span className="logo-bracket">{'/>'}</span>
      </motion.div>

      <motion.ul 
        className="nav-items"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {navItems.map((item, index) => (
          <li 
            key={item.id}
            className={activeSection === item.id ? 'active' : ''}
          >
            <button
              onClick={() => scrollToSection(item.id)}
              className="nav-button"
            >
              <span className="nav-number">{item.label}</span>
            </button>
          </li>
        ))}
      </motion.ul>

      <motion.div 
        className="nav-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="indicator-line"></div>
      </motion.div>
    </nav>
  );
};

export default Navigation;
