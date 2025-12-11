import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
    const education = [
        {
            degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
            institution: 'Uninter',
            period: '2022 - 2026',
            status: 'Cursando',
            description: 'Formação focada em desenvolvimento de software, metodologias ágeis e gestão de projetos.'
        },
        {
            degree: 'Processos Gerenciais',
            institution: 'Uninter',
            period: '2019 - 2026',
            status: 'Cursando',
            description: 'Formação voltada para gestão de processos, planejamento estratégico, tomadas de decisão, análise de desempenho e otimização operacional.'
        }
    ];

    const certifications = [
        'Java OO - Alura',
        'Java Collections - Alura',
        'Java e java.io Streams, Readers e Writers - Alura',
        'Desenvolvimeto Front-End React - Alura',
        'Desenvolvimeto Front-End Node.js - Alura',
        'Spring boot 3 - Alura ',
        'SQL com Oracle Database - Alura ' ,
        'Spring MVC - Alura ',
        'Java e refatoração - Alura '
    ];

    return (
        <div className="education">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="section-label">
                        <span className="label-number">02</span>
                        <span className="label-text">Formação</span>
                    </div>

                    <h2 className="education-title">
                        Formação
                        <br />
                        <span className="accent-text">Acadêmica</span>
                    </h2>

                    <div className="education-grid">
                        {education.map((item, index) => (
                            <motion.div
                                key={index}
                                className="education-card card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="education-header">
                                    <div>
                                        <h3 className="education-degree">{item.degree}</h3>
                                        <p className="education-institution">{item.institution}</p>
                                    </div>
                                    <span className={`education-status ${item.status === 'Concluído' ? 'completed' : 'ongoing'}`}>
                    {item.status}
                  </span>
                                </div>

                                <p className="education-period">{item.period}</p>
                                <p className="education-description">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {certifications.length > 0 && (
                        <motion.div
                            className="certifications-section"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <h3 className="certifications-title">Certificações</h3>
                            <div className="certifications-grid">
                                {certifications.map((cert, index) => (
                                    <motion.div
                                        key={index}
                                        className="certification-item"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                    >
                                        <span className="cert-icon">✓</span>
                                        <span className="cert-name">{cert}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default Education;