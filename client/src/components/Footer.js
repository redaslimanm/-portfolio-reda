import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: #0a0a0a;
  border-top: 1px solid rgba(59, 130, 246, 0.1);
  padding: 3rem 0 2rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  h3 {
    color: #3b82f6;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  
  p {
    color: #9ca3af;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  
  a {
    color: #9ca3af;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #3b82f6;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: #3b82f6;
    color: white;
    transform: translateY(-2px);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(59, 130, 246, 0.1);
  padding-top: 2rem;
  text-align: center;
  
  p {
    color: #9ca3af;
    font-size: 0.9rem;
    
    .heart {
      color: #ef4444;
      animation: heartbeat 1.5s ease-in-out infinite;
    }
  }
`;

const BackToTop = styled(motion.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
  transition: all 0.3s ease;
  z-index: 1000;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
  }
  
  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1rem;
    width: 45px;
    height: 45px;
  }
`;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <FooterContainer>
        <Container>
          <FooterContent>
            <FooterSection>
              <h3>Reda</h3>
              <p>
                Développeur passionné par la création d'applications web modernes 
                et performantes. Toujours à la recherche de nouveaux défis techniques.
              </p>
              <SocialLinks>
                <SocialLink
                  href="https://github.com/reda"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub size={18} />
                </SocialLink>
                <SocialLink
                  href="https://linkedin.com/in/reda"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin size={18} />
                </SocialLink>
                <SocialLink
                  href="https://twitter.com/reda"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTwitter size={18} />
                </SocialLink>
              </SocialLinks>
            </FooterSection>
            
            <FooterSection>
              <h3>Liens rapides</h3>
              <ul>
                <li><a href="#about">À propos</a></li>
                <li><a href="#skills">Compétences</a></li>
                <li><a href="#projects">Projets</a></li>
                <li><a href="#experience">Expérience</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </FooterSection>
            
            <FooterSection>
              <h3>Contact</h3>
              <p>N'hésitez pas à me contacter pour discuter de vos projets.</p>
              <ul>
                <li><a href="mailto:reda@example.com">reda@example.com</a></li>
                <li><a href="tel:+212600000000">+212 6 00 00 00 00</a></li>
                <li>Maroc</li>
              </ul>
            </FooterSection>
          </FooterContent>
          
          <FooterBottom>
            <p>
              © {currentYear} Reda. Tous droits réservés. 
              Fait avec <FaHeart className="heart" /> en React & Node.js
            </p>
          </FooterBottom>
        </Container>
      </FooterContainer>
      
      <BackToTop
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        ↑
      </BackToTop>
    </>
  );
};

export default Footer;
