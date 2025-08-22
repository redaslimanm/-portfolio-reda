import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  transition: all 0.3s ease;
  padding: 1rem 0;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #3b82f6;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.a)`
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: #3b82f6;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100vh;
  background: rgba(10, 10, 10, 0.98);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #333;
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: #3b82f6;
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <Nav scrolled={scrolled}>
      <NavContainer>
        <Logo
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => scrollToSection('hero')}
        >
          Reda
        </Logo>

        <NavLinks>
          <NavLink
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('about')}
          >
            À propos
          </NavLink>
          <NavLink
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('skills')}
          >
            Compétences
          </NavLink>
          <NavLink
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('projects')}
          >
            Projets
          </NavLink>
          <NavLink
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('experience')}
          >
            Expérience
          </NavLink>
          <NavLink
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </NavLink>
        </NavLinks>

        <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </NavContainer>

      {mobileMenuOpen && (
        <MobileMenu
          initial={{ x: 250 }}
          animate={{ x: 0 }}
          exit={{ x: 250 }}
          transition={{ duration: 0.3 }}
        >
          <MobileNavLink onClick={() => scrollToSection('about')}>
            À propos
          </MobileNavLink>
          <MobileNavLink onClick={() => scrollToSection('skills')}>
            Compétences
          </MobileNavLink>
          <MobileNavLink onClick={() => scrollToSection('projects')}>
            Projets
          </MobileNavLink>
          <MobileNavLink onClick={() => scrollToSection('experience')}>
            Expérience
          </MobileNavLink>
          <MobileNavLink onClick={() => scrollToSection('contact')}>
            Contact
          </MobileNavLink>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navbar;
