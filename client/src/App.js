import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loading from './components/Loading';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
`;

function App() {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('/api/profile');
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error('Erreur lors du chargement du profil:', error);
        // Fallback data si l'API n'est pas disponible
        setProfile({
          name: 'Reda',
          title: 'Développeur & Programmeur',
          description: 'Passionné par le développement web et les nouvelles technologies',
          email: 'slimanireda87@gmail.com',
          location: 'Maroc',
          skills: ['JavaScript', 'React', 'Node.js', 'Python', 'Java', 'SQL'],
          experience: [],
          projects: [],
          education: []
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Router>
      <AppContainer>
        <Navbar />
        <Hero profile={profile} />
        <About profile={profile} />
        <Skills skills={profile?.skills} />
        <Projects projects={profile?.projects} />
        <Experience experience={profile?.experience} />
        <Contact />
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
