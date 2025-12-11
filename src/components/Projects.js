import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Plataforma completa de e-commerce com painel administrativo, carrinho de compras e integração de pagamento.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'web',
      image: '🛒',
      link: '#'
    },
    {
      id: 2,
      title: 'Task Manager App',
      description: 'Aplicativo de gerenciamento de tarefas com drag-and-drop, categorias e notificações em tempo real.',
      tags: ['React', 'Firebase', 'Tailwind'],
      category: 'web',
      image: '✓',
      link: '#'
    },
    {
      id: 3,
      title: 'Portfolio Dashboard',
      description: 'Dashboard interativo para visualização de métricas e análise de dados em tempo real.',
      tags: ['React', 'Chart.js', 'API'],
      category: 'dashboard',
      image: '📊',
      link: '#'
    },
    {
      id: 4,
      title: 'Social Media API',
      description: 'API RESTful completa para rede social com autenticação, posts, comentários e likes.',
      tags: ['Node.js', 'Express', 'PostgreSQL'],
      category: 'backend',
      image: '🔗',
      link: '#'
    },
    {
      id: 5,
      title: 'Weather App',
      description: 'Aplicativo de previsão do tempo com geolocalização e dados em tempo real.',
      tags: ['React', 'API', 'CSS'],
      category: 'web',
      image: '🌤️',
      link: '#'
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'Aplicativo de chat em tempo real com rooms, mensagens privadas e notificações.',
      tags: ['React', 'Socket.io', 'Node.js'],
      category: 'web',
      image: '💬',
      link: '#'
    }
  ];

  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'web', label: 'Web' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'backend', label: 'Backend' }
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  return (
    <div className="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">
            <span className="label-number">02</span>
            <span className="label-text">Projetos</span>
          </div>

          <h2 className="projects-title">
            Trabalhos
            <br />
            <span className="accent-text">Recentes</span>
          </h2>

          <div className="projects-filters">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`filter-btn ${selectedFilter === filter.id ? 'active' : ''}`}
                onClick={() => setSelectedFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <motion.div 
            className="projects-grid"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <div className="project-image">
                  <span className="project-emoji">{project.image}</span>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>

                  <a href={project.link} className="project-link">
                    Ver Projeto
                    <span className="link-arrow">→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
