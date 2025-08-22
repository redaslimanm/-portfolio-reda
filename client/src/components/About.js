import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUser, FaMapMarkerAlt, FaEnvelope, FaGraduationCap } from 'react-icons/fa';

const AboutSection = styled.section`
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

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutText = styled(motion.div)`
  h3 {
    font-size: 1.5rem;
    color: #3b82f6;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  p {
    font-size: 1.1rem;
    color: #d1d5db;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    color: #d1d5db;
    margin-bottom: 0.5rem;
    padding-left: 1.5rem;
    position: relative;
    
    &:before {
      content: "▹";
      position: absolute;
      left: 0;
      color: #3b82f6;
    }
  }
`;

const InfoGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(59, 130, 246, 0.2);
  
  .icon {
    color: #3b82f6;
    font-size: 1.2rem;
  }
  
  .content {
    h4 {
      color: #ffffff;
      font-size: 0.9rem;
      font-weight: 600;
      margin-bottom: 0.25rem;
    }
    
    p {
      color: #9ca3af;
      font-size: 0.9rem;
      margin: 0;
    }
  }
`;

const StatsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
  padding: 1.5rem;
  background: rgba(59, 130, 246, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(59, 130, 246, 0.1);
  
  .number {
    font-size: 2rem;
    font-weight: 700;
    color: #3b82f6;
    margin-bottom: 0.5rem;
  }
  
  .label {
    color: #9ca3af;
    font-size: 0.9rem;
    font-weight: 500;
  }
`;

const About = ({ profile }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <AboutSection id="about" ref={ref}>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          À propos de moi
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Découvrez mon parcours, mes compétences et ma passion pour le développement
        </SectionSubtitle>
        
        <AboutContent>
          <AboutText
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>Qui suis-je ?</h3>
            <p>
              Je suis un développeur passionné avec une expertise en développement web full-stack. 
              J'aime créer des applications modernes et performantes qui offrent une excellente 
              expérience utilisateur.
            </p>
            <p>
              Mon parcours m'a permis de travailler sur divers projets, de la conception à la 
              mise en production, en passant par le développement et les tests.
            </p>
            
            <h3>Mes objectifs</h3>
            <ul>
              <li>Créer des applications web innovantes et performantes</li>
              <li>Apprendre continuellement les nouvelles technologies</li>
              <li>Contribuer à des projets open source</li>
              <li>Partager mes connaissances avec la communauté</li>
            </ul>
            
            <InfoGrid
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <InfoItem>
                <FaUser className="icon" />
                <div className="content">
                  <h4>Nom</h4>
                  <p>{profile?.name || 'Reda'}</p>
                </div>
              </InfoItem>
              <InfoItem>
                <FaMapMarkerAlt className="icon" />
                <div className="content">
                  <h4>Localisation</h4>
                  <p>{profile?.location || 'Maroc'}</p>
                </div>
              </InfoItem>
              <InfoItem>
                <FaEnvelope className="icon" />
                <div className="content">
                  <h4>Email</h4>
                  <p>{profile?.email || 'reda@example.com'}</p>
                </div>
              </InfoItem>
              <InfoItem>
                <FaGraduationCap className="icon" />
                <div className="content">
                  <h4>Formation</h4>
                  <p>Développement Web</p>
                </div>
              </InfoItem>
            </InfoGrid>
          </AboutText>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <StatsGrid
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <StatItem>
                <div className="number">3+</div>
                <div className="label">Années d'expérience</div>
              </StatItem>
              <StatItem>
                <div className="number">15+</div>
                <div className="label">Projets réalisés</div>
              </StatItem>
              <StatItem>
                <div className="number">12+</div>
                <div className="label">Technologies maîtrisées</div>
              </StatItem>
              <StatItem>
                <div className="number">8+</div>
                <div className="label">Clients satisfaits</div>
              </StatItem>
            </StatsGrid>
          </motion.div>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About;
