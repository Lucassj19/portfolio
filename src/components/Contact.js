import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulação de envio
    setStatus('sending');
    
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      title: 'Lucas',
      value: 'luca_floripa18@live.com',
      link: 'luca_floripa18@live.com',
      icon: '✉'
    },
    {
      title: 'WhatsApp',
      value: 'Enviar mensagem',
      link: 'https://wa.me/5548988800807?text=Olá!%20Vi%20seu%20portfólio',  // ← Link do WhatsApp
      icon: '💬'
    },
    {
      title: 'Localização',
      value: 'São José, SC - Brasil',
      link: '#',
      icon: '📍'
    }
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Lucassj19', icon: 'GH' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/lucas-silva-728743163/', icon: 'LI' }
  ];

  return (
    <div className="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">
            <span className="label-number">04</span>
            <span className="label-text">Contato</span>
          </div>

          <h2 className="contact-title">
            Vamos trabalhar
            <br />
            <span className="accent-text">juntos?</span>
          </h2>

          <div className="contact-grid">
            <div className="contact-info">
              <p className="contact-description">
                Estou sempre aberto a discutir novos projetos, ideias criativas ou 
                oportunidades de fazer parte da sua visão. Entre em contato!
              </p>

              <div className="info-cards">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    className="info-card"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <span className="info-icon">{info.icon}</span>
                    <div className="info-content">
                      <div className="info-title">{info.title}</div>
                      <div className="info-value">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="social-links">
                <div className="social-title">Redes Sociais</div>
                <div className="social-grid">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="social-icon">{social.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
