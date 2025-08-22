import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const ProjectsSection = styled.section`
  padding: 100px 0;
  background: #0f0f0f;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.1rem;
  color: #9ca3af;
  text-align: center;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const FilterButtons = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const FilterButton = styled.button`
  padding: 0.5rem 1.5rem;
  border: 2px solid #3b82f6;
  background: ${props => props.active ? '#3b82f6' : 'transparent'};
  color: ${props => props.active ? '#ffffff' : '#3b82f6'};
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  
  &:hover {
    background: #3b82f6;
    color: #ffffff;
    transform: translateY(-2px);
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(59, 130, 246, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.1);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(59, 130, 246, 0.1);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.1"/><circle cx="10" cy="60" r="0.5" fill="white" opacity="0.1"/><circle cx="90" cy="40" r="0.5" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  }
  
  .icon {
    font-size: 3rem;
    color: white;
    z-index: 1;
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  color: #ffffff;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: #d1d5db;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ProjectTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechnologyTag = styled.span`
  background: rgba(59, 130, 246, 0.2);
  color: #3b82f6;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${props => props.primary ? '#3b82f6' : 'transparent'};
  color: ${props => props.primary ? '#ffffff' : '#3b82f6'};
  border: 2px solid #3b82f6;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background: #3b82f6;
    color: #ffffff;
    transform: translateY(-2px);
  }
`;

const EmptyState = styled(motion.div)`
  text-align: center;
  padding: 3rem;
  color: #9ca3af;
  
  .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #3b82f6;
  }
`;

const Projects = ({ projects = [] }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [filter, setFilter] = useState('all');

  // Projets par défaut si aucun n'est fourni
  const defaultProjects = [
    {
      title: 'E-commerce Platform',
      description: 'Plateforme e-commerce complète avec React et Node.js, incluant un système de paiement, gestion des produits et panier d\'achat.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/reda/ecommerce',
      live: 'https://ecommerce-demo.com',
      category: 'fullstack'
    },
    {
      title: 'Task Management App',
      description: 'Application de gestion de tâches avec authentification, tableau de bord interactif et notifications en temps réel.',
      technologies: ['React', 'Express', 'JWT', 'PostgreSQL'],
      github: 'https://github.com/reda/task-manager',
      live: 'https://task-manager-demo.com',
      category: 'fullstack'
    },
    {
      title: 'Weather Dashboard',
      description: 'Tableau de bord météo avec API externe, graphiques interactifs et prévisions sur 7 jours.',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      github: 'https://github.com/reda/weather-dashboard',
      live: 'https://weather-demo.com',
      category: 'frontend'
    },
    {
      title: 'Portfolio Website',
      description: 'Site portfolio moderne avec animations fluides, design responsive et formulaire de contact fonctionnel.',
      technologies: ['React', 'Styled Components', 'Framer Motion'],
      github: 'https://github.com/reda/portfolio',
      live: 'https://portfolio-demo.com',
      category: 'frontend'
    },
    {
      title: 'REST API Service',
      description: 'API REST complète avec authentification, documentation Swagger et tests automatisés.',
      technologies: ['Node.js', 'Express', 'JWT', 'MongoDB'],
      github: 'https://github.com/reda/rest-api',
      live: 'https://api-demo.com',
      category: 'backend'
    },
    {
      title: 'Chat Application',
      description: 'Application de chat en temps réel avec WebSockets, salons multiples et historique des messages.',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      github: 'https://github.com/reda/chat-app',
      live: 'https://chat-demo.com',
      category: 'fullstack'
    }
  ];

  const displayProjects = projects.length > 0 ? projects : defaultProjects;

  const filteredProjects = filter === 'all' 
    ? displayProjects 
    : displayProjects.filter(project => project.category === filter);

  const categories = [
    { id: 'all', name: 'Tous' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'fullstack', name: 'Full Stack' }
  ];

  return (
    <ProjectsSection id="projects" ref={ref}>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Mes Projets
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Découvrez mes réalisations et projets personnels
        </SectionSubtitle>
        
        <FilterButtons
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {categories.map(category => (
            <FilterButton
              key={category.id}
              active={filter === category.id}
              onClick={() => setFilter(category.id)}
            >
              {category.name}
            </FilterButton>
          ))}
        </FilterButtons>
        
        {filteredProjects.length > 0 ? (
          <ProjectsGrid>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <ProjectImage>
                  <FaCode className="icon" />
                </ProjectImage>
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectTechnologies>
                    {project.technologies && project.technologies.map(tech => (
                      <TechnologyTag key={tech}>{tech}</TechnologyTag>
                    ))}
                  </ProjectTechnologies>
                  <ProjectLinks>
                    {project.github && (
                      <ProjectLink
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub size={16} />
                        Code
                      </ProjectLink>
                    )}
                    {project.live && (
                      <ProjectLink
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        primary
                      >
                        <FaExternalLinkAlt size={16} />
                        Demo
                      </ProjectLink>
                    )}
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        ) : (
          <EmptyState
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <FaCode className="icon" />
            <h3>Aucun projet trouvé</h3>
            <p>Essayez de changer les filtres pour voir plus de projets.</p>
          </EmptyState>
        )}
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
