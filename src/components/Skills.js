import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 'Intermediário' },
        { name: 'JavaScript', level: 'Intermediário' },
        { name: 'HTML/CSS', level: 'Intermediário' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 'Básico' },
        { name: 'Java', level: 'Intermediário' },
        { name: 'Spring Boot', level: 'Intermediário' },
        { name: 'Oracle DB', level: 'Básico' },
        { name: 'REST APIs', level: 'Básico' }
      ]
    },
    {
      title: 'Ferramentas',
      skills: [
        { name: 'Git', level: 'Intermediário' },
        { name: 'GitLab', level: 'Intermediário' },
        { name: 'Docker', level: 'Básico' },
        { name: 'AWS', level: 'Básico' },
        { name: 'IntelliJ', level: 'Intermediário' },
        { name: 'Eclipse', level: 'Intermediário' },
        { name: 'VS Code', level: 'Intermediário' }
      ]
    }
  ];

  // Função para determinar a largura da barra baseada no nível
  const getLevelWidth = (level) => {
    switch(level) {
      case 'Básico': return '33%';
      case 'Intermediário': return '66%';
      case 'Avançado': return '100%';
      default: return '0%';
    }
  };

  // Função para determinar a cor baseada no nível
  const getLevelColor = (level) => {
    switch(level) {
      case 'Básico': return 'basic';
      case 'Intermediário': return 'intermediate';
      case 'Avançado': return 'advanced';
      default: return '';
    }
  };

  return (
      <div className="skills">
        <div className="container">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
          >
            <div className="section-label">
              <span className="label-number">03</span>
              <span className="label-text">Habilidades</span>
            </div>

            <h2 className="skills-title">
              Stack
              <br />
              <span className="accent-text">Tecnológico</span>
            </h2>

            <div className="skills-grid">
              {skillCategories.map((category, categoryIndex) => (
                  <motion.div
                      key={category.title}
                      className="skill-category card"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  >
                    <h3 className="category-title">{category.title}</h3>
                    <div className="skills-list">
                      {category.skills.map((skill, index) => (
                          <div key={skill.name} className="skill-item">
                            <div className="skill-header">
                              <span className="skill-name">{skill.name}</span>
                              <span className={`skill-level ${getLevelColor(skill.level)}`}>
                          {skill.level}
                        </span>
                            </div>
                            <div className="skill-bar">
                              <motion.div
                                  className={`skill-bar-fill ${getLevelColor(skill.level)}`}
                                  initial={{ width: 0 }}
                                  whileInView={{ width: getLevelWidth(skill.level) }}
                                  viewport={{ once: true }}
                                  transition={{
                                    duration: 1,
                                    delay: 0.3 + categoryIndex * 0.1 + index * 0.05,
                                    ease: "easeOut"
                                  }}
                              />
                            </div>
                          </div>
                      ))}
                    </div>
                  </motion.div>
              ))}
            </div>

            <motion.div
                className="skills-extras"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="extras-section">
                <h4 className="extras-title">Metodologias</h4>
                <div className="extras-tags">
                  <span className="tag">Scrum</span>
                </div>
              </div>

              <div className="extras-section">
                <h4 className="extras-title">Idiomas</h4>
                <div className="extras-tags">
                  <span className="tag">Português (Nativo)</span>
                  <span className="tag">Inglês (Básico)</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
  );
};

export default Skills;