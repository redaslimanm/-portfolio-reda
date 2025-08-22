import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ExperienceSection = styled.section`
  padding: 100px 0;
  background: #0a0a0a;
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

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, #3b82f6, #1d4ed8);
    transform: translateX(-50%);
    
    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 3rem;
  
  &:nth-child(odd) {
    .timeline-content {
      margin-left: 0;
      margin-right: 50%;
      text-align: right;
      
      @media (max-width: 768px) {
        margin-left: 50px;
        margin-right: 0;
        text-align: left;
      }
    }
    
    .timeline-dot {
      left: 50%;
      transform: translateX(-50%);
      
      @media (max-width: 768px) {
        left: 20px;
        transform: translateX(-50%);
      }
    }
  }
  
  &:nth-child(even) {
    .timeline-content {
      margin-left: 50%;
      margin-right: 0;
      text-align: left;
      
      @media (max-width: 768px) {
        margin-left: 50px;
        margin-right: 0;
        text-align: left;
      }
    }
    
    .timeline-dot {
      left: 50%;
      transform: translateX(-50%);
      
      @media (max-width: 768px) {
        left: 20px;
        transform: translateX(-50%);
      }
    }
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background: #3b82f6;
  border: 4px solid #0a0a0a;
  border-radius: 50%;
  z-index: 2;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2);
`;

const TimelineContent = styled.div`
  background: rgba(59, 130, 246, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.1);
  border-radius: 12px;
  padding: 2rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 20px;
    width: 0;
    height: 0;
    border: 8px solid transparent;
    
    @media (max-width: 768px) {
      left: -16px;
      border-right-color: rgba(59, 130, 246, 0.1);
    }
  }
  
  &:nth-child(odd) &::before {
    right: -16px;
    border-left-color: rgba(59, 130, 246, 0.1);
    
    @media (max-width: 768px) {
      right: auto;
      left: -16px;
      border-left-color: transparent;
      border-right-color: rgba(59, 130, 246, 0.1);
    }
  }
  
  &:nth-child(even) &::before {
    left: -16px;
    border-right-color: rgba(59, 130, 246, 0.1);
  }
`;

const JobTitle = styled.h3`
  color: #3b82f6;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const CompanyName = styled.h4`
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const JobMeta = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #9ca3af;
  font-size: 0.9rem;
  
  .icon {
    color: #3b82f6;
  }
`;

const JobDescription = styled.p`
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const JobTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechnologyTag = styled.span`
  background: rgba(59, 130, 246, 0.2);
  color: #3b82f6;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
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

const Experience = ({ experience = [] }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  // Expériences par défaut si aucune n'est fournie
  const defaultExperience = [
    {
      title: 'Développeur Full Stack Senior',
      company: 'Tech Solutions Inc.',
      period: '2023 - Présent',
      location: 'Casablanca, Maroc',
      description: 'Développement d\'applications web complexes avec React et Node.js. Gestion d\'équipe de 5 développeurs et mise en place de bonnes pratiques de développement.',
      technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS', 'Docker']
    },
    {
      title: 'Développeur Frontend',
      company: 'Digital Agency',
      period: '2022 - 2023',
      location: 'Rabat, Maroc',
      description: 'Création d\'interfaces utilisateur modernes et responsives. Optimisation des performances et amélioration de l\'expérience utilisateur.',
      technologies: ['React', 'JavaScript', 'CSS3', 'HTML5', 'Bootstrap']
    },
    {
      title: 'Développeur Junior',
      company: 'Startup Innovation',
      period: '2021 - 2022',
      location: 'Marrakech, Maroc',
      description: 'Développement de fonctionnalités pour une application mobile et web. Participation à l\'architecture technique et aux réunions d\'équipe.',
      technologies: ['JavaScript', 'React Native', 'Node.js', 'MongoDB']
    }
  ];

  const displayExperience = experience.length > 0 ? experience : defaultExperience;

  return (
    <ExperienceSection id="experience" ref={ref}>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Mon Expérience
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Mon parcours professionnel et mes réalisations
        </SectionSubtitle>
        
        {displayExperience.length > 0 ? (
          <Timeline>
            {displayExperience.map((job, index) => (
              <TimelineItem
                key={`${job.company}-${job.period}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              >
                <TimelineDot className="timeline-dot" />
                <TimelineContent className="timeline-content">
                  <JobTitle>{job.title}</JobTitle>
                  <CompanyName>{job.company}</CompanyName>
                  <JobMeta>
                    <MetaItem>
                      <FaCalendarAlt className="icon" />
                      {job.period}
                    </MetaItem>
                    <MetaItem>
                      <FaMapMarkerAlt className="icon" />
                      {job.location}
                    </MetaItem>
                  </JobMeta>
                  <JobDescription>{job.description}</JobDescription>
                  <JobTechnologies>
                    {job.technologies && job.technologies.map(tech => (
                      <TechnologyTag key={tech}>{tech}</TechnologyTag>
                    ))}
                  </JobTechnologies>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        ) : (
          <EmptyState
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FaBriefcase className="icon" />
            <h3>Aucune expérience à afficher</h3>
            <p>Les expériences professionnelles apparaîtront ici.</p>
          </EmptyState>
        )}
      </Container>
    </ExperienceSection>
  );
};

export default Experience;
