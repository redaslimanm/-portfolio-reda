import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, FaNodeJs, FaJs, FaPython, FaJava, FaDatabase,
  FaGitAlt, FaDocker, FaAws, FaHtml5, FaCss3Alt, FaBootstrap
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTypescript, SiPostgresql } from 'react-icons/si';

const SkillsSection = styled.section`
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const SkillCategory = styled(motion.div)`
  background: rgba(59, 130, 246, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.1);
  border-radius: 12px;
  padding: 2rem;
  
  h3 {
    color: #3b82f6;
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
    text-align: center;
    font-weight: 600;
  }
`;

const SkillItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1rem;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(59, 130, 246, 0.1);
    transform: translateY(-2px);
  }
  
  .icon {
    font-size: 2rem;
    color: #3b82f6;
  }
  
  .name {
    color: #ffffff;
    font-size: 0.9rem;
    font-weight: 500;
    text-align: center;
  }
`;

const ProgressSection = styled.div`
  margin-top: 4rem;
`;

const ProgressTitle = styled(motion.h3)`
  color: #ffffff;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 600;
`;

const ProgressGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProgressItem = styled(motion.div)`
  background: rgba(59, 130, 246, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  
  .skill-name {
    color: #ffffff;
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  
  .progress-bar {
    width: 100%;
    height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 0.5rem;
  }
  
  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #3b82f6, #1d4ed8);
    border-radius: 4px;
    transition: width 1s ease;
  }
  
  .percentage {
    color: #9ca3af;
    font-size: 0.9rem;
    text-align: right;
  }
`;

const Skills = ({ skills = [] }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: FaReact },
        { name: "JavaScript", icon: FaJs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "HTML5", icon: FaHtml5 },
        { name: "CSS3", icon: FaCss3Alt },
        { name: "Bootstrap", icon: FaBootstrap }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: FaNodeJs },
        { name: "Express.js", icon: SiExpress },
        { name: "Python", icon: FaPython },
        { name: "Java", icon: FaJava },
        { name: "MongoDB", icon: SiMongodb },
        { name: "PostgreSQL", icon: SiPostgresql }
      ]
    },
    {
      title: "Outils & DevOps",
      skills: [
        { name: "Git", icon: FaGitAlt },
        { name: "Docker", icon: FaDocker },
        { name: "AWS", icon: FaAws },
        { name: "Database", icon: FaDatabase }
      ]
    }
  ];

  const progressSkills = [
    { name: "React", percentage: 90 },
    { name: "Node.js", percentage: 85 },
    { name: "JavaScript", percentage: 95 },
    { name: "Python", percentage: 80 },
    { name: "MongoDB", percentage: 75 },
    { name: "Docker", percentage: 70 }
  ];

  return (
    <SkillsSection id="skills" ref={ref}>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Mes Compétences
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Technologies et outils que j'utilise pour créer des applications modernes
        </SectionSubtitle>
        
        <SkillsGrid>
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <h3>{category.title}</h3>
              <SkillItems>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.6 + skillIndex * 0.1 }}
                  >
                    <skill.icon className="icon" />
                    <span className="name">{skill.name}</span>
                  </SkillItem>
                ))}
              </SkillItems>
            </SkillCategory>
          ))}
        </SkillsGrid>
        
        <ProgressSection>
          <ProgressTitle
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Niveau de maîtrise
          </ProgressTitle>
          
          <ProgressGrid>
            {progressSkills.map((skill, index) => (
              <ProgressItem
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              >
                <div className="skill-name">{skill.name}</div>
                <div className="progress-bar">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.percentage}%` } : {}}
                    transition={{ duration: 1, delay: 1.2 + index * 0.1 }}
                  />
                </div>
                <div className="percentage">{skill.percentage}%</div>
              </ProgressItem>
            ))}
          </ProgressGrid>
        </ProgressSection>
      </Container>
    </SkillsSection>
  );
};

export default Skills;
