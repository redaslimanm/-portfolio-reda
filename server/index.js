const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Portfolio API is running' });
});

// Route pour les informations du portfolio
app.get('/api/profile', (req, res) => {
  const profile = {
    name: 'Reda',
    title: 'Développeur & Programmeur',
    description: 'Passionné par le développement web et les nouvelles technologies',
    email: 'slimanireda87@gmail.com',
    location: 'Maroc',
    skills: [
      'JavaScript', 'React', 'Node.js', 'Python', 'Java', 'SQL',
      'MongoDB', 'Express.js', 'Git', 'Docker', 'AWS', 'TypeScript'
    ],
    experience: [
      {
        title: 'Développeur Full Stack',
        company: 'Tech Company',
        period: '2022 - Présent',
        description: 'Développement d\'applications web avec React et Node.js'
      },
      {
        title: 'Développeur Frontend',
        company: 'Startup',
        period: '2021 - 2022',
        description: 'Création d\'interfaces utilisateur modernes avec React'
      }
    ],
    projects: [
      {
        title: 'E-commerce Platform',
        description: 'Plateforme e-commerce complète avec React et Node.js',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        github: 'https://github.com/reda/ecommerce',
        live: 'https://ecommerce-demo.com'
      },
      {
        title: 'Task Management App',
        description: 'Application de gestion de tâches avec authentification',
        technologies: ['React', 'Express', 'JWT', 'PostgreSQL'],
        github: 'https://github.com/reda/task-manager',
        live: 'https://task-manager-demo.com'
      },
      {
        title: 'Weather Dashboard',
        description: 'Tableau de bord météo avec API externe',
        technologies: ['React', 'OpenWeather API', 'Chart.js'],
        github: 'https://github.com/reda/weather-dashboard',
        live: 'https://weather-demo.com'
      }
    ],
    education: [
      {
        degree: 'Master en Informatique',
        school: 'Université',
        year: '2021'
      },
      {
        degree: 'Licence en Développement Web',
        school: 'École Technique',
        year: '2019'
      }
    ]
  };
  
  res.json(profile);
});

// Route pour envoyer un email de contact
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Configuration du transporteur email (à configurer avec vos vraies données)
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
    
    const mailOptions = {
      from: email,
      to: 'slimanireda87@gmail.com',
      subject: `Nouveau message de ${name}`,
      text: message,
      html: `
        <h3>Nouveau message de contact</h3>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };
    
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Message envoyé avec succès!' });
  } catch (error) {
    console.error('Erreur email:', error);
    res.status(500).json({ success: false, message: 'Erreur lors de l\'envoi du message' });
  }
});

// Route pour les statistiques (optionnel)
app.get('/api/stats', (req, res) => {
  const stats = {
    projects: 15,
    experience: '3+ années',
    technologies: 12,
    clients: 8
  };
  res.json(stats);
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
