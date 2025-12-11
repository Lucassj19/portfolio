import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import profileImage from '../assets/profile.png';

const About = () => {
  const stats = [
    { number: '2+', label: 'Anos de Experiência' },
  ];

  return (
      <div className="about">
        <div className="container">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
          >
            <div className="section-label">
              <span className="label-number">01</span>
              <span className="label-text">Sobre Mim</span>
            </div>

            <div className="about-grid">
              <div className="about-content">
                <h2 className="about-title">
                  Construindo o futuro
                  <br />
                  <span className="accent-text">uma linha de código</span>
                  <br />
                  por vez
                </h2>

                <div className="about-text">
                  <p>
                    Sou um desenvolvedor full stack Jr apaixonado por criar soluções digitais
                    que fazem a diferença. Com experiência em desenvolvimento web moderno,
                    transformo conceitos complexos em interfaces intuitivas e funcionais.
                  </p>
                  <p>
                    Minha jornada na programação começou com curiosidade e evoluiu para uma
                    paixão por resolver problemas através da tecnologia. Trabalho com metodologias
                    ágeis e sempre busco aprender novas tecnologias.
                  </p>
                  <p>
                    Além do código, valorizo a colaboração, comunicação clara e a entrega de
                    produtos que realmente atendem às necessidades dos usuários.
                  </p>
                </div>
              </div>

              <div className="about-right">
                <motion.div
                    className="about-image"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <img src={profileImage} alt="Lucas Silva" />
                  <div className="image-border"></div>
                </motion.div>

                <div className="about-stats">
                  {stats.map((stat, index) => (
                      <motion.div
                          key={index}
                          className="stat-card"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <div className="stat-number">{stat.number}</div>
                        <div className="stat-label">{stat.label}</div>
                        <div className="stat-bar">
                          <motion.div
                              className="stat-bar-fill"
                              initial={{ width: 0 }}
                              whileInView={{ width: '100%' }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                          ></motion.div>
                        </div>
                      </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
  );
};

export default About;